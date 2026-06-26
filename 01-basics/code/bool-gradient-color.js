const GradientFactory = (function () {
  const COLOR_KEYS = ['red', 'green', 'blue'];
  const HEX_CHARS = '0123456789ABCDEF';

  const DEFAULT_BEGIN = { red: 0, green: 0, blue: 0 };
  const DEFAULT_END = { red: 255, green: 255, blue: 255 };
  const DEFAULT_STOPS = 24;

  function byteToHex(n) {
    return HEX_CHARS[(n >> 4) & 0x0f] + HEX_CHARS[n & 0x0f];
  }

  function rgbToHex({ red, green, blue }) {
    return '#' + byteToHex(red) + byteToHex(green) + byteToHex(blue);
  }

  function isRgbObject(color) {
    return (
      color !== null &&
      typeof color === 'object' &&
      'red' in color &&
      'green' in color &&
      'blue' in color
    );
  }

  function parseColor(color) {
    if (isRgbObject(color)) {
      return { red: color.red, green: color.green, blue: color.blue };
    }

    const hex = color.charAt(0) === '#' ? color.slice(1, 7) : color.slice(0, 6);
    return {
      red: Number.parseInt(hex.slice(0, 2), 16),
      green: Number.parseInt(hex.slice(2, 4), 16),
      blue: Number.parseInt(hex.slice(4, 6), 16),
    };
  }

  function interpolate(begin, end, ratio) {
    const color = {};
    for (const key of COLOR_KEYS) {
      color[key] = (end[key] - begin[key]) * ratio + begin[key];
    }
    return color;
  }

  function generate(opts = {}) {
    const begin = parseColor(opts.from ?? DEFAULT_BEGIN);
    const end = parseColor(opts.to ?? DEFAULT_END);
    const stopCount = opts.stops ?? DEFAULT_STOPS;
    const segments = Math.max(1, stopCount - 1);
    const colors = [];

    for (let i = 0; i < segments; i++) {
      colors.push(rgbToHex(interpolate(begin, end, i / segments)));
    }
    colors.push(rgbToHex(end));

    return colors;
  }

  return { generate };
})();

console.log(GradientFactory.generate({
  from: '#000000',
  to: '#999999',
  stops: 8,
}));

console.log(GradientFactory.generate({
  from: { red: 192, green: 255, blue: 238 },
  to: { red: 255, green: 255, blue: 255 },
  stops: 5,
}));

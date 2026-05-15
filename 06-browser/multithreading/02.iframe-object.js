const iframe = document.createElement('iframe');
document.body.append(iframe)
const FrameObject = iframe.contentWindow.Object;
console.log(FrameObject == Object);
console.log(new Object() instanceof FrameObject);
console.log(FrameObject.name);
this.garlic = true;

const soup = {
  garlic: false,
}

soup.hasGarlic = function () {
  console.log(this.garlic);
};

soup.hasGarlic();

soup.hasGarlic = () => console.log(this.garlic);

soup.hasGarlic();

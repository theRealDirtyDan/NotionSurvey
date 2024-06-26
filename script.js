const slider = document.getElementById("myRange");
const output = document.getElementById("valueDisplay");
const logoImage = document.getElementById("logoImage");

function getMood(value) {
  if (value <= 20) return "Serious";
  if (value <= 40) return "Balanced";
  if (value <= 60) return "Playful";
  return "Serious";
}

function updateMood(value) {
  output.textContent = getMood(value);

  // Update image based on mood
  if (value <= 20) {
    logoImage.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png";
  } else if (value <= 40) {
    logoImage.src =
      "https://www.logo.wine/a/logo/Ben_%26_Jerry's/Ben_%26_Jerry's-Logo.wine.svg";
  } else if (value <= 60) {
    logoImage.src =
      "https://asset.brandfetch.io/idMvnv36a4/idbiyBBgqE.svg?updated=1667567046965";
  } else {
    logoImage.src =
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Toys_%22R%22_Us_logo.svg";
  }
}

slider.addEventListener("input", function () {
  updateMood(this.value);
});

// Initialize with default value
updateMood(slider.value);

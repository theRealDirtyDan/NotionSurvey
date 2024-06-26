const slider = document.getElementById("myRange");
const output = document.getElementById("valueDisplay");
const logoImage = document.getElementById("logoImage");

function getWord(value) {
    if (value >= 0 && value <= 10) return "Playful";
    if (value >= 11 && value <= 20) return "Whimsical";
    if (value >= 21 && value <= 30) return "Lighthearted";
    if (value >= 31 && value <= 40) return "Fun";
    if (value >= 41 && value <= 50) return "Casual";
    if (value >= 51 && value <= 60) return "Balanced";
    if (value >= 61 && value <= 70) return "Neutral";
    if (value >= 71 && value <= 80) return "Structured";
    if (value >= 81 && value <= 90) return "Professional";
    if (value >= 91 && value <= 100) return "Serious";
}

function getLogo(value) {
    if (value >= 0 && value <= 10) return "https://upload.wikimedia.org/wikipedia/commons/a/a7/Toys_%22R%22_Us_logo.svg";
    if (value >= 11 && value <= 20) return "https://www.logo.wine/a/logo/Ben_%26_Jerry's/Ben_%26_Jerry's-Logo.wine.svg";
    if (value >= 21 && value <= 30) return "https://asset.brandfetch.io/idMvnv36a4/idbiyBBgqE.svg?updated=1667567046965";
    if (value >= 31 && value <= 40) return "https://seeklogo.com/images/F/fanta-logo-D5F156E49D-seeklogo.com.png";
    if (value >= 41 && value <= 50) return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Slack_Icon.png/1200px-Slack_Icon.png";
    if (value >= 51 && value <= 60) return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png";
    if (value >= 61 && value <= 70) return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/FedEx_Express.svg/113px-FedEx_Express.svg.png";
    if (value >= 71 && value <= 80) return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png";
    if (value >= 81 && value <= 90) return "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg";
    if (value >= 91 && value <= 100) return "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg";
}

slider.oninput = function() {
    const value = this.value;
    output.innerHTML = getWord(value);
    logoImage.src = getLogo(value);
};

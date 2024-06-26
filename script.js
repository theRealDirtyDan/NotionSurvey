body {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0; /* Background color for the page */
}

.slider-container {
  text-align: center;
  width: 80%;
  max-width: 500px;
  margin: 0 auto; /* Center align the slider container */
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #666;
}

.image-container {
  max-width: 200px;
  height: 100px;
  margin: 20px auto; /* Center align the image container */
}

img {
  max-width: 100%;
  max-height: 100%;
  display: block; /* Ensure the image is block level for margin: 0 auto; to work */
  margin: 0 auto; /* Center align the image */
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    #4285f4,
    #34a853,
    #fbbc05,
    #ea4335
  ); /* Gradient representing mood */
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  background-color: white; /* Thumb background color */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Thumb shadow */
  transition: background-color 0.3s;
}

.slider::-moz-range-thumb {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  background-color: white; /* Thumb background color */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Thumb shadow */
  transition: background-color 0.3s;
}

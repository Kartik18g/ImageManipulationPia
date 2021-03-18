// the desired aspect ratio of our output image (width / height)
const outputImageAspectRatio = 1;

// this image will hold our source image data
const inputImage = new Image();

inputImage.src = "./images/NY.jpeg";

inputImage.onload = () => {
  // let's store the width and height of our image

  const inputWidth = inputImage.naturalWidth;
  const inputHeight = inputImage.naturalHeight;

  console.log(inputWidth, inputHeight);

  // get the aspect ratio of the input image
  const inputImageAspectRatio = inputWidth / inputHeight;
  console.log(inputImageAspectRatio);

  // if it's bigger than our target aspect ratio
  let outputWidth = inputWidth;
  let outputHeight = inputHeight;
  if (inputImageAspectRatio > outputImageAspectRatio) {
    outputWidth = inputHeight * outputImageAspectRatio;
  } else if (inputImageAspectRatio < outputImageAspectRatio) {
    outputHeight = inputWidth / outputImageAspectRatio;
  }

  // calculate the position to draw the image at
  const outputX = (outputWidth - inputWidth) * 0.5;
  const outputY = (outputHeight - inputHeight) * 0.5;
  console.log(outputX, outputY);

  // create a canvas that will present the output image
  const outputImage = document.createElement("canvas");

  // set it to the same size as the image
  outputImage.width = 150;
  outputImage.height = inputHeight;

  // draw our image at position 0, 0 on the canvas
  const ctx = outputImage.getContext("2d");
  ctx.drawImage(inputImage, 0, 0);

  // show both the image and the canvas
  document.body.appendChild(inputImage);
  document.body.appendChild(outputImage);
};

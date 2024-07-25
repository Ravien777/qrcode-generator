function generateQRCode() {
  var text = document.getElementById("text").value;
  var width = parseInt(document.getElementById("width").value);
  var height = parseInt(document.getElementById("height").value);
  var imageUrl = document.getElementById("image").value;

  // Clear previous QR code
  document.getElementById("qrcode").innerHTML = "";

  // Create QR code
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: width,
    height: height,
  });

  // If image URL is provided, add the image to the QR code
  if (imageUrl) {
    setTimeout(function () {
      var qrCanvas = document.querySelector("#qrcode canvas");
      var context = qrCanvas.getContext("2d");
      var img = new Image();
      img.src = imageUrl;
      img.onload = function () {
        var imgWidth = width / 4;
        var imgHeight = height / 4;
        var imgX = (width - imgWidth) / 2;
        var imgY = (height - imgHeight) / 2;
        context.drawImage(img, imgX, imgY, imgWidth, imgHeight);
      };
    }, 100);
  }
}

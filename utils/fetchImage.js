const unsplashUrl =
  "https://source.unsplash.com/collection/8313047?auto=format";
function ImageLoader(url = unsplashUrl) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onerror = function() {
    console.log(xhr.statusText);
  };
  xhr.send(null);
  return (xhr.onload = function(e) {
    if (this.status == 200) {
      var blob = new Blob([this.response], { type: "image/png" });
      var img = new Image();
      img.src = window.URL.createObjectURL(blob);
      return (img.onload = function() {
        window.URL.revokeObjectURL(img.src);
        return img.src;
      });
    }
  });
}
export default unsplashUrl;

function showSpoiler(nomeSpoiler,elemento) {
  var spoilers,spoilerBox,text;
  spoilers = document.getElementsByClassName("spoilerBox");
  spoilerBox = document.getElementById(nomeSpoiler);
  text = spoilerBox.querySelector(".aboutTextGallery");

  if (  spoilerBox.style.opacity == "1") { //Se visibile
      spoilerBox.style.opacity = "0";
      spoilerBox.style.height = "0";
      text.style.display = "none";
  }
  else { //Se invisibile
    spoilerBox.style.opacity= "1";
    spoilerBox.style.height = "50%";
    text.style.display = "block";
  }


}

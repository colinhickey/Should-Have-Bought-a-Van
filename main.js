function showLightbox() {
    let imgElement = event.target.previousElementSibling;
  
    let lightbox = document.createElement("div");
    lightbox.id = "lightbox";
  
    let img = document.createElement("img");
    img.src = imgElement.src;
  
    let close = document.createElement("div");
    close.setAttribute("onclick", "removeLightbox()");
    let x = document.createTextNode("x");
    close.appendChild(x);
    close.className = "close";
  
    lightbox.appendChild(img);
    lightbox.appendChild(close);
  
    lightbox.style.visibility = "visible";
    lightbox.style.opacity = "1";
  
    console.log(lightbox);
  
    document.body.appendChild(lightbox);
  }
  
function removeLightbox() {
    let lightbox = document.getElementById("lightbox");
    console.log("before removal: " + lightbox);
    lightbox.innerHtml = "";
    console.log("after child deletion: " + lightbox);
    lightbox.remove();
  }
  
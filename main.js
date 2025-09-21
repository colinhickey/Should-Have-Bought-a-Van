function showLightbox() {
    let imgElement = event.target.previousElementSibling;
  
    let lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    
    // Add click event to close when clicking on the lightbox background
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            removeLightbox();
        }
    });
  
    let img = document.createElement("img");
    img.src = imgElement.src;
    
    // Add load event to resize image once it's loaded
    img.onload = function() {
        resizeImageToFit(img);
    };
  
    let close = document.createElement("div");
    close.setAttribute("onclick", "removeLightbox()");
    let x = document.createTextNode("x");
    close.appendChild(x);
    close.className = "close";
  
    lightbox.appendChild(img);
    lightbox.appendChild(close);
  
    lightbox.style.visibility = "visible";
    lightbox.style.opacity = "1";
  
    document.body.appendChild(lightbox);
    
    // Add ESC key listener
    document.addEventListener('keydown', handleEscKey);
}

function handleEscKey(e) {
    if (e.key === 'Escape') {
        removeLightbox();
    }
}

function resizeImageToFit(img) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const imageWidth = img.naturalWidth;
    const imageHeight = img.naturalHeight;
    
    // Calculate aspect ratios
    const imageAspectRatio = imageWidth / imageHeight;
    const windowAspectRatio = windowWidth / windowHeight;
    
    // If image is wider relative to its height than the window is,
    // constrain by width (100vw), otherwise constrain by height (100vh)
    if (imageAspectRatio > windowAspectRatio) {
        // Image is more landscape than the window - constrain by width
        img.style.width = "100vw";
        img.style.height = "auto";
    } else {
        // Image is more portrait than the window - constrain by height
        img.style.height = "100vh";
        img.style.width = "auto";
    }
}
  
function removeLightbox() {
    let lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.innerHTML = "";
        lightbox.remove();
        // Remove the ESC key listener when lightbox is closed
        document.removeEventListener('keydown', handleEscKey);
    }
}

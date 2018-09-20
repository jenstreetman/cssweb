// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.

function activateGallery(){
    
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div >img");
    let mainImage = document.querySelector("#gallery-photo img");
    
    
    thumbnails.forEach(function(thumbnail){
        //preloads large image
        let newImageSrc = thumbnail.dataset.largeVersion;
        let largeVersion = new Image();
        largeVersion.src = thumbnail.dataset.largeVersion;

        thumbnail.addEventListener("click", function(){
            //code to set clicked image as main image
            let newImageAlt = thumbnail.dataset.title;
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", newImageAlt);

            //change which image is current
            let currentClass = "current";
            document.querySelector("."+currentClass).classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);

            //update title and description in the right hand column
            let newImageTitle = thumbnail.dataset.title;
            let newImageDescription = thumbnail.dataset.description; 
            //alert(newImageTitle + newImageDescription);
            document.querySelector("#gallery-info > .title").innerHTML = newImageTitle;
            document.querySelector("#gallery-info > .description").innerHTML = newImageDescription;

          
        });
    });

}
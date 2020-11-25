pics = document.getElementById("pics");
createPictureHolder();
createImages();

function createPictureHolder() {
for(var i = 0; i < 18; i++) {
    picHolder = document.createElement("div");
    picHolder.className = "picture-holder";
    picHolder.id = "picture-holder-";
    pics.appendChild(picHolder);
}
}

function createImages() {
    for(var i = 0; i < picHolder.length; i++) {
        flipImage = document.createElement("div");
        flipImage.className = "imageFlip";
        flipImage.id = "image-flip" + (i+1);
        birdPic = document.createElement("img");
        birdPic.src = "(img/bird" + (i+1) + ".jpg)";
        birdPic.id = (i+1);
        birdPic.addEventListener("click", function(){
           flipImage(this.id); 
        });
        picHolder[i].appendChild(birdPic);
        picHolder[i].appendChild(flipImage);
    }
}

function flipImage(id) {
    console.log("you clicked on: " + id);
}
pics = document.getElementById("div");
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
        birdPic = document.createElement("img");
        birdPic.src = "(img/bird" + (i+1) + ".jpg)";
        birdPic.id = (i+1);
        birdPic.addEventListener("click", function(){
           flipImage(this.id); 
        });
        picHolder[i].appendChild(birdPic);
    }
}
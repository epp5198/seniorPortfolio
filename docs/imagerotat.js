function init() {
    rotate();
}

var thisImage = 0;
/*ebb: This javascript rotates images on reload from server*/

function rotate() {
    var images = new Array ('images/treewaterfall-sm.png', 'images/waterfallclose.png', 'images/waterfallonly.png', 'images/waterfalltreebw.png', 'images/waterrocks.png')
    
    /*ebb: This line randomizes the order of the images:*/
    var thisImage = Math.floor(Math.random() *(images.length));

    document.getElementById("rotator").src = images[thisImage];
    
    /*ebb: The next line sets the image rotation to happen over a time period of seconds. Comment out this next line out if you want to make the image rotation only happen on reload of the page. */
     setTimeout(rotate, 5 * 1000);
}

window.onload = init;
rotate;

function init() {
    rotate();
}

var thisImage = 0;
/*ebb: This javascript rotates images on reload from server*/

function rotate() {
    var images = new Array ('images/treewaterfall-sm.png', 'images/waterfallclose.png', 'images/waterfallonly.png', 'images/waterfalltreebw.png', 'images/partialeclipsesplitclouds.png', 'images/solarunion.png', 'images/totaleclipse.png', 'images/totaleclipseclose.png','images/bird.png', 'images/jellyfish.png', 'images/skihill.png', 'images/leafs.png', 'images/boatbeach.png', 'images/splash.png', 'images/reflect.png', 'images/wateroverrocks.png', 'images/falltrees.png', 'images/stars.png', 'images/dipperdots.png', 'images/colordipper.png', 'images/beach.png', 'images/boats.png', 'images/cloud.png', 'images/sunsetlake.png', 'images/moss.png', 'images/bubbles.png', 'images/waterfall.png', 'images/shroomtree.png', 'images/shroomstump.png', 'images/waterfallhigh.png', 'images/ttw.png', 'images/treeframe.png', 'images/treewaterfallrv.png', 'images/trees.png')
    
    /*ebb: This line randomizes the order of the images:*/
    var thisImage = Math.floor(Math.random() *(images.length));

    document.getElementById("rotator").src = images[thisImage];
    
    /*ebb: The next line sets the image rotation to happen over a time period of seconds. Comment out this next line out if you want to make the image rotation only happen on reload of the page. */
     setTimeout(rotate, 5 * 1000);
}

window.onload = init;
rotate;

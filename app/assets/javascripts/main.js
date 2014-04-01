// Textarea automatically adding line break




// Turning Cubes

var oldx = 0;
var oldy = 0;
var direction;
var lastTurn = Date.now();
var cubes = document.getElementsByClassName('cube');
var mouseDown = false;

$(document).bind("mousedown", function(){
    mouseDown = true;
});
$(document).bind("mouseup", function(){
    mouseDown = false;
});

$(document).bind("mousemove", function (e) {
    if (e.pageX > oldx && e.pageY > oldy) {
        direction="Front";
    }
    else if (e.pageX > oldx && e.pageY < oldy) {
        direction="Top";
    }
    else if (e.pageX < oldx && e.pageY < oldy) {
        direction="Left";
    }
    else if (e.pageX < oldx && e.pageY > oldy) {
        direction="Rear";
    }
    else if (e.pageX > oldx && e.pageY == oldy) {
        direction="Right";
    }
    else if (e.pageX == oldx && e.pageY > oldy) {
        direction="Bottom";
    }
    else if (e.pageX == oldx && e.pageY < oldy) {
        direction="Top";
    }
    else if (e.pageX < oldx && e.pageY == oldy) {
        direction="Front";
    }
    // if( mouseDown ) {
    //     console.log(direction);
    //     console.log(Date.now() - lastTurn);
    // }
    oldx=e.pageX;
    oldy=e.pageY;
    if( Date.now() - lastTurn > 500 ) {
        lastTurn = Date.now();
        for( var i = 0; i < cubes.length; i++ ) {
            cubes[i].className = "cube to" + direction;
        }
    }
});
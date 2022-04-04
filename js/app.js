var texts = [
    'Direct Entry Program 8',
    'We are born to code!',
    'Sri Lanka #1',
    'SE Pissange Ambalama'
];
var startingTime = null;
var i = 0;
var j = 0;
var elmStage = document.getElementById('stage');

function animateText(stamp){

    if (!startingTime){
        startingTime = stamp;
    }

    var interval = stamp - startingTime;

    if (interval >= 150){
        startingTime = stamp;

        var text = texts[j];
        elmStage.innerText = text.substring(0, i++);
        if (i > (text.length + 10)) {
            i = 0;
            j++;
            if (j === texts.length) j = 0;
        }
    }

    requestAnimationFrame(animateText);

}

requestAnimationFrame(animateText);
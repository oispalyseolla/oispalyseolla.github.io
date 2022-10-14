// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "https://www.oispalyseolla.tk/joni/img/2.png",
        "https://www.oispalyseolla.tk/joni/img/4.png",
        "https://www.oispalyseolla.tk/joni/img/8.png",
        "https://www.oispalyseolla.tk/joni/img/16.png",
        "https://www.oispalyseolla.tk/joni/img/32.png",
        "https://www.oispalyseolla.tk/joni/img/64.png",
        "https://www.oispalyseolla.tk/joni/img/128.png",
        "https://www.oispalyseolla.tk/joni/img/256.png",
        "https://www.oispalyseolla.tk/joni/img/512.png",
        "https://www.oispalyseolla.tk/joni/img/1024.png",
        "https://www.oispalyseolla.tk/joni/img/2048.png",
	"https://www.oispalyseolla.tk/joni/img.super.png",
	"https://www.oispalyseolla.tk/joni/img/katko.png"

    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }

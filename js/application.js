// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "https://oispalyseolla.tk/img/2.png",
        "https://oispalyseolla.tk/img/4.png",
        "https://oispalyseolla.tk/img/8.png",
        "https://oispalyseolla.tk/img/16.png",
        "https://oispalyseolla.tk/img/32.png",
        "https://oispalyseolla.tk/img/64.png",
        "https://oispalyseolla.tk/img/128.png",
        "https://oispalyseolla.tk/img/256.png",
        "https://oispalyseolla.tk/img/512.png",
        "https://oispalyseolla.tk/img/1024.png",
        "https://oispalyseolla.tk/img/2048.png",
	"https://oispalyseolla.tk/img/super.png",
	"https://oispalyseolla.tk/img/katko.png"

    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }

var game = {
	playerAge : ko.observable(),
	playerStatus : ko.observable()
};

var translator = new Language("en");
game.playerStatus(translator.getStr("player.live"));
game.playerAge(translator.getStr("player.age") + ": ");

function update(){
}

function draw(){
}

ko.applyBindings(game);

window.setInterval(function(){
	draw();
}, 1000);

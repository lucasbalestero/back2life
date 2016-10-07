var game = {
	playerStatus : ko.observable()
};

var translator = new Language("en");
game.playerStatus(translator.getStr("player.live"));


window.setInterval(function(){
	ko.applyBindings(game);
}, 1000);

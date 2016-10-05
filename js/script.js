var game = {
	playerStatus : ko.observable()
};

var translator = new Language("en");
game.playerStatus(translator.getStr("live"));
ko.applyBindings(game);

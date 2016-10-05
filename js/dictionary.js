function Language(lang){
	var __construct = function() {
		if (eval('typeof ' + lang) == 'undefined'){
			lang = "en";
		}
		return;
	  }()
		
		this.getStr = function(str, defaultStr) {
			var retStr = eval('eval(lang).' + str);																
			if (typeof retStr != 'undefined'){
				return retStr;
			} else {
				if (typeof defaultStr != 'undefined'){
					return defaultStr;
				} else {
		  		return eval('en.' + str);
				}
			}
		}
}

var en = {
	player : {
		live : "Live",
		work : "work"
	}
	
}

var br = {
	player : {
		live : "Vivo",
		work : "Trabalho"
	}
	
}

function DialoguesMgr() {
	var dialogues = [];
	var self = this;

	this.init = function(json) {
		var objects = JSON.parse(json);
		var node = null;
		for(var i=0; i<objects.length; i++) {
			if(objects[i].father == null) {
				node = objects[i];
				break;
			}
		}
		
		Serializer.initFromFile(node.uuid, objects);
	}
	
	this.getDialogues = function() {
		return dialogues;
	}
	
	this.addDialogue = function(dialogue) {
		
	}
}

var DialoguesMgr = new DialoguesMgr();

function DialoguesMgr() {
	var dialogues = [];

	this.init = function(json) {
		var objects = JSON.parse(json);
		debugger;
		console.log(objects);
	}
	
	this.getDialogues = function() {
		return dialogues;
	}

	var createDialogue = function(dialogue) {
		var dialogueBox = new DialogueBox();
		dialogueBox.Init(x - dragOffsetX, y - dragOffsetY);
		dialogueBoxes.push(dialogueBox);
	}
}

var DialoguesMgr = new DialoguesMgr();

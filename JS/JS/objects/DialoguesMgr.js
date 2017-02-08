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

	this.findDialogue = function(uuid) {
		for(var i=0; i<dialogues.length; i++) {
			if(dialogues[i].getUUID() == uuid) {
				return dialogues[i];
			}
		}

		return null;
	}

	this.addDialogue = function(fatherUUID) {
		var father = this.findDialogue(fatherUUID);
		if(father)
		{
			var guid = window.guid();
			var dialogueBox = new DialogueBox();
			dialogueBox.Init(guid);
			dialogueBox.setDetails(fatherUUID, "Dialogue");
			dialogueBox.setPos(father.getPos().x, father.getPos().y + BOX_OFFSET_Y);
			dialogues.push(dialogueBox);
			father.addChild(guid);
		}
	}
}

var DialoguesMgr = new DialoguesMgr();

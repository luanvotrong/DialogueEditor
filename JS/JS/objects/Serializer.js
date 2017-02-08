function Serializer() {
	this.initFromFile = function(node, objects) {
		var info = this.findInfo(objects, node);
		var dialogue = this.createDialogueFromInfo(info);
		for(var i=0; i<info.child.length; i++) {
			this.initFromFile(info.child[i], objects);
		}
	}

	this.findInfo = function(objects, uuid) {
		for(var i=0; i<objects.length; i++) {
			if(objects[i].uuid == uuid) {
				return objects[i];
			}
		}

		return; null;
	}

	this.createDialogueFromInfo = function(info) {
		var dialogueBox = new DialogueBox();
		dialogueBox.Init(info.uuid);
		dialogueBox.setDetails(info.father, info.text);
		dialogueBox.setPos(info.x, info.y);
		DialoguesMgr.getDialogues().push(dialogueBox);
	}
}

var Serializer = new Serializer();

function Deserializer() {
	var initFromFile = function(node, objects) {
		var info = findInfo(objects, node);
		var dialogue = self.createDialogueFromInfo(info);
		for(var i=0; i<info.child.length; i++) {
			initFromFile(info.child[i], objects);
		}
	}

	var findInfo = function(objects, uuid) {
		for(var i=0; i<objects.length; i++) {
			if(objects[i].uuid == uuid) {
				return objects[i];
			}
		}

		return; null;
	}

	this.createDialogueFromInfo = function(info) {
		var dialogueBox = new DialogueBox();
		dialogueBox.Init(info.uuid);
		dialogueBox.setDetails(info.father, info.text);
		dialogueBox.setPos(info.x, info.y);
		dialogues.push(dialogueBox);
	}
}

var Deserializer = new Deserializer();
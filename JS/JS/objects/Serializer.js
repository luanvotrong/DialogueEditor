function Serializer() {
	this.toFile = function() {
		var objects = DialoguesMgr.getDialogues();
		var node = null;
		for(var i=0; i<objects.length; i++) {
			if(objects[i].getFather() == null) {
				node = objects[i];
				break;
			}
		}
		
		var res = [];
		if(node) {
			this.createInfo(node.getUUID(), objects, res);
		}
		return JSON.stringify(res);
	}
	
	this.createInfo = function(node, objects, res) {
		var object = this.findInfo(objects, node);
		res.push(object.mySerialize());
		
		var child = object.getChild();
		for(var i=0; i<child.length; i++) {
			this.createInfo(child[i], objects, res);
		}
	}
	
	this.findInfo = function(objects, uuid) {
		for(var i=0; i<objects.length; i++) {
			if(objects[i].getUUID() == uuid) {
				return objects[i];
			}
		}

		return null;
	}
}

var Serializer = new Serializer();

function Deserializer() {
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
		for(var i=0; i<info.child.length; i++) {
			dialogueBox.addChild(info.child[i]);
		}
		DialoguesMgr.getDialogues().push(dialogueBox);
	}
}

var Deserializer = new Deserializer();
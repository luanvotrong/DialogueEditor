function Utils() {

    this.createObject = function(str) {
        var component;
        var finishingCreation = function () {
            if (component.status == Component.Ready) {
                    sprite = component.createObject(appWindow, {"x": 100, "y": 100});
                    if (sprite == null) {
                        // Error Handling
                        console.log("Error creating object");
                    }
                } else if (component.status == Component.Error) {
                    // Error Handling
                    console.log("Error loading component:", component.errorString());
                }
        }

        component
    }
}

var Utils = new Utils();

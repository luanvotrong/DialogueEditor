import QtQuick 2.5
import QtQuick.Window 2.2
import "../js/JSUtilities.js" as Utilities

Window {
    id: mainWindow
    objectName: "mainWindow"
    visible: true
    visibility: "Maximized"
    width: 640
    height: 480
    title: qsTr("Dialogue Editor")

    Item {
        MenuForm {
            id: menuForm
            anchors.bottom: undefined
            anchors.top: parent.top
        }

        MainForm {
            id: mainForm
            anchors.top: undefined
            anchors.bottom: parent.bottom
        }
    }

    Component.onCompleted: {
        menuForm.width = width
        menuForm.height = height * 10 / 100
        console.log(menuForm.width + " " + menuForm.height);

        mainForm.width = width
        mainForm.height = height * 90 / 100
        console.log(mainForm.width + " " + mainForm.height);
        Utilities.Utils.createObject();
    }
}

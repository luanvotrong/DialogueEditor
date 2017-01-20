import QtQuick 2.5
import QtQuick.Window 2.2

Window {
    property alias menuForm: menuForm
    property alias mainForm: mainForm

    id: mainWindow
    objectName: "mainWindow"
    visible: true
    visibility: "Maximized"
    width: 640
    height: 480
    title: qsTr("Hello World")

    MenuForm {
        id: menuForm
    }

    MainForm {
        id: mainForm
    }

    function init() {
        console.log("fuck yeah");
        menuForm.width = width
        menuForm.height = height * 20 / 100

        mainForm.width = width
        mainForm.height = height * 80 / 100
    }
}

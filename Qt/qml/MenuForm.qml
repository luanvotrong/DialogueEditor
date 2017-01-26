import QtQuick 2.4
import QtQuick.Controls 2.0

Item {
    Rectangle {
        anchors.fill: parent
        color: "black"
    }

    Button {
        text: "new dialogue"
        onClicked: {
            uiHandler.testClicked();
        }
    }

    Component.onCompleted: {
        console.log("completed");
    }
}

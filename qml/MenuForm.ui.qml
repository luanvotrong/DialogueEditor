import QtQuick 2.4
import QtQuick.Controls 1.4
import "main.js" a

Item {
    Rectangle {
        anchors.fill: parent
        color: "black"
    }

    Button {
        clicked: {
            Test.test
        }
    }
}

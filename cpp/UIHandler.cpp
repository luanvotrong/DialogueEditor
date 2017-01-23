#include "UIHandler.h"
#include <QDebug>

UIHandler::UIHandler(QObject *parent) : QObject(parent)
{
}

void UIHandler::testClicked() {
    qDebug() << "fafa";
}

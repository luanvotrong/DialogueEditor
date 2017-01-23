#include <QtDebug>
#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QQmlContext>

#include "MyMain.h"
#include "UIHandler.h"

MyMain::MyMain()
{
    engine = new QQmlApplicationEngine();
    uiHandler = new UIHandler();
}

void MyMain::Init()
{
    engine->rootContext()->setContextProperty("uiHandler", uiHandler);

    engine->load(QUrl(QStringLiteral("qrc:/main.qml")));
    QObject* root = engine->rootObjects().first();
    QMetaObject::invokeMethod(root, "init");
}

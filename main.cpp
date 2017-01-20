#include <QtDebug>
#include <QGuiApplication>
#include <QQmlApplicationEngine>

int main(int argc, char *argv[])
{
    QGuiApplication app(argc, argv);

    QQmlApplicationEngine engine;
    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));

    QObject* root = engine.rootObjects().first();
    QVariant param;
    QVariant returnParam;
    QMetaObject::invokeMethod(root,
                              "init");

    return app.exec();
}

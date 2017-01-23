#include <QGuiApplication>
#include "MyMain.h"

int main(int argc, char *argv[])
{
    QGuiApplication app(argc, argv);
    MyMain myMain;
    myMain.Init();

    return app.exec();
}

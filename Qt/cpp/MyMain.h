#ifndef MYMAIN_H
#define MYMAIN_H

class UIHandler;
class QQmlApplicationEngine;

class MyMain
{
public:
    QQmlApplicationEngine* engine;
    UIHandler* uiHandler;

public:
    MyMain();
    void Init();
};

#endif // MYMAIN_H

#ifndef UIHANDLER_H
#define UIHANDLER_H

#include <QObject>

class UIHandler : public QObject
{
    Q_OBJECT
public:
    explicit UIHandler(QObject *parent = 0);
    Q_INVOKABLE void testClicked();

signals:

public slots:
};

#endif // UIHANDLER_H

module view.mediator
{
/**
 * 测试中介
 * @author
 */
import Mediator = mvc.Mediator
import TestProxy = model.proxy.TestProxy
import Notification = mvc.Notification
import TestPanel = view.ui.TestPanel
export class TestMediator extends Mediator
{
    private tp:TestProxy;
    private testPanel:TestPanel;
    public constructor()
    {
        super();
        this.testPanel = MvcTest.testPanel;
        this.testPanel.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
        this.tp = <TestProxy>this.retrieveProxy("model.proxy.TestProxy");
        this.notificationList.push("btnClick");
    }

    private addToStage(event:egret.Event):void
    {
        this.testPanel.btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
    }

    private touchHandler(event:egret.TouchEvent):void
    {
        //testProxy 发送消息
        this.tp.addCount();
    }

    protected handleNotification(notification:Notification):void
    {
        switch (notification.notificationName)
        {
            case "btnClick":
                console.log("this.tp.index: " + this.tp.index);
                break;
        }
    }
}
}

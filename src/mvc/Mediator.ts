module mvc
{
/**
 * 操作ui的中介
 * @author Kanon
 */
import NotificationCenter = mvc.support.NotificationCenter;
export class Mediator
{
    protected facade:Facade;
    protected notificationList:string[];
    public name:string;
    public constructor()
    {
        this.name = egret.getQualifiedClassName(this);
        this.facade = Facade.getInstance();
        this.notificationList = [];
        NotificationCenter.getInstance().addObserver(Facade.MVC_MSG, this.getNotificationHandler, this);
    }

    //接受到内部消息
    private getNotificationHandler(param:any[]):void
    {
        var notification:Notification = param[0];
        var count:number = this.notificationList.length;
        for (var i:number = 0; i < count; ++i)
        {
            //监听的消息名称
            var name:string = this.notificationList[i];
            //查找添加过感兴趣的消息
            if(name == notification.notificationName)
            {
                this.handleNotification(notification);
				break;
            }
        }
    }

    /**
     * 发送消息
     * @param notificationName      消息名称
     * @param obj                   参数对象
     */
    protected sendNotification(notificationName:string, obj:Object):void
    {
        this.facade.sendNotification(notificationName, obj);
    }

    //执行消息的方法
    protected handleNotification(notification:Notification):void
    {
        //之类继承重写
    }

    /**
     * 获取proxy实例
     * @param name  proxy名称
     */
    public retrieveProxy(name:string):Proxy
    {
        return this.facade.retrieveProxy(name);
    }

    /**
     * 获取mediator实例
     * @param name  mediator名称
     */
    public retrieveMediator(name:string):Mediator
    {
        return this.facade.retrieveMediator(name);
    }
}
}

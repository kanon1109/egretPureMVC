/**
 * Created by tangben on 2015/7/16.
 */
module mvc
{
/**
 * 消息中心
 * @author
 */
import NotificationCenter = mvc.support.NotificationCenter;
export class Facade
{
    //存放mediator的字典
    private mediatorDict:Object;
    //存放proxy的字典
    private proxyDict:Object;
    //单例
    private static instance:Facade = null;
    //mvc内部消息名称
    public static MVC_MSG:string = "mvc_msg";

    public constructor()
    {
        this.mediatorDict = {};
        this.proxyDict = {};
    }

    //获取单例
    public static getInstance():Facade
    {
        if(Facade.instance == null) Facade.instance = new Facade();
        return Facade.instance;
    }

    /**
     * 获取proxy实例
     * @param name  proxy名称
     */
    public retrieveProxy(name:string):Proxy
    {
        return this.proxyDict[name];
    }

    /**
     * 获取mediator实例
     * @param name  mediator名称
     */
    public retrieveMediator(name:string):Mediator
    {
        return this.mediatorDict[name];
    }

    /**
     * 注册mediator
     * @param mediator
     */
    public registerMediator(mediator:Mediator):void
    {
        this.mediatorDict[mediator.name] = mediator;
    }


    /**
     * 注册proxy
     * @param proxy
     */
    public registerProxy(proxy:Proxy):void
    {
        this.proxyDict[proxy.name] = proxy;
    }


    public initProxyData():void
    {
        for(var key in this.proxyDict)
        {
            var proxy:Proxy = this.proxyDict[key];
            proxy.initData();
        }
    }

    /**
     * 发送消息
     * @param notificationName      消息名称
     * @param obj                   穿的参数
     */
    public sendNotification(notificationName:string, obj:Object):void
    {
        var notification:Notification = new Notification();
        notification.notificationName = notificationName;
        notification.obj = obj;
        NotificationCenter.getInstance().postNotification(Facade.MVC_MSG, notification);
    }
}
}
module mvc
{
/**
 *
 * 管理数据
 * @author Kanon
 */
export class Proxy
{
    protected facade:Facade;
    public name:string;
    public constructor()
    {
        this.name = egret.getQualifiedClassName(this);
        this.facade = Facade.getInstance();
    }

    public initData():void
    {
        //子类继承
    }

    /**
     * 获取proxy
     * @param name  proxy名称
     * @returns {Proxy}
     */
    protected retrieveProxy(name:string):Proxy
    {
        return this.facade.retrieveProxy(name);
    }

    //发送消息
    protected sendNotification(notificationName:string, obj:Object = null):void
    {
        this.facade.sendNotification(notificationName, obj);
    }
    }
}

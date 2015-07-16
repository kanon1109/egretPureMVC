module mvc.support
{
/**
 * 消息中心
 * @author
 */
export class NotificationCenter
{
    //单例
    private static instance:NotificationCenter;
    //存放消息列表的字典
    private notificationDict:Object;
    //存放this指向列表的字典
    private thisObjDict:Object;
    public constructor()
    {
        this.notificationDict = {};
        this.thisObjDict = {};
    }

    //获取单例
    public static getInstance():NotificationCenter
    {
        if (!NotificationCenter.instance)
            NotificationCenter.instance = new NotificationCenter();
        return NotificationCenter.instance;
    }

    /**
     * 发送消息
     * @param name          消息名称
     * @param argArray      消息所带的参数列表
     */
    public postNotification(name:string, ...argArray: any[]):void
    {
        if (!this.notificationDict.hasOwnProperty(name)) return;
        var funList:Function[] = this.notificationDict[name];
        var thisList:Function[] = this.thisObjDict[name];

        var length:number = funList.length;
        for(var i:number = 0; i < length; ++i)
        {
            var fun:Function = funList[i];
            var thisObj:any = thisList[i];
            fun.call(thisObj, argArray);
        }
    }

    /**
     * 注册观察者
     * @param name      消息名称
     * @param func      回调函数
     * @param thisObj   this指向
     */
    public addObserver(name:string, func:Function, thisObj:any):void
    {
        if (!this.notificationDict.hasOwnProperty(name))
        {
            //消息名称未注册过
            var funList:Function[] = [];
            var thisList:any[] = [];

            funList.push(func);
            thisList.push(thisObj);

            this.notificationDict[name] = funList;
            this.thisObjDict[name] = thisList;
        }
        else
        {
            var funList:Function[] = this.notificationDict[name];
            var thisList:any[] = this.thisObjDict[name];
            funList.push(func);
            thisList.push(thisObj);
        }
    }

    /**
     * 删除某个消息的观察者
     * @param name  消息名称
     */
    public removeObserver(name:string):void
    {
        if (!this.notificationDict.hasOwnProperty(name)) return;
        delete this.notificationDict[name];
        delete this.thisObjDict[name];
    }

    //删除所有观察者
    public removeObservers():void
    {
        delete this.notificationDict;
        delete this.thisObjDict;
    }
}
}

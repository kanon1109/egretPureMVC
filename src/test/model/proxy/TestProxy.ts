module model.proxy
{
/**
 * 测试
 * @author Kanon
 */
import Proxy = mvc.Proxy;
export class TestProxy extends Proxy
{
    public index:number = 0;
    public constructor()
    {
        super();
    }

    public initData():void
    {
        this.index = 1;
    }

    public addCount():void
    {
        this.index++;
        this.sendNotification("btnClick");
    }
}
}

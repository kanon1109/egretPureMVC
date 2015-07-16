/**
 *
 * @author 
 */
import NotificationCenter = mvc.support.NotificationCenter;
class NotificationCenterTest 
{
    public constructor()
    {
        console.log(egret.getQualifiedClassName(this));
        NotificationCenter.getInstance().addObserver("test", this.test, this);
        NotificationCenter.getInstance().addObserver("test2", this.test2, this);
        NotificationCenter.getInstance().postNotification("test");
        NotificationCenter.getInstance().postNotification("test2", "kanon", 10);
    }

    private test():void
    {
        //NotificationCenter.getInstance().removeObserver("test2");
        console.log("its test function");
    }

    private test2(ary:any[]):void
    {
        var str:string = ary[0];
        var index:number = ary[1];
        console.log("its test2 function by " + str + " index:" +  index);
    }
}

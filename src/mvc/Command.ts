/**
 * Created by tangben on 2015/7/16.
 */
module mvc
{
/**
 * @author Kanon
 */
export class Command
{
    protected facade:Facade;
    public constructor()
    {
        this.facade = Facade.getInstance();
    }

    //执行
    public execute(notification:Notification)
    {
        //子类继承
        console.log("Command execute");
    }
}
}
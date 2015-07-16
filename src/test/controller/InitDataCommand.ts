module controller 
{
/**
 *
 * @author Kanon
 */
import Notification = mvc.Notification
import Command = mvc.Command
export class InitDataCommand extends Command
{
    public execute(notification:Notification):void
    {
        this.facade.initProxyData();
        console.log("InitDataCommand execute");
    }
}
}

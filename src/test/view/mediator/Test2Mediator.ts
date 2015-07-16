module view.mediator
{
/**
 *
 * @author
 *
 */
import Mediator = mvc.Mediator
import Notification = mvc.Notification
export class Test2Mediator extends Mediator
{
	public constructor()
	{
        super();
        this.notificationList.push("btnClick");
	}

    protected handleNotification(notification:Notification):void
    {
        switch (notification.notificationName)
        {
            case "btnClick":
                console.log("btnClick");
                break;
        }
    }
}
}

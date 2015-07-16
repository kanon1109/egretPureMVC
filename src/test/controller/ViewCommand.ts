module controller
{
/**
 *
 * @author
 */
import Notification = mvc.Notification
import Command = mvc.Command
import TestMediator = view.mediator.TestMediator
import Test2Mediator = view.mediator.Test2Mediator
export class ViewCommand extends Command
{
    public execute(notification:Notification):void
    {
		//在这里将所有Proxy注册创建
		this.facade.registerMediator(new TestMediator());
		this.facade.registerMediator(new Test2Mediator());
	}
}
}

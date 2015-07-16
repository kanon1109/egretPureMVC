module controller
{
/**
 *
 * @author
 */
import Notification = mvc.Notification
import Command = mvc.Command
import TestProxy = model.proxy.TestProxy
export class ModelCommand extends Command
{
	public execute(notification:Notification):void
    {
        //在这里将所有Proxy注册创建
        this.facade.registerProxy(new TestProxy());
	}
}
}

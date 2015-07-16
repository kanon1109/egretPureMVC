/**
 *	mvc 测试
 * @author Kanon
 */
import ModelCommand = controller.ModelCommand;
import ViewCommand = controller.ViewCommand;
import InitDataCommand = controller.InitDataCommand;
import TestPanel = view.ui.TestPanel;
class MvcTest extends egret.Sprite
{
    public static testPanel:TestPanel;
    public constructor()
    {
        super();
        MvcTest.testPanel = new TestPanel();
        this.addChild(MvcTest.testPanel);
        this.startMvc();
    }

    private startMvc():void
    {
        var m:ModelCommand = new ModelCommand();
        var v:ViewCommand = new ViewCommand();
        var dataCommand:InitDataCommand = new InitDataCommand();
        m.execute(null);
        v.execute(null);
        dataCommand.execute(null);
    }
}

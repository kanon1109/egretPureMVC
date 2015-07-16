/**
 *	mvc 测试
 * @author Kanon
 */
var ModelCommand = controller.ModelCommand;
var ViewCommand = controller.ViewCommand;
var InitDataCommand = controller.InitDataCommand;
var TestPanel = view.ui.TestPanel;
var MvcTest = (function (_super) {
    __extends(MvcTest, _super);
    function MvcTest() {
        _super.call(this);
        MvcTest.testPanel = new TestPanel();
        this.addChild(MvcTest.testPanel);
        this.startMvc();
    }
    var __egretProto__ = MvcTest.prototype;
    __egretProto__.startMvc = function () {
        var m = new ModelCommand();
        var v = new ViewCommand();
        var dataCommand = new InitDataCommand();
        m.execute(null);
        v.execute(null);
        dataCommand.execute(null);
    };
    return MvcTest;
})(egret.Sprite);
MvcTest.prototype.__class__ = "MvcTest";
//# sourceMappingURL=MvcTest.js.map
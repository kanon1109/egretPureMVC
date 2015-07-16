var controller;
(function (controller) {
    var Command = mvc.Command;
    var TestMediator = view.mediator.TestMediator;
    var Test2Mediator = view.mediator.Test2Mediator;
    var ViewCommand = (function (_super) {
        __extends(ViewCommand, _super);
        function ViewCommand() {
            _super.apply(this, arguments);
        }
        var __egretProto__ = ViewCommand.prototype;
        __egretProto__.execute = function (notification) {
            //在这里将所有Proxy注册创建
            this.facade.registerMediator(new TestMediator());
            this.facade.registerMediator(new Test2Mediator());
        };
        return ViewCommand;
    })(Command);
    controller.ViewCommand = ViewCommand;
    ViewCommand.prototype.__class__ = "controller.ViewCommand";
})(controller || (controller = {}));
//# sourceMappingURL=ViewCommand.js.map
var controller;
(function (controller) {
    var Command = mvc.Command;
    var TestProxy = model.proxy.TestProxy;
    var ModelCommand = (function (_super) {
        __extends(ModelCommand, _super);
        function ModelCommand() {
            _super.apply(this, arguments);
        }
        var __egretProto__ = ModelCommand.prototype;
        __egretProto__.execute = function (notification) {
            //在这里将所有Proxy注册创建
            this.facade.registerProxy(new TestProxy());
        };
        return ModelCommand;
    })(Command);
    controller.ModelCommand = ModelCommand;
    ModelCommand.prototype.__class__ = "controller.ModelCommand";
})(controller || (controller = {}));
//# sourceMappingURL=ModelCommand.js.map
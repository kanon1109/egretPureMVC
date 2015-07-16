var controller;
(function (controller) {
    var Command = mvc.Command;
    var InitDataCommand = (function (_super) {
        __extends(InitDataCommand, _super);
        function InitDataCommand() {
            _super.apply(this, arguments);
        }
        var __egretProto__ = InitDataCommand.prototype;
        __egretProto__.execute = function (notification) {
            this.facade.initProxyData();
            console.log("InitDataCommand execute");
        };
        return InitDataCommand;
    })(Command);
    controller.InitDataCommand = InitDataCommand;
    InitDataCommand.prototype.__class__ = "controller.InitDataCommand";
})(controller || (controller = {}));
//# sourceMappingURL=InitDataCommand.js.map
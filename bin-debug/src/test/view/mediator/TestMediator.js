var view;
(function (view) {
    var mediator;
    (function (mediator) {
        /**
         * 测试中介
         * @author
         */
        var Mediator = mvc.Mediator;
        var TestMediator = (function (_super) {
            __extends(TestMediator, _super);
            function TestMediator() {
                _super.call(this);
                this.testPanel = MvcTest.testPanel;
                this.testPanel.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
                this.tp = this.retrieveProxy("model.proxy.TestProxy");
                this.notificationList.push("btnClick");
            }
            var __egretProto__ = TestMediator.prototype;
            __egretProto__.addToStage = function (event) {
                this.testPanel.btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
            };
            __egretProto__.touchHandler = function (event) {
                //testProxy 发送消息
                this.tp.addCount();
            };
            __egretProto__.handleNotification = function (notification) {
                switch (notification.notificationName) {
                    case "btnClick":
                        console.log("this.tp.index: " + this.tp.index);
                        break;
                }
            };
            return TestMediator;
        })(Mediator);
        mediator.TestMediator = TestMediator;
        TestMediator.prototype.__class__ = "view.mediator.TestMediator";
    })(mediator = view.mediator || (view.mediator = {}));
})(view || (view = {}));
//# sourceMappingURL=TestMediator.js.map
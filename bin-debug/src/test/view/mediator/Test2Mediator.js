var view;
(function (view) {
    var mediator;
    (function (mediator) {
        /**
         *
         * @author
         *
         */
        var Mediator = mvc.Mediator;
        var Test2Mediator = (function (_super) {
            __extends(Test2Mediator, _super);
            function Test2Mediator() {
                _super.call(this);
                this.notificationList.push("btnClick");
            }
            var __egretProto__ = Test2Mediator.prototype;
            __egretProto__.handleNotification = function (notification) {
                switch (notification.notificationName) {
                    case "btnClick":
                        console.log("btnClick");
                        break;
                }
            };
            return Test2Mediator;
        })(Mediator);
        mediator.Test2Mediator = Test2Mediator;
        Test2Mediator.prototype.__class__ = "view.mediator.Test2Mediator";
    })(mediator = view.mediator || (view.mediator = {}));
})(view || (view = {}));
//# sourceMappingURL=Test2Mediator.js.map
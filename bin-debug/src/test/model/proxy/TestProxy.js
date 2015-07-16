var model;
(function (model) {
    var proxy;
    (function (proxy) {
        /**
         * 测试
         * @author Kanon
         */
        var Proxy = mvc.Proxy;
        var TestProxy = (function (_super) {
            __extends(TestProxy, _super);
            function TestProxy() {
                _super.call(this);
                this.index = 0;
            }
            var __egretProto__ = TestProxy.prototype;
            __egretProto__.initData = function () {
                this.index = 1;
            };
            __egretProto__.addCount = function () {
                this.index++;
                this.sendNotification("btnClick");
            };
            return TestProxy;
        })(Proxy);
        proxy.TestProxy = TestProxy;
        TestProxy.prototype.__class__ = "model.proxy.TestProxy";
    })(proxy = model.proxy || (model.proxy = {}));
})(model || (model = {}));
//# sourceMappingURL=TestProxy.js.map
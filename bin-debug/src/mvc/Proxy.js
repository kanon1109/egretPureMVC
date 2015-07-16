var mvc;
(function (mvc) {
    /**
     *
     * 管理数据
     * @author Kanon
     */
    var Proxy = (function () {
        function Proxy() {
            this.name = egret.getQualifiedClassName(this);
            this.facade = mvc.Facade.getInstance();
        }
        var __egretProto__ = Proxy.prototype;
        __egretProto__.initData = function () {
            //子类继承
        };
        /**
         * 获取proxy
         * @param name  proxy名称
         * @returns {Proxy}
         */
        __egretProto__.retrieveProxy = function (name) {
            return this.facade.retrieveProxy(name);
        };
        //发送消息
        __egretProto__.sendNotification = function (notificationName, obj) {
            if (obj === void 0) { obj = null; }
            this.facade.sendNotification(notificationName, obj);
        };
        return Proxy;
    })();
    mvc.Proxy = Proxy;
    Proxy.prototype.__class__ = "mvc.Proxy";
})(mvc || (mvc = {}));
//# sourceMappingURL=Proxy.js.map
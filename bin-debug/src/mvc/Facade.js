/**
 * Created by tangben on 2015/7/16.
 */
var mvc;
(function (mvc) {
    /**
     * 消息中心
     * @author
     */
    var NotificationCenter = mvc.support.NotificationCenter;
    var Facade = (function () {
        function Facade() {
            this.mediatorDict = {};
            this.proxyDict = {};
        }
        var __egretProto__ = Facade.prototype;
        //获取单例
        Facade.getInstance = function () {
            if (Facade.instance == null)
                Facade.instance = new Facade();
            return Facade.instance;
        };
        /**
         * 获取proxy实例
         * @param name  proxy名称
         */
        __egretProto__.retrieveProxy = function (name) {
            return this.proxyDict[name];
        };
        /**
         * 获取mediator实例
         * @param name  mediator名称
         */
        __egretProto__.retrieveMediator = function (name) {
            return this.mediatorDict[name];
        };
        /**
         * 注册mediator
         * @param mediator
         */
        __egretProto__.registerMediator = function (mediator) {
            this.mediatorDict[mediator.name] = mediator;
        };
        /**
         * 注册proxy
         * @param proxy
         */
        __egretProto__.registerProxy = function (proxy) {
            this.proxyDict[proxy.name] = proxy;
        };
        __egretProto__.initProxyData = function () {
            for (var key in this.proxyDict) {
                var proxy = this.proxyDict[key];
                proxy.initData();
            }
        };
        /**
         * 发送消息
         * @param notificationName      消息名称
         * @param obj                   穿的参数
         */
        __egretProto__.sendNotification = function (notificationName, obj) {
            var notification = new mvc.Notification();
            notification.notificationName = notificationName;
            notification.obj = obj;
            NotificationCenter.getInstance().postNotification(Facade.MVC_MSG, notification);
        };
        //单例
        Facade.instance = null;
        //mvc内部消息名称
        Facade.MVC_MSG = "mvc_msg";
        return Facade;
    })();
    mvc.Facade = Facade;
    Facade.prototype.__class__ = "mvc.Facade";
})(mvc || (mvc = {}));
//# sourceMappingURL=Facade.js.map
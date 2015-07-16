var mvc;
(function (mvc) {
    /**
     * 操作ui的中介
     * @author Kanon
     */
    var NotificationCenter = mvc.support.NotificationCenter;
    var Mediator = (function () {
        function Mediator() {
            this.name = egret.getQualifiedClassName(this);
            this.facade = mvc.Facade.getInstance();
            this.notificationList = [];
            NotificationCenter.getInstance().addObserver(mvc.Facade.MVC_MSG, this.getNotificationHandler, this);
        }
        var __egretProto__ = Mediator.prototype;
        //接受到内部消息
        __egretProto__.getNotificationHandler = function (param) {
            var notification = param[0];
            var count = this.notificationList.length;
            for (var i = 0; i < count; ++i) {
                //监听的消息名称
                var name = this.notificationList[i];
                //查找添加过感兴趣的消息
                if (name == notification.notificationName) {
                    this.handleNotification(notification);
                }
            }
        };
        /**
         * 发送消息
         * @param notificationName      消息名称
         * @param obj                   参数对象
         */
        __egretProto__.sendNotification = function (notificationName, obj) {
            this.facade.sendNotification(notificationName, obj);
        };
        //执行消息的方法
        __egretProto__.handleNotification = function (notification) {
            //之类继承重写
        };
        /**
         * 获取proxy实例
         * @param name  proxy名称
         */
        __egretProto__.retrieveProxy = function (name) {
            return this.facade.retrieveProxy(name);
        };
        /**
         * 获取mediator实例
         * @param name  mediator名称
         */
        __egretProto__.retrieveMediator = function (name) {
            return this.facade.retrieveMediator(name);
        };
        return Mediator;
    })();
    mvc.Mediator = Mediator;
    Mediator.prototype.__class__ = "mvc.Mediator";
})(mvc || (mvc = {}));
//# sourceMappingURL=Mediator.js.map
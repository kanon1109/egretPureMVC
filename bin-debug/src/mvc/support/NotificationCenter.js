var mvc;
(function (mvc) {
    var support;
    (function (support) {
        /**
         * 消息中心
         * @author
         */
        var NotificationCenter = (function () {
            function NotificationCenter() {
                this.notificationDict = {};
                this.thisObjDict = {};
            }
            var __egretProto__ = NotificationCenter.prototype;
            //获取单例
            NotificationCenter.getInstance = function () {
                if (!NotificationCenter.instance)
                    NotificationCenter.instance = new NotificationCenter();
                return NotificationCenter.instance;
            };
            /**
             * 发送消息
             * @param name          消息名称
             * @param argArray      消息所带的参数列表
             */
            __egretProto__.postNotification = function (name) {
                var argArray = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    argArray[_i - 1] = arguments[_i];
                }
                if (!this.notificationDict.hasOwnProperty(name))
                    return;
                var funList = this.notificationDict[name];
                var thisList = this.thisObjDict[name];
                var length = funList.length;
                for (var i = 0; i < length; ++i) {
                    var fun = funList[i];
                    var thisObj = thisList[i];
                    fun.call(thisObj, argArray);
                }
            };
            /**
             * 注册观察者
             * @param name      消息名称
             * @param func      回调函数
             * @param thisObj   this指向
             */
            __egretProto__.addObserver = function (name, func, thisObj) {
                if (!this.notificationDict.hasOwnProperty(name)) {
                    //消息名称未注册过
                    var funList = [];
                    var thisList = [];
                    funList.push(func);
                    thisList.push(thisObj);
                    this.notificationDict[name] = funList;
                    this.thisObjDict[name] = thisList;
                }
                else {
                    var funList = this.notificationDict[name];
                    var thisList = this.thisObjDict[name];
                    funList.push(func);
                    thisList.push(thisObj);
                }
            };
            /**
             * 删除某个消息的观察者
             * @param name  消息名称
             */
            __egretProto__.removeObserver = function (name) {
                if (!this.notificationDict.hasOwnProperty(name))
                    return;
                delete this.notificationDict[name];
                delete this.thisObjDict[name];
            };
            //删除所有观察者
            __egretProto__.removeObservers = function () {
                delete this.notificationDict;
                delete this.thisObjDict;
            };
            return NotificationCenter;
        })();
        support.NotificationCenter = NotificationCenter;
        NotificationCenter.prototype.__class__ = "mvc.support.NotificationCenter";
    })(support = mvc.support || (mvc.support = {}));
})(mvc || (mvc = {}));
//# sourceMappingURL=NotificationCenter.js.map
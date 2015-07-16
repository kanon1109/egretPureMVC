/**
 *
 * @author
 */
var NotificationCenter = mvc.support.NotificationCenter;
var NotificationCenterTest = (function () {
    function NotificationCenterTest() {
        console.log(egret.getQualifiedClassName(this));
        NotificationCenter.getInstance().addObserver("test", this.test, this);
        NotificationCenter.getInstance().addObserver("test2", this.test2, this);
        NotificationCenter.getInstance().postNotification("test");
        NotificationCenter.getInstance().postNotification("test2", "kanon", 10);
    }
    var __egretProto__ = NotificationCenterTest.prototype;
    __egretProto__.test = function () {
        //NotificationCenter.getInstance().removeObserver("test2");
        console.log("its test function");
    };
    __egretProto__.test2 = function (ary) {
        var str = ary[0];
        var index = ary[1];
        console.log("its test2 function by " + str + " index:" + index);
    };
    return NotificationCenterTest;
})();
NotificationCenterTest.prototype.__class__ = "NotificationCenterTest";

/**
 * Created by tangben on 2015/7/16.
 */
var mvc;
(function (mvc) {
    /**
     * @author Kanon
     */
    var Command = (function () {
        function Command() {
            this.facade = mvc.Facade.getInstance();
        }
        var __egretProto__ = Command.prototype;
        //执行
        __egretProto__.execute = function (notification) {
            //子类继承
            console.log("Command execute");
        };
        return Command;
    })();
    mvc.Command = Command;
    Command.prototype.__class__ = "mvc.Command";
})(mvc || (mvc = {}));
//# sourceMappingURL=Command.js.map
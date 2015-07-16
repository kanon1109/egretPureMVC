var view;
(function (view) {
    var ui;
    (function (ui) {
        /**
         * 测试界面
         * @author Kanon
         */
        var TestPanel = (function (_super) {
            __extends(TestPanel, _super);
            function TestPanel() {
                _super.call(this);
                this.btn = new egret.Shape();
                this.btn.graphics.beginFill(0xFF0000, 1);
                this.btn.graphics.drawRect(0, 0, 50, 50);
                this.btn.graphics.endFill();
                this.btn.touchEnabled = true;
                this.addChild(this.btn);
            }
            var __egretProto__ = TestPanel.prototype;
            return TestPanel;
        })(egret.Sprite);
        ui.TestPanel = TestPanel;
        TestPanel.prototype.__class__ = "view.ui.TestPanel";
    })(ui = view.ui || (view.ui = {}));
})(view || (view = {}));
//# sourceMappingURL=TestPanel.js.map
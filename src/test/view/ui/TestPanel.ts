module view.ui
{
/**
 * 测试界面
 * @author Kanon
 */
export class TestPanel extends egret.Sprite
{
    public btn:egret.Shape;
    public constructor()
    {
        super();
        this.btn = new egret.Shape();
        this.btn.graphics.beginFill(0xFF0000,1);
        this.btn.graphics.drawRect(0, 0, 50, 50);
        this.btn.graphics.endFill();
        this.btn.touchEnabled = true;
        this.addChild(this.btn);
    }
}
}

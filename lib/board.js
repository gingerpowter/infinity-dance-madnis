class Board {
  constructor(stage) {
    this.stage = stage;
  }

  openModal() {
    $(document.getElementById("instructionModal")).addClass('visible');
  }

  closeModal() {
    $(document.getElementById("instructionModal")).removeClass('visible');
  }

  draw() {
    const LstaticLeftArrow = new createjs.Bitmap("./assets/images/staticLeft.png");
    const LstaticDownArrow = new createjs.Bitmap("./assets/images/staticDown.png");
    const LstaticUpArrow = new createjs.Bitmap("./assets/images/staticUp.png");
    const LstaticRightArrow = new createjs.Bitmap("./assets/images/staticRight.png");

    const RstaticLeftArrow = new createjs.Bitmap("./assets/images/staticLeft.png");
    const RstaticDownArrow = new createjs.Bitmap("./assets/images/staticDown.png");
    const RstaticUpArrow = new createjs.Bitmap("./assets/images/staticUp.png");
    const RstaticRightArrow = new createjs.Bitmap("./assets/images/staticRight.png");

    LstaticLeftArrow.x = 25; LstaticLeftArrow.y = 500;
    LstaticDownArrow.x = 100; LstaticDownArrow.y = 500;
    LstaticUpArrow.x = 175; LstaticUpArrow.y = 500;
    LstaticRightArrow.x = 250; LstaticRightArrow.y = 500;

    RstaticLeftArrow.x = 400; RstaticLeftArrow.y = 500;
    RstaticDownArrow.x = 475; RstaticDownArrow.y = 500;
    RstaticUpArrow.x = 550; RstaticUpArrow.y = 500;
    RstaticRightArrow.x = 625; RstaticRightArrow.y = 500;

    RstaticRightArrow.image.onload = () => (this.stage.update());

    this.stage.addChild(LstaticLeftArrow, LstaticDownArrow,
      LstaticUpArrow, LstaticRightArrow, RstaticLeftArrow,
      RstaticDownArrow, RstaticUpArrow, RstaticRightArrow);

    this.stage.update();
  }
}

module.exports = Board;

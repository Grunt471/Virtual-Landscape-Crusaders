import { AbstractForm } from './AbstractForm.js';

class Spiral  extends AbstractForm {

  constructor (
        x = 0,
        y = 0,
        width = 0,
        height = 0,
        fillColor = '',
        strokeColor = '',
        strokeWidth = 2,
        pesenteur= false,
        length = 0,
        moveOffset = 0


    ) {
    super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur)
      this.length = length
      this.moveOffset = moveOffset

    }



  /**
   * draw a form with ctx (must be override by subclasses)
   * @param ctx 2D from canvas
   */
  draw (ctx) {

  function degToRad(degrees) {
    return degrees * Math.PI / 180;
  };

  function rand(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + (min);
  }

    ctx.save()
    // set the styles for this shape


    ctx.fillStyle = '#ffffff00';
    ctx.fillRect(0,0,this.width,this.height);
    ctx.translate(this.width/2, this.height/2)
    ctx.strokeStyle = this.strokeColor
    let length = this.length;
    let moveOffset = this.moveOffset;


for(let i = 0; i < length; i++) {
    ctx.fillStyle = 'rgba(' + (255-length) + ', 0, ' + (255-length) + ', 0.9)';
    ctx.beginPath();
    ctx.moveTo(moveOffset, moveOffset);
    ctx.lineTo(moveOffset+length, moveOffset);
    let triHeight = length/2 * Math.tan(degToRad(60));
    ctx.lineTo(moveOffset+(length/2), moveOffset+triHeight);
    ctx.lineTo(moveOffset, moveOffset);
    ctx.fill();

    length--;
    moveOffset += 0.7;
    ctx.rotate(degToRad(5));
}

    /*ctx.rect(this.x, this.y, this.width, this.height)
    // draw the path to screen
    ctx.fill()
    ctx.stroke()*/

    ctx.restore()


  }
static anim1() {
    const anim1 = new Spiral(0, 0, 800, 800, '', '', 2, false, 250, 30)
    return anim1
    }





static buildForms() {
   let forms = []
   forms.push(Spiral.anim1())
   const builds = forms
   return builds
  }
}

export { Spiral }


import { AbstractForm } from './AbstractForm.js';


class Cercle extends  AbstractForm {
  constructor (
      x = 0,
      y = 0,
      r = 0,
      anglDeb = 0,
      anglFin = 0,
      fillColor = '',
      strokeColor = '',
      strokeWidth = 2,
      pesenteur= false,
    ) {
      super(x,y,2*r, r*2, fillColor, strokeColor, strokeWidth, pesenteur)
      this.r=r
      this.anglDeb=anglDeb
      this.anglFin=anglFin
    }



  /**
   * draw a form with ctx (must be override by subclasses)
   * @param ctx 2D from canvas
   */
  draw (ctx) {
    ctx.save()
    // set the styles for this shape
    ctx.fillStyle = this.fillColor
    ctx.lineWidth = this.strokeWidth

    // create the *path*
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor

    const MAX_HEAD = 80
    let new_y = (this.pesanteur) ? window.innerHeight - this.height - MAX_HEAD: this.y

    ctx.arc(this.x, this.y, this.r, this.anglDeb, this.anglFin)
    // draw the path to screen
    ctx.fill()
    ctx.stroke()

    /*ctx.lineWidth="4";
    ctx.strokeStyle=this.strokeColor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 65, this.AnglDeb, 2*Math.PI);
    ctx.stroke();*/

    ctx.restore()


  }


  /**
   * get array of forms (must be override by subclasses)
   * @return {[Object,...]}
   *
   */
   cercle1() {
    const cercle1 = new Cercle(100, 100, 65, 0, 2*Math.PI,'gold', 'gold', 2, false)
    return cercle1
    }



   static buildForms() {
   const rond = new Cercle()
   let forms = []
   forms.push(rond.cercle1())
   const builds = forms
   return builds
  }

}

export { Cercle }
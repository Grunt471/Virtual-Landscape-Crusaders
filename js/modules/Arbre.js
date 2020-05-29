import { AbstractForm } from './AbstractForm.js';
import { Cercle } from './Cercle.js';
import { Rectangle } from './Rectangle.js'

class Arbre extends  AbstractForm {
  // you create new Rectangles by calling this as a function
  // these are the arguments you pass in
  // add default values to avoid errors on empty arguments
  constructor (
      x = 0,
      y = 0,
      width = 0,
      height = 0,
      fillColor = '',
      strokeColor = '',
      strokeWidth = 2,
      pesenteur= false,
      cercles = []

    ) {
      super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur)
      this.cercles = cercles

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

    ctx.rect(this.x, new_y, this.width, this.height)
    // draw the path to screen
    ctx.fill()
    ctx.stroke()


    ctx.restore()

     //Cercle
    if (this.cercles.length > 0) {
        for (let j = 0; j < this.cercles.length; j++) {
            if (this.cercles.length[j]==0){
            this.cercles[j].y = new_y - this.height+60
        }
        else if (this.cercles.length==1){
            this.cercles[j].y = new_y - this.height+35
        }
        else if (this.cercles.length==1){
            this.cercles[j].y = new_y - this.height+35
        }
         else {
            this.cercles[j].y = new_y - this.height+45
        }
         this.cercles[j].draw(ctx)
            }
        }



  }


  /**
   * get array of forms (must be override by subclasses)
   * @return {[Object,...]}
   *
   */
   arbre1() {
   let x=Math.random()*1200
    const arbre1 = new Arbre(x, 0, 20, 75, 'brown', '', 2, true, [new Cercle(x-15, 850, 30, 0, 2*Math.PI, 'green', 'green', 2, false), new Cercle(x, 820, 25, 0, 2*Math.PI, 'green', 'green', 2, false),new Cercle(x+10, 830, 35, 0, 2*Math.PI, 'green', 'green', 2, false), new Cercle(x+15, 820, 25, 0, 2*Math.PI, 'green', 'green', 2, false),new Cercle(x+30, 840, 25, 0, 2*Math.PI, 'green', 'green', 2, false)])
    return arbre1
    }



   static buildForms() {
   const foret = new Arbre()
   let forms = []
   forms.push(foret.arbre1())
   const builds = forms
   return builds
   }

}

export { Arbre }
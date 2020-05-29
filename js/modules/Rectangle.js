import { AbstractForm } from './AbstractForm.js';


class Rectangle  {
  // you create new Rectangles by calling this as a function
  // these are the arguments you pass in
  // add default values to avoid errors on empty arguments
  constructor (
      x = 0,
      y = 0,
      width = 0,
      height = 0,
      fillColor = '',

    ) {
      this.x = Number(x)
      this.y = Number(y)
      this.width = Number(width)
      this.height = Number(height)
      this.fillColor = fillColor
    }



  /**
   * draw a form with ctx (must be override by subclasses)
   * @param ctx 2D from canvas
   */
  draw (ctx) {
    ctx.save()
    // set the styles for this shape
    ctx.fillStyle = this.fillColor


    // create the *path*
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor



    ctx.rect(this.x, this.y, this.width, this.height)
    // draw the path to screen
    ctx.fill()
    ctx.stroke()


    ctx.restore()


  }

}

export { Rectangle }
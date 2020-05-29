import { AbstractForm } from './AbstractForm.js';
import { Porte } from './Porte.js'
import { Triangle } from './Triangle.js'
import { Cube } from './Cube.js'

class Maison extends  AbstractForm {
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
      portes = [],
      toits = [],
      fenetres = []
    ) {
      super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur)
      this.portes = portes
      this.toits = toits
      this.fenetres = fenetres
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

    //Porte

    for (let i = 0; i < this.portes.length; i++) {
        this.portes[i].y = new_y + this.height-this.portes[i].height
        this.portes[i].draw(ctx)
    }


    //Toit
    if (this.toits.length > 0) {
        for (let j = 0; j < this.toits.length; j++) {
            this.toits[j].y = new_y - this.height+50
            this.toits[j].draw(ctx)
            }
        }

    //Fenetre
    if (this.fenetres.length > 0) {
        for (let k = 0; k < this.fenetres.length; k++){
            this.fenetres[k].y = new_y - this.height+130
            this.fenetres[k].draw(ctx)
            }
    }

  }


  /**
   * get array of forms (must be override by subclasses)
   * @return {[Object,...]}
   *
   */
   maison1() {
    let tabcolor =['pink', 'blue', 'green'];
    let i = Math.random() * tabcolor.length;
    let x=Math.random()*1200
    let y=Math.random()*100
    const maison1 = new Maison(x, 0, 100, 100, tabcolor[parseInt(i)], '', 2, true, [new Porte(x+10, 0, 30, 65, '#8B4513')], [new Triangle(x, 776, 100, 50, '#8B4513', '', 2, false)], [new Cube(x+50, 860, 35, 35, '#13FAF3')])
    return maison1
    }

    maison2() {
       let tabcolor =['red', 'yellow', 'brown'];
       let i = Math.random() * tabcolor.length;
       let x=Math.random()*1200
       let y=Math.random()*100
       const maison2 = new Maison(x, 0, 100, 100, tabcolor[parseInt(i)], '', 2, true, [new Porte(x+10, 0, 30, 65, '#8B4513', '', 2, true)], [new Triangle(x, 776, 100, 50, '#8B4513', '', 2, false)], [new Cube(x+50, 860, 35, 35, '#13FAF3')])
       return maison2
        }

     maison3() {
        let tabcolor =['purple', 'orange'];
        let i = Math.random() * tabcolor.length;
        let x=Math.random()*1200
        let y=Math.random()*100
        const maison3 = new Maison(x, 0, 100, 100, tabcolor[parseInt(i)], '', 2, true, [new Porte(x+10, 0, 30, 65, '#8B4513', '', 2, true)], [new Triangle(x, 776, 100, 50, '#8B4513', '', 2, false)], [new Cube(x+50, 860, 35, 35, '#13FAF3')])
        return maison3
        }


     static buildForms() {
        const maison = new Maison()
        let forms = []
        forms.push(maison.maison1())
        forms.push(maison.maison2())
        forms.push(maison.maison3())
        const builds = forms
        return builds
        }

}

export { Maison }

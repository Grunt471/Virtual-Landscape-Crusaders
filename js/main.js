import {Immeuble} from './modules/Immeuble.js';
import {Triangle} from './modules/Triangle.js';
import {Maison} from './modules/Maison.js';
import {AbstractForm} from './modules/AbstractForm.js';
import {Porte} from './modules/Porte.js';
import {Cercle} from './modules/Cercle.js';
import {Arbre} from './modules/Arbre.js';
import {Spiral} from './modules/Spiral.js';

var cwPrev = null
var chPrev = null

function clearCanvas() {
  const c = document.getElementById('sceneryCanvas')
  const ctx = c.getContext("2d");

  if (cwPrev) {
    ctx.clearRect(0, 0, cwPrev, chPrev)
  }
  const cw = c.width = window.innerWidth;
  const ch = c.height = window.innerHeight - 80;

  console.log("window.innerHeight : " + window.innerHeight);

  cwPrev = cw
  chPrev = ch
}

function _drawForms(forms) {
  const c = document.getElementById('sceneryCanvas')
  const ctx = c.getContext("2d");

  clearCanvas()
  console.log("forms :" + JSON.stringify(forms))

  // draw all forms by looping over them
  forms.forEach(form => form.draw(ctx))
}


/**
 * construit les différentes formes du paysage, en appelant la méthode statique
 * buildForms de chacune des classes
 *
 * @return {Object[]}
 */
function buildForms() {
    let forms = Maison.buildForms()
    //forms = forms.concat(Porte.buildForms())
    forms = forms.concat(Cercle.buildForms())
    forms = forms.concat(Arbre.buildForms())
    forms = forms.concat(Spiral.buildForms())
  /*let forms = Immeuble.buildForms()
  forms = forms.concat(Triangle.buildForms())
  forms = forms.concat(AbstractForm.buildForms())*/

  // à compléter/modifier
  // etc. pour chacune de vos classes
  return forms
}

/**
 *  dessine uniquement la forme passée dont le nom est reçu en paramètre
 * @param whichForm (si on peut le faire en dynamaique, je suis preneur, style passer la classe au lieu de son nom)
 */
function drawThisForm(whichForm) {
  /*if (whichForm === 'Immeuble') {
    _drawForms(Immeuble.buildForms())
  } else if (whichForm === 'Triangle') {
    _drawForms(Triangle.buildForms())
  } else if (whichForm === 'AbstractForm') {
    _drawForms(AbstractForm.buildForms())
  }*/if (whichForm === 'Maison') {
    _drawForms(Maison.buildForms())
  } else if (whichForm === 'Porte') {
    _drawForms(Porte.buildForms())
  } else if (whichForm === 'Cercle') {
       _drawForms(Cercle.buildForms())
  } else if (whichForm === 'Arbre') {
       _drawForms(Arbre.buildForms())
  } else if (whichForm === 'Spiral') {
          _drawForms(Spiral.buildForms())
     }



}

function drawAllForms() {
  _drawForms(buildForms())
}

// accroche des fonctions du module au document courant (pour être appelées ensuite)
document.drawForm = drawThisForm
document.drawAllForms = drawAllForms
document.addEventListener('DOMContentLoaded', document.drawAllForms)


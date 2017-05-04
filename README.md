# yijing 易經
Vous avez une question, le yijing vous apporte un éclairage sur la situation et les évolutions possibles de la demande

## Install

Install the yijing utility via [npm](http://npmjs.org/):

npm install yijing

## Command-line example

```
cd yijing/
npm start
```

## Usage

```javascript

const yijing = require('yijing')

var questionTirage = null
var hexagrammePresentMessageMutations = ""
var hexagrammeMuteMessageMutations= ""
var hexagrammePresent = null
var hexagrammeMute = null
var hexagrammePresentPosition6et9 = null
var hexagrammeMutePosition6et9 = null
var getTirageNumPresent = yijing.getTirageNumPresent
var tirage = yijing.tirage
var mutation = yijing.mutation
var afficherOracle = yijing.afficherOracle
var afficherMessagesMutations = yijing.afficherMessagesMutations
var getHexagrammePresent = yijing.getHexagrammePresent
var getHexagrammeMute = yijing.getHexagrammeMute
var getHexagrammePresentPosition6et9 = yijing.getHexagrammePresentPosition6et9
var getHexagrammeMutePosition6et9 = yijing.getHexagrammeMutePosition6et9
const oracle = yijing.getOracle()
const probabiliteRealisation = yijing.getProbabiliteRealisation()
const binaryToHexagramme = yijing.getBinaryToHexagramme()
const menuConsole = yijing.menuConsole
const afficherConsole = yijing.afficherConsole
const definirCodeInterpretation = yijing.definirCodeInterpretation
const setQuestionTirage = yijing.setQuestionTirage
const getQuestionTirage = yijing.getQuestionTirage

/* Appel en cascade des fonctions asynchrones par des appels en callback */
function main(){
  menuConsole()
  tirage6fois()
}

function tirage6fois(){
  for (i=0 ; i<6 ; i++){
    tirage()
  }

  excMutation()
}

function excMutation(){
  mutation()
  afficherConsole()
}

/* Appel du point d'entrée */
main()
```

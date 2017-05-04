const nombreRepetition = 6
const data = require('./data')
const scanf = require('scanf')
const oracle = data.getOracle()
const probabiliteRealisation = data.getProbabiliteRealisation()
const binaryToHexagramme = data.getBinaryToHexagramme()


var questionTirage = null
var iterration = 0
var tirageNumPresent = []
var tirageBinaireNumPresent = []
var tirageNumMute = []
var tirageBinaireNumMute = []
var hexagrammePresent = ''
var hexagrammeMute = ''
var hexagrammePresentPosition6et9 = []
var hexagrammeMutePosition6et9 = []
var hexagrammePresentMessageMutations = ""
var hexagrammeMuteMessageMutations= ""

function alleatoire(valmin, valmax){
  min = Math.ceil(valmin)
  max = Math.floor(valmax)
  return Math.floor(Math.random() * (max - min)) + min
}
function tirage(){
  if (iterration < nombreRepetition){
    var tmp = alleatoire(6, 10)
    if (tmp == 10){
        tmp = alleatoire(6, 10)
    }
    tirageNumPresent[iterration] = tmp
    iterration++
  } else {
    iterration = 0
  }
}
function menuConsole(){
  var i = 0
  console.log('JEU DU YI JING (Yi KING) 易經')
  console.log('Entrer la question de la consultation :')
  questionTirage = scanf('%S')
  if (questionTirage == '') {
    questionTirage = "Mon projet va t'il réussir"
  }
  console.log('Votre Question est : "' + questionTirage + '?"')
  console.log('A chaque tirage, il est nécessaire dire à VOIX HAUTE votre question\n')
  while (i < nombreRepetition){
    console.log('À VOIX HAUTE :\n\n"' + questionTirage + ' ?"\n\n(Touche ↵ pour lancer le tirage)')
    var stop = scanf('%s')
    console.log('\t\t\tTirage : ' + Number(i + 1) + ' réalisé!\n')
    tirage()
    i++

  }
}
function mutation(){
  tirageNumMute = []
  hexagrammePresentPosition6et9 = []
  hexagrammeMutePosition6et9 = []
  tirageBinaireNumPresent = []
  tirageBinaireNumMute = []
  hexagrammePresent = []
  hexagrammeMute = []
  for(i = 0 ; i < nombreRepetition ; i++){
    switch (tirageNumPresent[i]) {
    case 6:
        tirageNumMute[i] = 9
        hexagrammePresentPosition6et9.push('6' + Number(i + 1))
        hexagrammeMutePosition6et9.push('9' + Number(i + 1))
        tirageBinaireNumPresent[i] = 0
        tirageBinaireNumMute[i] = 1
        break;
    case 7:
        tirageNumMute[i] = 7
        tirageBinaireNumPresent[i] = 1
        tirageBinaireNumMute[i] = 1
        break;
    case 8:
        tirageNumMute[i] = 8
        tirageBinaireNumPresent[i] = 0
        tirageBinaireNumMute[i] = 0
        break;
    case 9:
        tirageNumMute[i] = 6
        hexagrammePresentPosition6et9.push('9' + Number(i + 1))
        hexagrammeMutePosition6et9.push('6' + Number(i + 1))
        tirageBinaireNumPresent[i] = 1
        tirageBinaireNumMute[i] = 0
        break;
      }
  }
  hexagrammePresent = Object.keys(binaryToHexagramme[tirageBinaireNumPresent.join("")])
  hexagrammeMute = Object.keys(binaryToHexagramme[tirageBinaireNumMute.join("")])
}
function afficherOracle(hexagrammeString, array69){
  console.log(oracle[hexagrammeString]["nom"])
  console.log(oracle[hexagrammeString]["titre"])
  console.log("Réalisation : " +
  probabiliteRealisation[oracle[hexagrammeString]["realisation"]])
  console.log("Résumé : " + oracle[hexagrammeString]["resume"])
  let messageMutations = ""
  for(i = 0 ; i < array69.length ; i++){
      if(oracle[hexagrammeString][array69[i]] != undefined){
        let mutNumber = "Neuf à la "
        let place = ""
        if (Number(array69[i][0]) == 6)
          mutNumber = "Six à la "
        if (Number(array69[i][1]) == 1)
          place = mutNumber + "première place"
        if (Number(array69[i][1]) == 2)
            place = mutNumber + "seconde place"
        if (Number(array69[i][1]) == 3)
            place = mutNumber + "troisième place"
        if (Number(array69[i][1]) == 4)
          place = mutNumber + "quatrième place"
        if (Number(array69[i][1]) == 5)
            place = mutNumber + "cinquième place"
        if (Number(array69[i][1]) == 6)
            place = mutNumber + "sixième place"
        messageMutations = messageMutations + place + " : " + oracle[hexagrammeString][array69[i]] + "\n"
      }
  }
  console.log(messageMutations)
}
function afficherMessagesMutations(hexagrammeString, array69){
let messageMutations = ""
for(i = 0 ; i < array69.length ; i++){
    if(oracle[hexagrammeString][array69[i]] != undefined){
      let mutNumber = "Neuf à la "
      let place = ""
      if (Number(array69[i][0]) == 6)
        mutNumber = "Six à la "
      if (Number(array69[i][1]) == 1)
        place = mutNumber + "première place"
      if (Number(array69[i][1]) == 2)
          place = mutNumber + "seconde place"
      if (Number(array69[i][1]) == 3)
          place = mutNumber + "troisième place"
      if (Number(array69[i][1]) == 4)
        place = mutNumber + "quatrième place"
      if (Number(array69[i][1]) == 5)
          place = mutNumber + "cinquième place"
      if (Number(array69[i][1]) == 6)
          place = mutNumber + "sixième place"
      messageMutations = messageMutations + "<b><small>" + place + "</small></b> : <i>" + oracle[hexagrammeString][array69[i]] + "</i><br>\n"
    }
  }
  return "<p>" + messageMutations + "</p>\n"
}
function afficherConsole(){
  console.log("\nOracle : " + questionTirage)
  console.log("\nPrésent : " + hexagrammePresent)
  afficherOracle(hexagrammePresent , hexagrammePresentPosition6et9)
  if( hexagrammePresent !== hexagrammeMute){
    console.log("\nDevenir : " + hexagrammeMute)
    afficherOracle(hexagrammeMute, hexagrammeMutePosition6et9)
  }
}
function definirCodeInterpretation(){
  hexagrammePresentMessageMutations = afficherMessagesMutations(hexagrammePresent , hexagrammePresentPosition6et9)
  if( hexagrammePresent !== hexagrammeMute){
    hexagrammeMuteMessageMutations =  afficherMessagesMutations(hexagrammeMute, hexagrammeMutePosition6et9)
  }
}
function setQuestionTirage(value){
 questionTirage = value
}
function getQuestionTirage(){
 return questionTirage
}
function getOracle(){
  return oracle
}
function getProbabiliteRealisation(){
  return probabiliteRealisation
}
function getBinaryToHexagramme(){
  return binaryToHexagramme
}
function getHexagrammePresent(){
  return hexagrammePresent
}
function getHexagrammeMute(){
  return hexagrammeMute
}
function getHexagrammePresentPosition6et9(){
  return hexagrammePresentPosition6et9
}
function getHexagrammeMutePosition6et9(){
  return hexagrammeMutePosition6et9
}
function getTirageNumPresent(){
  return tirageNumPresent
}
function getHexagrammePresentMessageMutations(){
  return hexagrammePresentMessageMutations
}
function getHexagrammeMuteMessageMutations(){
  return hexagrammeMuteMessageMutations
}

module.exports.setQuestionTirage = setQuestionTirage
module.exports.getQuestionTirage = getQuestionTirage
module.exports.getOracle = getOracle
module.exports.getProbabiliteRealisation = getProbabiliteRealisation
module.exports.getBinaryToHexagramme = getBinaryToHexagramme
module.exports.getHexagrammePresent = getHexagrammePresent
module.exports.getHexagrammeMute = getHexagrammeMute
module.exports.getHexagrammePresentPosition6et9 = getHexagrammePresentPosition6et9
module.exports.getHexagrammeMutePosition6et9 = getHexagrammeMutePosition6et9
module.exports.getTirageNumPresent = getTirageNumPresent
module.exports.getHexagrammePresentMessageMutations  = getHexagrammePresentMessageMutations
module.exports.getHexagrammeMuteMessageMutations = getHexagrammeMuteMessageMutations
module.exports.menuConsole = menuConsole
module.exports.tirage = tirage
module.exports.mutation = mutation
module.exports.afficherOracle = afficherOracle
module.exports.afficherMessagesMutations = afficherMessagesMutations
module.exports.afficherConsole = afficherConsole
module.exports.definirCodeInterpretation = definirCodeInterpretation

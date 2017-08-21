var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];
function censor() {
    for(idx in censoredWords){
        inStr = inStr.replace(censoredWords[idx],"****");
    }
    for(idx in customCensoredWords){
        inStr = inStr.replace(customCensoredWords[isx],"****");
    }
    return inStr;
}
function addCensoreWord(word) {
    customCensoredWords.push(word);
}
function getCensoreWords() {
    return censoredWords.concat(censoredWords);
}
exports.censor = censor;
exports.addCensoreWord = addCensoreWord;
exports.getCensoreWords = getCensoreWords;
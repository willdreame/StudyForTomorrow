/**
 * @param {string[]} wordsDict
 */
 var WordDistance = function(wordsDict) {
    let wordMap = {};
    for(let i = 0; i < wordsDict.length; i++){
        console.log(wordMap[wordsDict[i]], '////')
        wordMap[wordsDict[i]] ? wordMap[wordsDict[i]].push(i) : wordMap[wordsDict[i]] = [i];
    }
    this.wordMap = wordMap;
    console.log(wordMap, 'word')
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let d1 = this.wordMap[word1],d2 = this.wordMap[word2];
    let res = Infinity;
    for(let i = 0; i < d1.length; i++){
        for(let j = 0; j < d2.length; j++){
            res = Math.min(Math.abs(d1[i] - d2[j]),res);
        }
    }
    return res;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
const wordsDict = ["WordDistance", "shortest", "shortest", 'llll', 'ddd','llll',];
const word1 = 'WordDistance'
const word2 = 'ddd'
 var obj = new WordDistance(wordsDict)
 var param_1 = obj.shortest(word1,word2)
 console.log(param_1, 'ddd')
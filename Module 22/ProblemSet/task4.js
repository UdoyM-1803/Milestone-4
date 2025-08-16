function longestWord (sentence) {
    let expectedWord;
    const words = sentence.split(' ');
    let max = words[0].length;
    for (const word of words) {
        if (word.length >= max) {
            max = word.length;
            expectedWord = word;
        }
    }
    return expectedWord;
}


const sentence = 'I am learning Programming to become a programmer'
const result = longestWord(sentence);
console.log(result);

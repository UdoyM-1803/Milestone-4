function findVowels (sentence) {
    let count = 0;
    for (const vowel of sentence) {
        if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' || vowel === 'A' || vowel === 'E' || vowel === 'I' || vowel === 'O' || vowel === 'U') {
            count++;
        }
    }
    return count;
}

const sentence = 'I love my country. The name of my country is Bangladesh.';

const result = findVowels(sentence);
console.log('There are ' + result + ' vowels in this sentence.');
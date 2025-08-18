const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names) {
    
    let sName = names[0];
    for (const name of names) {
        if (name.length < sName.length) {
            sName = name;
        }
    }
    return sName;
}

const result = smallestName(heights2);
console.log(result);
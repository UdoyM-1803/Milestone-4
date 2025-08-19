function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }
    let extra = 0;
    if (obj.isFFamily === true){
        extra = 20;
    }
    const marks = obj.testScore + obj.schoolGrade + extra;
    if (marks >= 80) {
        return true;
    } 
    else {
        return false;
    }
}

const result1 = calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  });
console.log(result1);
const result2 = calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false });
console.log(result2);
const result3 = calculateFinalScore("hello");
console.log(result3);
const result4 = calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  });
console.log(result4);
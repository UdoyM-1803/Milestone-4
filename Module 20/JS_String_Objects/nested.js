const college = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['Science Fair', 'Sports Day', 'Cultural Fest'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(college);
// console.log(college.unique)
college.unique.result.merit = 'top top top most'
// console.log(college.unique.result)
console.log(college.unique.result.merit)
college.events[1] = '16 December';
console.log(college.events[1]); 
delete college.class;
console.log(college);
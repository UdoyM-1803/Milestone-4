function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
    const arr = email.split('@');
    const message = arr[0] + ' sent you an email from ' + arr[1];
    return message;
}

const result1 = sendNotification('zihad@gmail.com');
console.log(result1);
const result2 = sendNotification('farhan34@yahoo.com');
console.log(result2);
const result3 = sendNotification('nadim.naem5@outlook.com');
console.log(result3);
const result4 = sendNotification('fahim234.hotmail.com');
console.log(result4);
const result5 = sendNotification('sadia8icloud.com');
console.log(result5);



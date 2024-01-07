function concatinateDate(input){
    let fName = input[0];
    let lName = input[1];
    let age = Number(input[2]);
    let city = input[3];
    console.log(`You are ${fName} ${lName}, a ${age}-years old person from ${city}.`)
}

concatinateDate(['Maria', 'Ivanova', 20, 'Sofia'])
function howManyHours(input){
    let name = input[0];
    let projectNumber = Number(input[1]);
    console.log(`The architect ${name} will need ${projectNumber * 3} hours to complete ${projectNumber} project/s.`)
}

howManyHours(["George ", "4 "]);
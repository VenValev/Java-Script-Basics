function calcFood(input){
    let dFood = Number(input[0]);
    let cFood = Number(input[1]);
    console.log(`${(dFood * 2.50) + (cFood * 4)} lv.`)
}

calcFood(["5", "4"]);
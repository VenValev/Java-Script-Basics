function calcPrice(input){
    let sqm = Number(input[0]);
    let tPrice = sqm * 7.61;
    let disPrice = t.price * 0.18;
    let fPrice = tPrice - disPrice;
    console.log(`The final price is: ${fPrice} lv.`);
    console.log(`"The discount is: ${disPrice} lv.`);
}
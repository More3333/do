

document.querySelector("button").onclick = function (){
    let lenghth = document.querySelector("#lenghth").value;
    let min = document.querySelector("#min").value;
    let max = document.querySelector("#max").value;
    let result = [];
    for (let i=0; i < 1; i++){
        result.push(randomInteger(min, max));
    }
    console.log(result)
    document.querySelector("#out").innerHTML = rasult;
    document.querySelector("#out-input").value = rasult;
   return result;


function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}}

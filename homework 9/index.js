// function hero(bullets, dragons){
//   for( let i = 0; i< dragons; i++){
// if(bullets >=2)  {
//   bullets -= 2
// } else{
//   return false
// }
//   }
//   return true
// }
// console.log(hero(10,5))
// console.log(hero(7,4))
// /////////////////////////////////////////////////////////////
// function countPositivesSumNegatives(input) {
//   if (input === null || input.length === 0) {
//     return [];
//   }
//   let count = 0;
//   let summ = 0
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       count++;
//     } else if (input[i] < 0) {
//       summ += input[i];
//     }
//   }

//   return [count, summ];
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// ===============================================================================================
// function DNAtoRNA(dna) {
//  return dna.replaceAll("T","U")
// }
// console.log(DNAtoRNA("TTTT"))
// console.log(DNAtoRNA("GCAT"))
// /////////////////////////////////////////////////////////////////////////////////////////
// var min = function(list){
//   let min = list[0]
//   for(let i =0; i< list.length; i++){
//     if(list[i]< min){
//       min = list[i]
//     }
//   }
//   return min
// }
// var max = function(list){
//   let max = list[0]
//   for(let i =0; i< list.length; i++){
//     if(list[i]> max){
//       max = list[i]
//     }
//   }
//   return max
  
// }
// console.log(min([-52, 56, 30, 29, -54, 0, -110]))
// console.log(max([4,6,2,1,9,63,-134,566]))
// ===================================================================
// ======================================================================
// function removeExclamationMarks(s) {
//   return s.replaceAll("!","")
// }
// console.log(removeExclamationMarks("Hello World!"))
// =========================================================================
// const areaOrPerimeter = function(l , w) {
//   if(l === w){
//     return l * w
//   } else{
//     return 2 * (l + w)
//   }
// }
// console.log(areaOrPerimeter(1,2,2))
// =============================================================================
// function otherAngle(a, b) {
//    for(let i =1; i<=178; i++){
//      if(a + b + i === 180){
//        return i
//      }
//    }

// }
// console.log(otherAngle(30,60))
// ====================================================================================
// function updateLight(current) {
//   if(current === "green"){
//     return "yellow"
//   } else if(current === "yellow"){
//     return "red"
//   } else if(current === "red"){
//     return "green"
//   }

// }
// console.log(updateLight("green"))
// console.log(updateLight("yellow"))
// console.log(updateLight("red"))
// ==========================================================================================
// function setAlarm(employed, vacation){
//   if(employed === true && vacation === false){
//     return true
//   } else{
//     return false
//   }
// }
// console.log(setAlarm(true, false))
// console.log(setAlarm(false, false))
// console.log(setAlarm(true, true))
// console.log(setAlarm(false, true))
// ==========================================================================================

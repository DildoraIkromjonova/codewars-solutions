// function addBinary(a,b) {
//   let summ = a+b
//   let c = ""
//   if(summ === 0)return "0"
//   for (summ; summ > 0; summ = Math.floor(summ/2))
//     c = (summ % 2 ) + c
//   return c
// }

// console.log(addBinary(1,1))
// console.log(addBinary(5,9))
// =========================================
// function filter_list(l) {
//  let arr = []
//  for( let i = 0; i < l.length; i++){
//   if(typeof l [i] === "number"){
//     arr.push(l[i])
//   }
//  }
//  return arr
// }

// console.log(filter_list([1,2,'a','b']))       
// console.log(filter_list([1,'a','b',0,15]))   
// console.log(filter_list([1,2,'aasf','1','123',123]))
// ==========================================
// function findShort(s){
//    let arr = s.split(" ")
//    let i = arr[0].length
//    for(let j = 0; j < arr.length; j++){
//     if(arr[j].length < i){
//       i = arr[j].length
//     }
//    }
//    return i
// }
// console.log(findShort("bitcoin take over the world")) 
// console.log(findShort("turns out random test cases are easier"))
// ==================================================
// function number(lines){
//   let arr = []
//   for ( let i = 0; i < lines.length;i++){
//     arr.push(`${i+1}: ${lines[i]}`)
//   }
//   return arr
// }
// console.log(number(["a", "b", "c"]))
// ===========================================
// function soultion(numbers){
//   return (numbers || []).sort((a,b)=> a - b)
// }
// console.log(soultion([1,2,10,50,5]))
// =========================================
// function cheskString(str) {
//   let Upper = 0;
//   let Lower = 0;
//   let number = 0;
//   let Symbol = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char >= "A" && char <= "Z") {
//       Upper++;
//     } else if (char >= "a" && char <= "z") {
//       Lower++;
//     } else if (char >= "0" && char <= "9") {
//       number++;
//     } else {
//       Symbol++;
//     }
//   }
//   return {
//     Upper,
//     Lower,
//     number,
//     Symbol,
//   }
// }
// let result = cheskString("Algoritm 2016!")
// console.log(result)



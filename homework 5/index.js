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
//   let Upper = 0
//   let Lower = 0
//   let number = 0
//   let Symbol = 0
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char >= "A" && char <= "Z") {
//       Upper++
//     } else if (char >= "a" && char <= "z") {
//       Lower++
//     } else if (char >= "0" && char <= "9") {
//       number++
//     } else {
//       Symbol++
//     }
//   }
//   return {
//     Upper,
//     Lower,
//     number,
//     Symbol,
//   }
// }
// let result = cheskString("Algoritm2016!")
// console.log(result)
// ====================================================
// function sortByLength (array) {
//    return array.sort((a,b)=>a.length-b.length)
// }
// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))
// ========================================
// function longestWord(stringOfWords) {
//   let arr = stringOfWords.split(' ');
//   let str = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length >= str.length) { 
//       str = arr[i];
//     }
//   }
//   return str;
// }
// console.log(longestWord("red white blue"))
// console.log(longestWord("red blue gold" ))
  // =========================================
  // function wordToBin(str){
  //   let array = str.split('').map(char => {
  //     let binary = char.charCodeAt(0).toString(2)
  //     return binary.padStart(8, '0');
  //   })
  //   return array
  // }
  // console.log(wordToBin("man"))
  // ====================================
//   function rowSumOddNumbers(n) {
//     let str = n * n - n + 1
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//       sum += str + i * 2
//     }
//     return sum
//   }
// console.log(rowSumOddNumbers(1))
// console.log(rowSumOddNumbers(2))
// console.log(rowSumOddNumbers(3))
// ===================================
// function findShort(s){
//   let arr = s.split(" ")
//   let sum = arr[0].length
//   for(let i = 1; i < arr.length; i++){
//     if(arr[i].length < sum){
//       sum = arr[i].length
//     }
//   }
//   return sum
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
// ==========================================
// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(positiveSum([1,-4,7,12]))
// =============================================
// function isLeapYear(year) {
// return (year % 4 === 0 && year % 100 !==0 ) || (year % 400 === 0)
// }
// console.log(isLeapYear(2024))
// ===============================================
// function boolToWord(bool) {
//   return bool ? 'Yes' : 'No';
// }
// console.log(boolToWord(true))
// console.log(boolToWord(false))
// =================================================
// function reverseWords(str){
//   return str.split(" ").reverse ().join(" ")
// }
// console.log(reverseWords("The greatest victory is that which requires no battle"))
// ======================================================



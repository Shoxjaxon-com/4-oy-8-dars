// 2-masala
// function string(str){
// let res = ''
// for (const iterator of str) {
//     if(iterator != ' '){
//         res+=iterator
//     }
// }
// return res;
// }
// console.log(string("Salom Xayir"));

// 3-masala
// function sozlar(arg){
//     return arg.map(element => element.toUpperCase());
// }
// let arg = ['salom', 'xayir']
// console.log(sozlar(arg));

// // 4-masala
// function kopaytma(num){
//     let arr = [1,2,3,4,5,6,7,8,9];
//     let sum = 1;
//     for (const iterator of arr) {
//         sum *= iterator
//     }
//     return sum;
// }

// console.log(kopaytma(1,2,3,4,5,6,7,8,9));

// // 6-masala
// function num(arr){
//     let res = arr.slice()
//     res.reverse()
//     return res;
// }
// let son = [ 1,2,3,4,5]
// let number = num(son)
// console.log(number);
// 7-masala
// let num = [1,2,3,4,5,6,7,8,9]
// let res = num.forEach(function(v,i){
//     console.log(i);  
// })

// 8-masala
// let num = [1,2,3,4,5,6,7,8,9]
// let res = num.forEach(function(v,i){
//     console.log(i);  
// })
// 9-masala
// function yigindi (num,qiymat){
//     let res = [];
//     for(let i =0; i< num.length;i++){
//         res.push(num[i]+qiymat)
//     }
//     return res;
// }
// let number = [1,2,3,4,5]
// let qiymat = 8;
// let res = yigindi(number,qiymat)
// console.log(res);

// 10-masala
// function son(arr){
//     let musbat = []
//     let manfiy = []

//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] >= 0){
//             musbat.push(arr[i])
//     } else{
//         manfiy.push(arr[i])
//     }
//     }
//     return {musbat,manfiy}
// }
// let num = [-1,2,3,5,67,-34,-5,-76,-89,890]
// let res = son(num)
// console.log(res);

// 11-masala
// function takrorlsh(num, n){
//     let res =[]
//     for(let i = 0; i < n ; i++){
//         res = res.concat(num)
//     }
//     return res;
// }

// let number = [1,2,3,4,5]
// let n = 6;
// let res = takrorlsh(number,n)
// console.log(res);

// 12-masala
// function string(arr){
//     return arr.map(String)
// }
// let res = [1, true, null, 4.5, ]
// let str = string(res)
// console.log(str);

// 13-masala
// let arr =[1,2,3,4,6,7]
// let res = arr.filter(function(v,i){
//  return i % 2 == 0;
// })
// console.log(res);

// 14-masala
// function toqSon(arr){
//     let sum = 0;
//     for(let i =0; i < arr.length; i++){
//         if( arr[i] % 2== 1){
//             sum++
//         }
//     }
//     return sum;
// }

// let num = [1,2,3,4,5,6,7,8,9]
// let res = toqSon(num)
// console.log(res);

// 15-masala
// function kattaKichik(arr) {
//     if (arr.length === 0) return { kichik: [], katta: [] };
//     let kichik = Math.min(...arr);
//     let katta = Math.max(...arr);
//     let kichikSon = [];
//     let kattaSon = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === kichik) {
//         kichikSon.push(arr[i]);
//       }
//       if (arr[i] === katta) {
//         kattaSon.push(arr[i]);
//       }
//     }
//     return { katta, kichik };
//   }
//   let arr = [1,2,3,4,5,6,7,8,9];
//   let res = kattaKichik(arr);
//   console.log(res);

// 16-masala
//   function qayta(arr){
//     let res =[]
//     arr.forEach(element => {
//         res.push(element,element)
//     });
//     return res
//   }
//   let num = [1,2,3,4,5]
//   let res = qayta(num)
//   console.log(res);

// 19-masala
// function qiymat(arr, qiymat) {
//     return arr.map(element => (element + qiymat).toString()).join(', ');
//   }
//   let arg = [1, 2, 3, 4];
//   let result = 5;
//   let res = qiymat(arg,result);
//   console.log(res);


//   20-masala
// function bosh(arr) {
//     return arr.filter(element => element === '').length;
//   }
//   let str = ['hello', '', 'world', '', 'JavaScript', ''];
//   let res = bosh(str);
//   console.log(res); 
  
// 21-masala
// function teskari(arr) {
//     return arr.slice().reverse();
//   }
//   let arg = [1, 2, 3, 4, 5];
//   let res = teskari(arg);
//   console.log(res);
  
// 22-masala
// function kvadratIldiz(arr) {
//     return arr.map(element => Math.sqrt(element));
//   }
//   let arg = [1, 4, 9, 16, 25];
//   let res = kvadratIldiz(arg);
//   console.log(res);

// // 23-masala
//   let arr = [1,2,3,4,5,6,7,8,9]
//   let res =arr.forEach(function(v,i){
//     return i % 2 == 0 && i % 2== 1;
//   })
//   console.log(res);

// 24-masala
// Faktorialni hisoblovchi yordamchi funksiya
function faktorial(n) {
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) {
      res *= i;
    }
    return res;
  }
  function faktoriallarniHisobla(massiv) {
    return massiv.map(element => faktorial(element));
  }
  let massiv = [0, 1, 2, 3, 4, 5];
  let faktoriallar = faktoriallarniHisobla(massiv);
  
  console.log(faktoriallar);
  
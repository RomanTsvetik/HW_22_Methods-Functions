// //Task 1 - indexOf()

// let array = [ `cat`, `dog`, `fish`, `elephant`];

// function getIndexOf(elem, fromIndex = 0) {  
    
//     let index = -1;
//     let i = 0;    

//     if (fromIndex >= array.length) return index;

//     if (fromIndex < 0) i = array.length + fromIndex;
    
//     for (i; i < array.length; i++) {
//         if (elem === array[i]) {
//             index = i;
//             break;
//         }                
//     }
//     return index;
// }

// console.log(getIndexOf(`fish`));

// //Task 2 lastIndexOf()

// let array = [1, 2, 3, 2, 4, 3, 5];


// function getLastIndexOf(elem, fromIndex = array.length) {

//     let index = -1;

//     if (fromIndex < 0) fromIndex = 0;
//     if (fromIndex > array.length) fromIndex = array.length;

//     for (let i = array.length - 1; i >= 0; i--) {
//         if (elem === array[i]){
//             index = i;
//             break;
//         }
//     }
//     return index;
// }

// console.log(getLastIndexOf(3));

// // Task 3 find()

// let array = [1, 2, 3, 2, 4, 3, 5]; 

// function getFindElement(callback) {
//     for (let i = 0; i < array.length; i++){
//         if (callback(array[i])) return array[i];
//     }
//     return undefined;
// }

// function testA(elem) {    
//     if (elem === 3) return true;
//     else return false;
// }

// function testB(elem) {    
//     if (elem > 4 && elem < 6) return true;
//     else return false;
// }

// console.log(getFindElement(testA));
// console.log(getFindElement(testB));

// // Task 4 findIndex() 

// let array = [1, 2, 3, 2, 4, 3, 5]; 

// function getFindIndex(callback) {
//     for (let i = 0; i < array.length; i++){
//         if (callback(array[i])) return i;
//     }
//     return -1;
// }

// function testA(elem) {    
//     if (elem > 10) return true;
//     else return false;
// }

// function testB(elem) {    
//     if (elem === 3) return true;
//     else return false;
// }

// console.log(getFindIndex(testA));
// console.log(getFindIndex(testB));

// //Task 5 includes()

// // let array = [ `cat`, `dog`, `fish`, `elephant`];
// let array = [1, 2, 3, 4, 5];

// function getIncludes(elem, fromIndex = 0) {

//     let bool = false;

//     if (fromIndex >= array.length) return bool;
//     if (fromIndex < 0) i = array.length + fromIndex;

//     for (let i = 0; i < array.length; i++){
//         if (elem === array[i]) bool = true;              
//     }
//     return bool;
// }

// console.log(getIncludes(3));

// // Task 6 every()

// let array = [12, 23, 32, 42, 51];

// function getEveryElem(callback) {
//     if (array.length === 0) return true;
        
//     for (let i = 0; i < array.length; i++){
//         if (callback(array[i]) !== true) return false;
//     }
//     return true;
// }

// function testA(elem) {

//     if (elem > 20) return true;
//     else return false;
// }

// function testB(elem) {
//     if (elem < 52 && elem > 11) return true;
//     else return false;
// }

// console.log(getEveryElem(testA));
// console.log(getEveryElem(testB));

// // Task 7 some()

// let array = [12, 23, 18, 15, 9];

// function getSomeElem(callback) {
//     if (array.length === 0) return false;
        
//     for (let i = 0; i < array.length; i++){
//         if (callback(array[i])) return true;
//     }
//     return false;    
// }

// function testA(elem) {

//     if (elem > 20) return true;
//     else return false;
// }

// function testB(elem) {
//     if (elem < 20 && elem > 17) return true;
//     else return false;
// }

// console.log(getSomeElem(testA));
// console.log(getSomeElem(testB));
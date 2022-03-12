const array=[1,2,3,4]
const newA=[]

//using includes()-> gives true or false
// for(let element of array){
//     if(!newA.includes(element)){ //not includes buja
//         newA.push(element)
//     }
    
// }
//using indexOf() gives index number if element exists or give -1 if element doesn't exists
for(let element of array){
    if(newA.indexOf(element)===-1){
        newA.push(element)
    }
}
console.log(newA)
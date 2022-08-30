let args=process.argv;
//console.log(typeof(args))
const newArray=Array.from(args.slice(2))
console.log(newArray);
let numbers = [5, 13, 1, 44, 32, 15, 500]
let lowestToHighest = newArray.sort((a, b) => a - b);
//console.log(lowestToHighest );
const functionTimer= (array)=>{
    for(let i=0;i<array.length;i++){
    let numberArray=Number(array[i])
    //console.log(numberArray)
    setTimeout(() => {
        process.stdout.write('\x07')
        console.log(`${numberArray} secounds`)
    },numberArray*1000);
    
}};
functionTimer(lowestToHighest )

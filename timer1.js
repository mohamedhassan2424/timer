let args=process.argv;
//console.log(typeof(args))
const newArray=Array.from(args.slice(2))
console.log(newArray);

let orderArray= newArray.sort((a, b) => a - b);

console.log(orderArray);
const functionTimer= (array)=>{
    for(let i=0;i<array.length;i++){
    let numberArray=Number(array[i])
    //console.log(numberArray)
    setTimeout(() => {
        process.stdout.write('\x07')
        console.log(`${numberArray} secounds`)
    },numberArray*1000);
    
}};
functionTimer(orderArray)

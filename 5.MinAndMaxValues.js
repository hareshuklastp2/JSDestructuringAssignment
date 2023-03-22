let MinandMax=(arr)=>{
    let result={
        max:Math.max(...arr),
        min:Math.min(...arr)
    };
    return result;
};
arr=[4,2,6,1,9,6];
let result=MinandMax(arr);
console.log(result);

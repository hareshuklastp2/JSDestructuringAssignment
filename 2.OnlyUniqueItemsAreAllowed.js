let uniqueItemsSet=(arr)=>{
    let uniqueItems=new Set();
    arr.map(el=>uniqueItems.add(el));
    return uniqueItems;
};

let arr=[2,1,4,2,6,1,4,7,6];
let uniqueItems=uniqueItemsSet(arr);
console.log(uniqueItems);
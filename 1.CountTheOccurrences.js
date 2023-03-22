let wordCountGereratot=(str)=>{
    let map=new Map();
    let ArrStr=str.split(" ");
    ArrStr.map((el)=>{
        if(map.has(el))
        map.set(el, map.get(el)+1);
        else
        map.set(el, 1);
    });
    return map;
}
let str="hello hey hello hel hey hello hk pk pk hk"
let resultMap=wordCountGereratot(str);
console.log(resultMap);
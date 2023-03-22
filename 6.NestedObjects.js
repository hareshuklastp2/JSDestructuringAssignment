const person={
    user: "Hare Krishna",
    age: 23,
    address:{
        street: "ABC",
        city: "Siatpur",
        state: "UP"
    }
}
let ExtractNameAndAddress=(obj)=>{
    const {user, address}=obj;
    return {
        user:user,
        address:address
    }
};
let result=ExtractNameAndAddress(person);
console.log(result);

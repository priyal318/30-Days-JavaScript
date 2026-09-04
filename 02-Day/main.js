//key-value structure object
let obj={
    name:"priyal",
    age:20,
    lonelyandheartbreak:"yes"
};

obj.age;


//deep-structure objects

const user4={
    name:"priyal",
    age:20,
    study : {
        clg:"GEC",
        branch:"ICT",
        spi:7.5,
        address:{
            city:"bhavnagar",
            pincode:364002

        },
    },
};

//object deconstructing

for(let key in user){
    console.log(key);
}

//spread obj

let obj2={...user};
console.log(obj2);

//objectassign same as to copy previous object and its values

let obj3=Object.assign({},study);
console.log(obj3);


let objf={

    name:"priyalgandhi",
    age:20,
    clg:"GEC BHAVNAGAR",
    branch:"ICT"

}
let operations=JSON.parse(JSON.stringify(objf));
console.log(operations);

//given a dynamic key let key ="age",how will you access user[key]?

let key="age";
const user ={age:20};

//destructure the key "first-name" as a variable called firstname

const user2={
    "first-name":"priyal",
};
let {"first-name":firstname}=user2;



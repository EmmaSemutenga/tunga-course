let name = "Emmanuel"; //variable name
alert(name);

const myBirthday = '18.04.1900';//constant

/*
special numeric values, 
Infinity, -Infinity and NaN
*/

alert(1/0); //Infinity
alert(-1/0); //-Infinity
alert("something"/3); 
//NaN

alert(`hello ${name}`);
//Data types: numbers, strings, boolean(true, false), null, undefined, objects and symbols, 
let age = null; //represents “nothing”, “empty” or “value unknown”.
alert(age)

//meaning of undefined is “value is not assigned”
let x;
alert(x); //undefined
/*
But we don’t recommend doing that. Normally, we use null to assign an “empty” or “unknown” value to a variable, 
and we use undefined for checks like seeing if a variable has been assigned.
*/

if(age == undefined){
    alert("age has not been assigned")    
}else if(age == null){
    alert("age has been assigned to null")
}else{
    alert("I honestly don't know")
}

//The call to typeof x as an operator, or typeof(x) as a function 
//returns a string with the type name

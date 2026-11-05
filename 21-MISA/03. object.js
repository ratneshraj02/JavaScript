/* Object Literals */
/*
    Used to store complex entities, in these the order is not defined it's property pairs.
            [Key : Value]

    So, the object is collection of these properties.
*/
const delhi = {
    latitude: "28.7041N",
    longitude: "77.1025E"
};
console.log(delhi);


const student = {
    name: 'Ratnesh',
    age: 21,
    marks: 92,
    city: "Sonepur",
};
console.log(student);

/* Get values */
/*
    To Method : objectName["key"]
                objectName.key

*/
console.log(student["name"]); //Ratnesh
console.log(student.marks); // 92

/*
    JS automatically converts object keys to string, even if we made the number as a key, the number will be converted to string.
*/

/* Add/Update Value */

//change the city to "Mumbai"
student.city = "Mumbai";

//add new property gender = male
student.gender = "Male";

//change the marks to "A+"
student.marks = "A+";

console.log(student);

/* Delete Key - Value */
/*
    syntax : 
        delete objectName.keyName
*/

delete student.gender;
console.log(student);

/* Nested Object :- Object under object */
const classInfo = {
    aman: {
        Grade: 'A',
        city: "Delhi"
    },
    Raju: {
        Grade: "A+",
        city: "Patna"
    }
};
console.log(classInfo);





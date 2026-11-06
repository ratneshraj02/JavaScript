/* TDZ - Temporal Dead Zone */
/*
    The TDZ is a unique introduced with the class, let & const declaration in Javascript. It's the period between entering a scope and the actual declaration of a variable within that scope.

    During this phase, the variable exists but in inaccessible, accessing if before the declaration result is a reference error.

    e.g :
        console.log(a); //TDZ Zone - Reference Error
        const a = 10; 
*/

{
    //TDZ start at beginning of scope
    console.log(bar);
    console.log(foo);
    
    var bar = 1;
    let foo = 2; // End the TDZ
}
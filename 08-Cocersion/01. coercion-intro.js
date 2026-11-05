/*__________________________________________COERCION_______________________________________________*/
/*
    Every language has got some mechanism for type inter-conversion.

    e.g :-
    In Java if we do System.out.println("Hello" + 22);
    The above code will print "Hello22" i.e it did convert 22 from number to string & then did concatenated.

    COERCION - Type inter conversion
        
    1. Implicit :-
        When the language convert one type to another type of avoid data loss is Implicit.

    2. Explicit :-
        When we forces to language convert is Explicit.
    
    Similarly this concept exact in JS also, but this things are bit more tricky as JavaScript handle wind variety of conversion.

    How JS handle Coercion?
    
    -Abstract Operation :-
        First abstract operation that use need to learn is toPrimitive. To Primitive abstract operation, taken an input argument & an optional preferred type argument. so, this operation converts the input to a non-object type value, If an argument is capable of getting converted into more than one primitive type, then the function use preferred type argument to resolve it.

        As we said, this also an abstract operation that means it is conceptual, we cannot invoke it but JS internally can invoke it.

        The ToPrimitive function prefers String & Number conversion.

        a new variable
            |   
                        "default"
            hint --->   "String"
                        "Number"
        
        
                            hint
            "String"                "Number"
    ["ToString", "ValueOf"]    ["valueOf", "toString"]

    If hint/preferred type is number than on our input argument we call valueOf() function to get a number and if it doesn't give primitive we call toString() function.

    Otherwise, if hint argument is string then we first call toString() and the valueOf().

    hint - "Number" =>  valueOf(), toString()
    hint - "String" =>  toString(), valueOf()

    These are operations/functions which one not available for end users to use, but JS internally use it and these are mentioned in the official docs. to actually did the documentation.

    -> ToString()
    -> ToNumber()
    -> ToBoolean()
    -> ToPrimitive()
    We can not directly call them but few JS operation lie +, - etc. internally calls them & hence we can mimic them using these operation.
    
*/

# Operators


### Operand :
#### Value on which we want to do the operation.

        e.g :
            10 + 3 = 12
            Here,
                10, 3 are operand & "+" is operator.

### 1. Arithmetic Operator
#### 
- Addition(+)
- Subtraction(-)
- Multiplication(*)
- Division(/)
- Reminder(%)
- Exponent(**)

        e.g :
            let a = 10;
            let y = 3;

            console.log(x + y); //13
            console.log(x - y); //7
            console.log(x * y); //30
            console.log(x / y); //3.333
            console.log(x % y); //0
            console.log(x ** y); //1000
---
### 2. Assignment Operator
#### 
- (=)
- (+=)
- (-=)
- (*=)
- (%=)

        e.g : 
            let a = 10; //assign 10 value to variable a.

            a += 2  ==> a = a + 2;
            // let's say pervious value of a was 10, tha if you do a += 2, a = a + 2

            //On L.H.S use take old value of a and add 2 to it than assign new value back to it.

            a -= 2 => a = a - 2
            a *= 2 => a = a * 2
            a /= 2 => a = a / 2
            a %= 2 => a = a % 2
            a **= 2 => a = a ** 2
---
### 3. Relational Operator
####

##### It gives answer in True(1) & False(0)

- less than(>)
- less then equal to( >=)
- greater then(<)
- greater theb equal to (<=)


        e.g:
            let x = 10;
            let y = 20;
            let z = 5; 
            let a = 10;

            console.log(x < z); //false
            console.log(y > z); //true
            console.log(x <= z); // false
            console.log(x >= a); // true
---
### 4. Logical Operator
####

- && - AND
- || - OR
-  ! - NOT

##### AND
        X   |   Y   |  X&&Y
        --------------------
        F       F       F
        T       F       F
        F       T       F
        T       T       T
##### OR
        X   |   Y   |  X||Y
        --------------------
        F       F       F
        T       F       T
        F       T       T
        T       T       T
#### NOT
        X   |  Output   
        --------------
        !F       T       
        !T       F    
####
        e.g :
            console.log(true && false); // false
            console.log((10 > 5) && (6 < 3)); // false
            console.log(true && false); // false
            console.log(false || false); // false
            console.log(true && true); // true
            console.log(!(3 > 4)); // true
* What value are falsy & truthy values in JS ?
- falsy
        
        e.g : 
            -> null
            -> undefined
            -> NaN
            -> +0, -0
            -> " ", ' ' - empty string
            -> false  
- truthy
        
        e.g : 
            -> Apart from this everything in truthy.

##### Short Circutting

- In and AND get if teh first input is false then, it doesn't evaluate the second and immediately returns the first input.
- If first input is true than the second input has to be evaluate than second value return.

##### AND
        X   |   Y   |  X&&Y
        --------------------
        F       F       F
        T       F       F
        F       T       F
        T       T       T
####
        e.g : 
            10 && 6 => 6
            0 && 10 => 0


- In OR get if the first value is true than it doesn't eveluated the second value and immediately return the first value
- Whenever if the first input is false there it return the second input.
##### OR
        X   |   Y   |  X||Y
        --------------------
        F       F       F
        T       F       T
        F       T       T
        T       T       T
###
        e.g :
            console.log(5 || 5); // 10
            console.log(6 || 9); // 6
            console.log(0 || -0); // -0

- Number : 
        
        e.g:
            +0
            -0
            NaN - Not a number
            -Infinity
            +Infinity
##### If there is a situation where you're bound to return a number, but there is no valid possible number be return NaN.


- Which is only number in JS, which not equal ot itselft? 
That is NaN.
        
        e.g:
            console.log(+0);
            console.log(-0);
            console.log(NaN);
            console.log(+Infinity);
            console.log(-Infinity);

### 5. Bitwise Operator
- Bitwise operator performs the correspending operation on bit by bit on the given operend.

        bitwise AND -> &
        bitwise OR  -> |
        bitwise XOR -> ^
        bitwise NOT -> ~
###
        e.g : 
        1. 
            5 & 7 => 5

            5 = 0101
            7 = 1111

                0101
              & 1111
              --------
                0101 = 5
        2. 
            6 & 9 => 0

            5 = 0110
            7 = 1001

                0110
              & 1001
              --------
                0000 = 0
        3. 
            5 | 6 => 7

            5 = 0101
            7 = 0110

                0101
              & 0110
              --------
                0111 = 7

### 6. Equality Operator
- Abstract equality operator (==) :
    * It checks the type of both operand, if the is same then if calls (===).
    * It type are not same the type conversion occus and then comparision occus.
- Strict equality operator (===) : 
    * It alse checks type of both the operend if types are differnet it return false.
    * It types are same then value comparison happens.

            e.g : 
                console.log(1 == '1'); // true
                console.log(1 == "demo"); // NaN

### typeof() : 
- To check type of variable.

        e.g : 
            console.log(typeof('1')); //String
            console.log(typeof(1)); // number
            console.log(typeof(fasle)); // boolean
            console.log(typeof(null)); // object
            console.log(typeof(undefined)); // undefined

### Operator Precendence
- This is the general order of solving an expression.
     
        1. ()
        2. **
        3. *, /, %
        4. +, -

        e.g: 
            (5+2)/7+1*2
             => 7/7+1*2
             => 1+2
             => 3
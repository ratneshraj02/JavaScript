/* async & await */

/* async keyword */
/*
    There is special syntac to work with promises in Javascript.
    A function can be made async by using async keyword like this 
*/
async function fun() {
    return 1;
}

/*
    As async functions always returns a promise other values are warpped in a promise automatically

    we can do something like this
 */
hello().then(alert);

/*
    So, async ensures that the function returns a promise and warap non promises in it.
*/

/* await keyword */
/*
    There is another keyword called await that works only inside async functions

    The awit keyword makes JS wait unitl the promise settle and return its value.

    It just a more elegant syntac of getting the promise result than promise then add its easier to read & write.
 */

    let value = await promise;
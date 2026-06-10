/*
    Break Statament : Whenever we hit break we come out of the nearest loop.
*/

//e.g:
    for(let i = 1;i < 5;i++){
        for(let j = 1; j < 5 ; j++){
            if(j==i)
                break;
            console.log(j);
        }
    } 
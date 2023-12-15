let A = 8;
let B = 10;

function f(q,e){
    let count = 0;
    for (let i = q+1; i<e; i++){
        count+=i
    };
    return count
};

console.log(f(A,B));
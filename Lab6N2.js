let N = 3;
let M = 4;
let arr = [[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12]];
let new_arr=[];
let count = 0;
function array_new(k){
    let count1 = 0;
    for (let i=0; i<=N-1; i++){
        count1+=arr[i][k];
    };
    return count1
};
for (let j=1; j<=M-1; j=j+2){
    let new_arr_mini=['Сумма '+(j+1)+' столбца ='];
    count = array_new(j)
    new_arr_mini.push(count+' ');
    new_arr.push(new_arr_mini);  
    count=0;
}; 
alert(new_arr.flat(Infinity).join(' '));

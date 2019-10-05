var arrayMother = new Array(100);
for(let i = 0; i < 100; i++){
    let lengthOfArray = Math.round( Math.random() * 45 ) + 5;
    arrayMother[i] = new Array(lengthOfArray);
    for(let i2 = 0; i2 < lengthOfArray; i2++){
        arrayMother[i][i2] = Math.round( Math.random() * 100 );
    }
}
for(let i = 0; i < 100; i++){
    console.log(arrayMother[i]);
}
// done A.

function compare(a, b){
    const arrayA = a.length;
    const arrayB = b.length;

    let comparison = 0;
    if(arrayA > arrayB){
        comparison = 1;
    }
    if(arrayA < arrayB){
        comparison = -1;
    }
    return comparison;
}

console.log(arrayMother.sort(compare));

for(let i = 0; i < 100; i++){
    console.log(arrayMother[i]);
}



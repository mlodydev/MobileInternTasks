var arrayMother = new Array(100);
var numberOfElements=0;
for(let i = 0; i < 100; i++){
    let lengthOfArray = Math.round( Math.random() * 45 ) + 5;
    numberOfElements += lengthOfArray;
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
console.log("po sortowaniu");

for(let i = 0; i < 100; i++){
    console.log(arrayMother[i]);
}

var bigArray = new Array();

for(let i = 0; i < 100; i++){
    //console.log(arrayMother[i]);
    let lengthOfArray = arrayMother[i].length;
    //console.log(`length of array: ${lengthOfArray}`);
    for(let i2 = 0; i2 < lengthOfArray; i2++){
        bigArray.push(arrayMother[i][i2]);
        //console.log(`next word of array: ${arrayMother[i][i2]}`);
    }
}

console.log(`Generated array ${bigArray}`); 
//done B.
console.log(numberOfElements);
let index = 0;
let index2 = 0;
while(index < numberOfElements){
    if( ( bigArray[index - index2] % 2 ) !== 0 ){
        bigArray.splice(index - index2, 1);
        index2++;
    }
    index++;
}
console.log(`Generated array - no odd numbers ${bigArray}`);
//done C.


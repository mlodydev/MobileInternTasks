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
        //console.log(`next element of array: ${arrayMother[i][i2]}`);
    }
}
console.log(`Generated array ${bigArray}`);
//done B.

var bigArray2 = [...bigArray];

function removeItems(arrayToRemove, isEven){
    let index = 0;
    let index2 = 0;
    let lengthOfMyArray =  arrayToRemove.length;
    
    while(index < lengthOfMyArray){
        if(isEven === false){
            if( ( 
                ( arrayToRemove[index - index2] % 2 ) !== 0 ) ||
                ( arrayToRemove[index - index2] === 0 )
              ) {
                arrayToRemove.splice(index - index2, 1);
                index2++;
            }
            index++;
        }
        else{
            if( ( arrayToRemove[index - index2] % 2 ) === 0 ){
                arrayToRemove.splice(index - index2, 1);
                index2++;
            }
            index++;
        }
    }
    return arrayToRemove;
}

bigArray = removeItems(bigArray, false);

console.log(`Generated array - no odd numbers ${bigArray}`);
//done C.

bigArray.sort( function(a,b){ return a - b } );

console.log(`Generated array - no odd numbers - ascending order ${bigArray}`);
//done D.


// Now there is a problem. If I am supposed to do it on the same array there will be no element left
bigArray = removeItems(bigArray, true);

console.log(`Generated array - no even numbers ${bigArray}`);

bigArray.sort( function(a,b){ return a - b } );

//or if i am supposed to do it once again on full array it will be as follow

bigArray2 = removeItems(bigArray2, true);

console.log(`Generated array - no even numbers ${bigArray2}`);

bigArray2.sort( function(a,b){ return a - b } );

console.log(`Generated array - no even numbers - ascending order ${bigArray2}`);
//done E.


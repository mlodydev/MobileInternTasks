const numberOfArrays = 100;

var arrayMother = new Array(numberOfArrays);

var numberOfElements = 0;

const lowerLengthBound = 5;

const upperLengthBound = 50 - lowerLengthBound;

const upperValueBound = 100;

for(let i = 0; i < numberOfArrays; i++){
    let lengthOfArray = Math.round( Math.random() * upperLengthBound ) + lowerLengthBound;
    numberOfElements += lengthOfArray;
    arrayMother[i] = new Array(lengthOfArray);
    for(let j = 0; j < lengthOfArray; j++){
        arrayMother[i][j] = Math.round( Math.random() * upperValueBound );
    }
}
// done A.

//compare function wrote to compare objects using sort()
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

var bigArray = new Array();

for(let i = 0; i < numberOfArrays; i++){
    let lengthOfArray = arrayMother[i].length;
    for(let j = 0; j < lengthOfArray; j++){
        bigArray.push(arrayMother[i][j]);
    }
}
console.log(`Generated array ${bigArray}`);
//done B.

var bigArray2 = [...bigArray];

function removeItems(arrayToRemove, isEven){
    let index = 0;
    let numberOfRemovedElements = 0;
    let lengthOfMyArray =  arrayToRemove.length;
    
    while (index < lengthOfMyArray){
        if(isEven === false){
            if( ((arrayToRemove[index - numberOfRemovedElements] % 2 ) !== 0)
                || (arrayToRemove[index - numberOfRemovedElements] === 0) )
            {
                arrayToRemove.splice(index - numberOfRemovedElements, 1);
                numberOfRemovedElements++;
            }
            index++;
        }
        else{
            if( ( arrayToRemove[index - numberOfRemovedElements] % 2 ) === 0 ){
                arrayToRemove.splice(index - numberOfRemovedElements, 1);
                numberOfRemovedElements++;
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

bigArray2 = removeItems(bigArray2, true);

console.log(`Generated array - no even numbers ${bigArray2}`);

bigArray2.sort( function(a,b){ return a - b } );

console.log(`Generated array - no even numbers - ascending order ${bigArray2}`);
//done E.

// lodash
var origStr = "$**+*{2} 9mmmrrrkbb";
var separator = origStr.indexOf(" ");
var strOne = origStr.substring(0, separator);
var strTwo = origStr.substring(separator + 1);
var strOneArr = strOne.split("");
var strTwoArr = strTwo.split("");

var isLetterRegEx = /^[a-z]+$/i;
var isNumberRegEx = /[1-9]/;
var toReturn = false;

var idxRight = 0;
var idxLeft = 0;

while (idxRight < strTwo.length) {
	if (strOneArr[idxLeft] === "+") {

        if (!isLetterRegEx.test(strTwo[idxRight]))
        {
        	toReturn = false;
            idxRight++;
            idxLeft++;
            continue;
        }
        else
        {
        	toReturn = true;
            idxRight++;
            idxLeft++;
        	continue;
        }
    } else if (strOneArr[idxLeft] === "$") {
        if (!isNumberRegEx.test(strTwo[idxRight]))
        {
        	toReturn = false;
            idxRight++;
            idxLeft++;
            continue;
        }
        else
        {
        	toReturn = true;
            idxRight++;
            idxLeft++;
        	continue;
        }
    } else if (strOneArr[idxLeft] === "*") {
    	var hasNumSpecified = false;
        if (idxLeft + 1 < strOne.length)
        {
        	if (strOne[idxLeft+1] === "{")
            {
            	hasNumSpecified = true;
            }
        }
        
        var numOfOccurances = 3;
        
        if (hasNumSpecified) {
        	var numSubStr = strOne.substring(idxLeft + 1, idxLeft + 4);
        	numOfOccurances = parseInt(numSubStr.match(/(\d+)/)[0]);
        }
        
        var allMatch = true;
                
        for (var x = 0; x < numOfOccurances; x++) {
        	if (strTwo[idxLeft] !== strTwo[idxLeft + 1]) {
                allMatch = false;
        	}
        }
                
        if (!allMatch) {
            toReturn = false;
            idxLeft++;
            idxRight++;
            continue;
        } else {
            toReturn = true;
            idxRight = idxRight + numOfOccurances;
            if (hasNumSpecified) {
                idxLeft = idxLeft + 3;
            } else {
                idxLeft++;
            }
            continue;
        }
	} 
}


console.log(toReturn);
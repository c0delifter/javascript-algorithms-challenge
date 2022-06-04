function StringReduction(str) { 
  var strArr = Array.from(str);
  var letters = ["a", "b", "c"];
  var combos = ["ab", "ac", "ba", "bc", "ca", "cb"];

  var idx = 0;

  while (idx < strArr.length && strArr.length > 1) {
    if (idx !== strArr.length -1) {
    var combo = strArr[idx] + "" + strArr[idx+1];
    if (combos.includes(combo)) {
      for (var j = 0; j < letters.length; j++) {
        if (combo.indexOf(letters[j]) === -1) {
          strArr[idx] = letters[j];      
          strArr.splice(idx+1, 1);
          idx = 0;
          continue;
        }
      }
    } else {
      idx++;
      continue;
    }
    } else {
      return strArr.length;
    }
  }
  return strArr.legnth;
}

function hasAdjacentCharacters(str, arr) {
  return arr.some(element => {
    if (str.includes(element)) {
      return true;
    }
      return false;
    });
}

// keep this function call here 
console.log(StringReduction(readline()));
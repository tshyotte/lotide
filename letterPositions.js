  const letterPositions = function(sentence) {
    let results = {};
    let len = sentence.length;
    let charArray = [];
    
    for (let i = 0; i < len; i++) { 
      if (sentence[i] !== " ") {
        if(results[sentence[i]]) { 
          charArray.push(sentence.indexOf(sentence[i]));
          results[sentence[i]] = charArray;
        } else {
          results[sentence[i]] = sentence.indexOf(sentence[i]);
        }
      }
  
    } 
   return results;
};

const test = letterPositions(" hello i");
console.log(test);


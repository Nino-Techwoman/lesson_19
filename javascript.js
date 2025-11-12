
// 1

function countVowels(word) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
          count++;
      }
  }

  return count;
}

console.log(countVowels("junior")); 

//  2
function countVolewe(text){
  const vowels  =  "aeiouAEIOU";
  let count = 0;
  for(let i = 0; i<text.length; i ++){
    if(!vowels.includes(text[i])){
      count ++
    }
  }
  return count
  
}

console.log(countVolewe("alexandro"));



// 3

function firstVowel(text) {
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      return i; 
    }
  }

}

console.log(firstVowel("hello"));


console.log(word("abc"))



// 4
function countUpperCase(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] >= 'A' && text[i] <= 'Z') {
      count++;
    }
  }

  return count;
}


console.log(countUpperCase("HeLLo")); 





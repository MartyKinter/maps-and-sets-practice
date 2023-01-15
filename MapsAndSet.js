//1
new Set([1,1,2,2,3,4])
//returns [1,2,3,4]

//2
[...new Set("referee")].join("")
//returns "ref"

//3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}

//4
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//5
function vowel(char){
    return "aeiou".includes(char);
}

function isVowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowercaseChar = char.toLowerCase();
        if(vowel(lowercaseChar)){
            if(vowelMap.has(lowercaseChar)){
                vowelMap.set(lowercaseChar, vowelMap.get(lowercaseChar)+1);
            }else{
                vowelMap.set(lowercaseChar, 1);
            }
        }
    }
    return vowelMap
}
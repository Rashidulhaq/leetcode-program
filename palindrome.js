
var isPalindrome = function(x) {

    const nmString=String(x);
    let left=0;
    let right=nmString.length-1;

    while(left<right){
        
        if (nmString[left] !== nmString[right]){
        return false;
        }

    left++;
    right--;

    }
    return true; 
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

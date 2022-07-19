function addStrings(str1, str2){
    let i = str1.length -1;
    let j = str2.length -1;
    let carry = 0; // 存储进位
    let ans = [];
    while(i>=0 || j>=0 || carry !=0){
        const x = i>=0 ? str1.charAt(i) - '0' : 0; // 为负数的时候就补0
        const y = j>=0 ? str2.charAt(j) - '0' : 0;
        const result = x + y + carry;
        ans.push(result%10)
        carry = Math.floor(result/10);
        i--;
        j--;
    }
    console.log(ans, 'ans')
    return ans.reverse().join('')
}
console.log(addStrings('12', '11'))
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

function MaxLength(str){
    let len = str.length;
    let r = 0;
    let ans = 0;
    const hashSet = new Set();
    for(let i = 0; i < len; i++) {
        if(i !=0) {
            hashSet.delete(str.charAt(i-1))
        }
        while(r < len && !hashSet.has(str.charAt(r))) {
            hashSet.add(str.charAt(r))
            r++
        }
        ans = Math.max(ans, r-i)
    }
    return ans

}

console.log(MaxLength('pwwkew'))


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let start =  0;
    let len = s.length;
    let res = 0;
    for(let i = 0 ;i < len; i++){
      let temp = s.substr(start,i-start + 1);
      let pos = temp.indexOf(s[i+1]);
      if(pos === -1){
        
      }else{
        start = start + pos+1;
      }
      res = Math.max(res,temp.length)
    }
    return res;

};
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
    
    if (strs.length === 1) return strs[0];
    if (strs[0] === '') return '';

    let prefix = '';
    strs = strs.sort();
    console.log({strs})

    const first = strs[0];
    const last = strs[strs.length - 1];

    let index = 0;
    for (let i = 0, s = first.length; i < s; i++) {
        console.log({
            i,
            a: first[i] ,
            b: last[i]
        })
        if (first[i] !== last[i]) break;
        index++;
        
    }
    console.log({index})
    return first.substring(0, index)
};



// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["","",""]))
//console.log(longestCommonPrefix(["ba", "a"]))
console.log(longestCommonPrefix(["flower","flow","flight"]))



/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix111 = function (strs) {
    
    if (strs.length === 1) return strs[0];
    if (strs[0] === '') return '';

    let prefix = '';

    strs = strs.sort;

    let index = 0; flag = true;
    
    const currText = strs[0];
    while (flag) {
        for (let k = 1; k < strs.length; k++) {
            const nextText = strs[k];

            //console.log({currText, nextText})
            if (nextText && currText.charAt(index) !== nextText.charAt(index)) {
                //console.log({c: currText.charAt(index), n: nextText.charAt(index)})
                flag = false;
                break
            }
        }

        if (!flag) {
            break;
        }
        prefix += currText.charAt(index);
        index++

        index === currText.length && (flag = false)
    }

    return prefix
};
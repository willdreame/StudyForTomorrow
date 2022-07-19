
Array.prototype.myreduce = function(fn,initialValue){
    if(Object.prototype.toString.call([])!== '[object Array]') {
        throw new TypeError('not a array')
    }
    const sourceArray = this;
    if(sourceArray.length ===0) {
        throw new TypeError('empty array')
    }
    if(typeof fn !== 'function') {
        throw new TypeError(`${fn} is not function`)
    }

    let preVal, currentValue, currentIndex;
    if(initialValue) {
        preVal = initialValue;
        currentIndex = 0
    }else {
        preVal = sourceArray[0];
        currentIndex = 1;
    }
    for(let i = currentIndex; i < sourceArray.length; i++) {
        currentValue = sourceArray[i];
        preVal = fn(preVal, currentValue, currentIndex,sourceArray)
    }
    // while(currentIndex < sourceArray.length) {
    //     if(Object.prototype.hasOwnProperty.call(sourceArray, currentIndex)){
    //         currentValue = sourceArray[currentIndex];
    //         accumulator = fn(accumulator,currentValue,currentIndex, sourceArray);
    //     }
    //     currentIndex++;
    // }

    return preVal;
}
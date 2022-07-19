const get = function (num) {
        const obj = {};
        obj.initNum = num;
        obj.minus = num => {
            obj.initNum = obj.initNum / num;
            return obj;
        };
    
        obj.plus = num => {
            obj.initNum = obj.initNum * num;
            return obj;
        };
    
        obj.result = () => {
            return obj.initNum;
        };
        return obj;
    }

// const get = (num)=> {
//     return minus = (param)=> {}
// }
    console.log(get(1).minus(2).plus(3).result())
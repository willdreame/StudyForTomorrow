// function compare(a,b){
//     let v1 = a.split('.');
//     let v2 = b.split('.');
//     for(let i = 0; (i < v1.length || i < v2.length); i++) {
//         let x = 0, y = 0;
//         if(x < v1[i]) {
//             x = v1[i]
//         }
//         if(y < v2[i]) {
//             y = v2[i]
//         }
//         if(x > y) {
//             return 1
//         }
//         if(x < y) {
//             return -1
//         }
//     }
//     return 0;
// }


function compare(a,b){
    let v1 = a.split('.');
    let v2 = b.split('.');
    for(let i = 0; (i < v1.length || i < v2.length); i++) {
        let x = 0, y = 0;
        if(x < v1[i]) {
            x = v1[i];
        }
        if(y < v2[i]) {
            y = v2[i];
        }
        if(x > y) {
            return -1
        }
        if(x < y) {
            return 1
        }
    }
    return 0;
}

const a = ['1.2', '1.1.1', '1.2.1', '2.0', '0.55', '1.1.1']
console.log(a.sort((a,b)=>compare(a,b)))





































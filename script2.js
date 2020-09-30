const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    console.time('funChallenge')
    if(err){
        console.log("Errorrrrrrr")
    }
    const actual_position = position(data.toString());
    console.log(actual_position);
    console.timeEnd('funChallenge')

})

const position = (data) => {
    length = data.length
    let floor_number = 0
    let position = 0
    for(let i = 0; i < length; i++){
        if (data[i] === '('){
            floor_number += 1
        } else{
            floor_number -= 1
        }
        if(floor_number < 0){
            position = i+1;
            break;
        }
    }
    return position;
}

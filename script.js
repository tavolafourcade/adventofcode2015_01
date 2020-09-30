const fs = require('fs');

//fs.readFile()
fs.readFile('./input.txt', (err, data) => {
    console.time('funChallenge')
    if(err){
        console.log("Errorrrrrrr")
    }
    const floor_number = total_floor(data.toString());
    console.log(floor_number);
    console.timeEnd('funChallenge')

})

const total_floor = (data) => {
    length = data.length
    let floor_number = 0
    for(let i = 0; i < length; i++){
        if (data[i] == '('){
            floor_number += 1
        } else{
            floor_number -= 1
        }
    }
    return floor_number;
}
//fs.readFileSync()
// const file = fs.readFileSync('./hello.txt');
// console.log('Sync', file.toString());


//fs.appendFile()
// fs.appendFile('./hello.txt', ' this is so cool!', err => {
//     if (err) {
//         console.log(err)
//     }
// })

//fs.writeFile()
// fs.writeFile('./bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err)
//     }
// })


//DELETE
// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('Inception')
// })
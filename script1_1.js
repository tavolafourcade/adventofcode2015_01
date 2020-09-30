const fs = require('fs');

// 1 - What floor does Santa end up on
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor

function question1 () {
    fs.readFile('./input.txt', (err, data) => {
        console.time('funChallenge')
        if(err){
            console.log("Errorrrrrrr")
        }
        const floor_number = data.toString();
        const floor_numberArray = floor_number.split('');
    
        // console.log(floor_number);
        const answer = floor_numberArray.reduce((acc, currentValue) =>{
            if (currentValue === '('){
                return acc += 1
            } else if (currentValue === ')'){
                return acc -= 1
            }
            
        },0)
    
        console.log(answer);
        console.timeEnd('funChallenge')
    
    })
}


question1()


// 2 - Whats the position of the character that causes Santa to first enter
// the basement?

function question2 () {
    fs.readFile('./input.txt', (err, data) => {
        console.time('funChallenge2')
        const floor_number = data.toString();
        const floor_numberArray = floor_number.split('');
        let acc = 0;
        let count = 0;
        // console.log(floor_number);
        const answer = floor_numberArray.some((currentValue) =>{
            if (currentValue === '('){
                acc += 1
            } else if (currentValue === ')'){
                acc -= 1
            }
            count ++
            return acc < 0;
            
        })
    
        console.log('Basement entered at', count);
        console.timeEnd('funChallenge2')
    
    })
}


question2()

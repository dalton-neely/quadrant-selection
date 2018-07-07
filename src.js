const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lineCount = 0;
let x = 0
let y = 0

const getQuad = (x,y) => {
    if(x > 0 && y > 0)
        return 1
    else if(x < 0 && y > 0)
        return 2
    else if(x < 0 && y < 0)
        return 3
    else
        return 4
}

rl.on('line', input => {
    lineCount++
    if(lineCount === 1)
        x = parseInt(input,10)
    else{
        y = parseInt(input,10)
        console.log(getQuad(x,y))
        rl.close()
    }
})
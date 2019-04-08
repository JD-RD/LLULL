/* eslint-disable indent */
/* eslint-disable no-debugger */
/* eslint-disable no-global-assign */
function Transition7 () { // eslint-disable-line
    const colors = [ 'rgba(255, 199, 26,0.5)',
                     'rgba(237, 28, 36, 0.5)',
                     'rgba(0, 166, 81, 0.75)' ]
    
    // font
    let letters = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let surprise = []
    let choice
    let formedWord
    let llull
    // x0=>size, x1=>transparency, x2=>color, x3=>random
    let worlds = ['WHETHER?', 'WHAT?', 'OF WHAT?', 'WHY?', 'HOW MUCH?', 
    'OF WHAT KIND?', 'WHEN?', 'WHERE?', 'HOW?']

    this.setup = function () {
    }

    this.draw = function () {
        frameRate(rate)
        // bg
        background(255, 99, 71, x3.value() + 25 - x7.value() * 0.25)
        // random generation letters
        surprise = [] // 4 letters long
        for (let i = 0; i < worlds[6].length; i++) {
            choice = Math.random() // (0-1) float number
            if (choice > 0.5) {
                surprise.push(letters[Math.floor(Math.random(letters.length))])
            }
            surprise.push(numbers[int(Math.random(numbers.length))])
        }
        formedWord = surprise.join('')
        // console.log(formedWord)
        // text formation in two layers
        if (choice > 0.5) {
            llull = new Word(
                    w / 2 + Math.random(x2.value(), -x2.value()),       // x position
                    h / 1.75 + Math.random(x2.value(), -x2.value()),    // y position
                    color(colors[2]),                                   // color
                    x0.value() + 200,                                   // size
                    formedWord)                                         // text to add
            llull.create()
        } else {
            llull = new Word(
                    w / 2 + Math.random(x2.value(), -x2.value()),       // x position
                    h / 1.75 + Math.random(x2.value(), -x2.value()),    // y position
                    color(colors[0]),                                   // color
                    x0.value() + 200,                                   // size
                    worlds[6])                                          // text to add
            llull.create()
        }
    }
}

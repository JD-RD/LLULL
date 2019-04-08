/* eslint-disable indent */
/* eslint-disable no-debugger */
/* eslint-disable no-global-assign */
// debugger
function Intro () { // eslint-disable-line
    colors = [ 'rgba(255, 199, 26,0.5)',
                'rgba(237, 28, 36, 0.5)',
                'rgba(0, 166, 81, 0.75)' ]
    
    // font
    letters = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    surprise = []
    choice = null
    formedWord = null
    llull = null

    // x0=>size, x1=>transparency, x2=>color, x3=>random

    this.setup = function () {
        // access a different scene using the SceneManager
        oScene1 = this.sceneManager.findScene(Scene1) // eslint-disable-line
        console.log('> intro: connected')
    }

    this.draw = function () {
        // console.log('rate: ' + rate)
        frameRate(rate)

        // bg
        background(255, 99, 71, x3.value() + 25 - x7.value() * 0.25)
        // random generation letters
        surprise = [] // 4 letters long
        for (let i = 0; i < 3; i++) {
            choice = Math.random() // (0-1) float number
            if (choice > 0.5) {
                surprise.push(letters[Math.floor(Math.random(letters.length))])
            }
            surprise.push(numbers[int(Math.random(numbers.length))])
        }
        formedWord = surprise.join('')
        // text formation in two layers
        /* eslint-disable no-multi-spaces */
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
                'LLULL')                                            // text to add
            llull.create()
        }
    }
}

this.randomness = function (rnd) {
    this.x += Math.random(-rnd, rnd) // random option
    this.y += Math.random(-rnd, rnd)
}

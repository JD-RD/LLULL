/* eslint-disable indent */
/* eslint-disable no-debugger */
/* eslint-disable no-global-assign */
// x0,x4    =>dot size for each player
// x1,x5    =>randomness for each player
// x2,x6    =>alpha controlled by both players
// x3,x7    =>amount Perlin Noise / WIP
// debugger
function Scene8 () { // eslint-disable-line
    let dot1, dot2
    let thickness
    let colors = [ 'rgba(255, 199, 26,0.5)',
                   'rgba(237, 28, 36, 0.95)',
                   'rgba(0, 166, 81, 0.5)' ]

    this.setup = function () {
        dot1 = new Dot(w / 2, h / 2)
        dot2 = new Dot(w / 2, h / 2)
    }

    this.draw = function () {
        frameRate(rate)
        background(255, 199, 26, x3.value() + 25 - x7.value() * 0.25)
        // dot 1
        push()
        noiseMax = x2.value() / 200
        thickness = x1.value() / 10
        dot1.creationBlubby(colors[2], thickness)
        pop()
        // dot2
        push()
        noiseMax = x6.value() / 100
        thickness = x5.value() / 10
        dot2.creationBlubby(colors[1], thickness)
        pop()
    }
}

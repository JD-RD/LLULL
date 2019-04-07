/* eslint-disable indent */
/* eslint-disable no-debugger */
/* eslint-disable no-global-assign */
// debugger
function Scene4() { // eslint-disable-line
    // x0,x4    =>dot size for each player
    // x1,x5    =>randomness for each player
    // x2,x6    =>alpha controlled by both players
    // x3,x7    =>amount of sin() controlled by both players

    // dots
    let dotSize = w / 32
    let colors = [ 'rgba(255, 199, 26,0.5)',
                   'rgba(237, 28, 36, 0.5)',
                   'rgba(0, 166, 81, 0.5)' ]

    let dotList1 = []
    let dotList2 = []
    let spacing1 = w / 10
    let spacing2 = w / 9.5

    this.setup = function () {
        // dotList1 create
        for (let x = spacing1; x < w; x += spacing1) {
            for (let y = spacing1; y < h; y += spacing1) {
                dotList1.push(new Dot(x - dotSize / 2, y - dotSize / 2))
            }
        }
        console.log('dotList1:', dotList1)
        // dotList2 create
        for (let x = spacing2; x < w; x += spacing2) {
            for (let y = spacing1; y < h; y += spacing1) {
                dotList2.push(new Dot(x - dotSize / 2, y - dotSize / 2))
            }
        }
    }

    this.draw = function () {
        // bg - x2 adds x6 substracts alpha
        background(255, 199, 26, x2.value() + 5 - x6.value() * 1.25)

        // grid translations - x3 adds x7 substracts rotation
        // translate(0, 0)
        // play with sin() to move the y grid position
        translate(0, 10 + Math.sin(frameCount / 10) * x3.value() - x7.value())

        // dot1
        for (let i = 0; i < dotList1.length; i++) {
            dotList1[i].create(dotSize + x0.value() * 2, colors[1])
            this.randomness(dotList1[i], x1.value() / 10)
            noiseMax = x3.value() / 100
            // dotList1[i].creationBlubby(colors[1])
            this.checkDistance(dotList1[i], dotSize)
          }

        // dot2
        for (let i = 0; i < dotList2.length; i++) {
            dotList2[i].create(dotSize + x4.value() * 2, colors[2])
            this.randomness(dotList2[i], x5.value() / 10)
            noiseMax = x3.value() / 100
            // dotList2[i].creationBlubby(colors[2])
            this.checkDistance(dotList2[i], dotSize)
          }
    }

    // reset values
    this.resetScenes = function () {
        // multipliers values to 0
        x0.value(0)
        x1.value(0)
    }

    this.randomness = function (dot, dotSize) {
        if (dot.y < 0) {
            dot.y = dot.y + dotSize * 3 // we just pullback the dot 3 times it's size
        }
        if (dot.y > h) {
            dot.y = dot.y - dotSize * 3
        }
    }

    this.checkDistance = function (dot, dotSize) {
        if (dot.y < 0) {
            dot.y = dot.y + dotSize * 3 // we just pullback the dot 3 times it's size
          }
          if (dot.y > h) {
            dot.y = dot.y - dotSize * 3
          }
    }
}

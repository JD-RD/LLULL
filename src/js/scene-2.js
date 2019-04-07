/* eslint-disable indent */
/* eslint-disable no-debugger */
/* eslint-disable no-global-assign */
function Scene2 () { //eslint-disable-line
    // x0,x4    =>dot size controlled by each player
    // x1,x5    =>randomness controlled by each player
    // x2,x6    =>alpha controlled by both players
    // x3,x7    =>speed rotation controlled by both players

    // dots
    let dot1
    let dot2
    let dotSize = 152
    let colors = [ 'rgba(255, 199, 26,0.5)',
                    'rgba(237, 28, 36, 0.5)',
                    'rgba(0, 166, 81, 0.5)' ]

    this.setup = function () {
        // dots at 0,0 create
        dot1 = new Dot(-dotSize, 0)
        dot2 = new Dot(dotSize, 0)
    }

    this.draw = function () {
        // bg - x2 adds x6 substracts alpha
        background(255, 199, 26, x2.value() + 5 - x6.value() * 1.25)
        // grid translations - x3 adds x7 substracts rotation
        translate(w / 2, h / 2)
        rotate(radians(frameCount / 10 + x3.value() - x7.value()))
        // dot1
        dot1.create(dotSize + x0.value() * 2, colors[1])
        this.randomness(x1.value() / 10)
        this.checkDistance(dotSize)
        // dot2
        dot2.create(dotSize + x4.value() * 2, colors[2])
        this.randomness(dot1, x5.value() / 10)
        this.checkDistance(dot1, dotSize)
    }

    // reset values
    this.resetScenes = function () {
        // multipliers values to 0
        x0.value(0)
        x1.value(0)
    }

    this.checkDistance = function (dot, dotSize) {
        if (dot.x > dotSize * 3 || dot.x < -dotSize * 3) {
            dot.x = 0 // reset distance
        }
        if (dot.y > dotSize * 3 || dot.y < -dotSize * 3) {
            dot.y = 0 // reset distance
        }
    }

    this.randomness = function (dot, rnd) {
        dot.x += Math.random(-rnd, rnd) // random option
        dot.y += Math.random(-rnd, rnd)
    }
}

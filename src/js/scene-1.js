/* eslint-disable indent */
/* eslint-disable no-debugger */
/* eslint-disable no-global-assign */
function Scene1 () { // eslint-disable-line
    // x0,x4    =>dot size controlled by each player
    // x1,x5    =>randomness controlled by each player
    // x2,x6    =>alpha controlled by both players
    // x3,x7    =>speed rotation controlled by both players

    // dots
    let dot1
    let dot2
    let dotSize = 252
    let colors =
    [ 'rgba(255, 199, 26, 0.5)', // Blue
    'rgba(237, 28, 36, 0.5)', // Red
    'rgba(0, 166, 81, 0.5)' ] // Green

    this.setup = function () {
        // dots at 0, 0 create
        dot1 = new Dot(0, 0)
        dot2 = new Dot(0, 0)
    }

    this.draw = function () {
        frameRate(rate)
        // bg - x2 adds x6 substracts alpha
        background(255, 199, 26, x2.value() + 5 - x6.value() * 1.25)
        // grid translations - x3 adds x7 substracts rotation
        translate(w / 2 + x3.value() - x7.value(), h / 2)
        rotate(radians(frameCount / 10 + x3.value() - x7.value()))
        // dot1
        dot1.create(dotSize + x0.value() * 2, colors[1])
        this.randomness(dot1, x1.value() / 10)
        this.checkDistance(dot1, dotSize / 2)
        // dot2
        dot2.create(dotSize / 2 + x4.value() * 2, colors[2])
        this.randomness(dot2, x5.value() / 10)
        this.checkDistance(dot2, dotSize)
        dot2.checkCollision(dot2, dotSize)
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

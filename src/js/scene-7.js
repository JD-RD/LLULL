/* eslint-disable indent */
/* eslint-disable no-debugger */
/* eslint-disable no-global-assign */
// debugger
function Scene7 () { // eslint-disable-line
    // Rose Patterns =>  r = cos(k*angle );
    // posX = (cos(k*angle) * cos(angle);
    // posY = (sin(k*angle) * sin(angle);
    // k = n / d; number of sides / numbers of sides
    let posX, posY
    let r
    let angle
    let n = 9
    let d = 1
    let k
    let expander = 200
    const COLORS = [ 'rgba(255, 199, 26,0.5)',
                     'rgba(0, 166, 81, 0.5)',
                     'rgba(237, 28, 36, 0.5)' ]

    this.setup = function () {
        x0.value(1)
        // x1.value(80)
        // x2.value(5)
        x3.value(1)
        x4.value(1)
        // x5.value(90)
        // x6.value(50)
        x7.value(1)
    }

    // // 9 sides = 0.69813170079

    this.draw = function () {
        background(255, 199, 26, x3.value() + 15 - x7.value() * 0.15)
        // Rose 1
        push() // eslint-disable-line
            translate(w / 2, h / 2)
            rotate(radians(frameCount / 10) * x0.value() / 10)
            fill(COLORS[2])
            beginShape()
            for (angle = 0; angle < TWO_PI * 10 + x0.value(); angle += 0.1) {
                k = x1.value() / x0.value() // n / d;
                r = (Math.cos(k * angle)) * expander + x2.value() * 1.5
                posX = r * Math.cos(angle)
                posY = r * Math.sin(angle)
                noFill()
                stroke(COLORS[2])
                // strokeWeight(3)
                // point(posX, posY)
                strokeWeight(0.5)
                vertex(posX, posY)
                }
            endShape()
        pop() // eslint-disable-line
         // Rose 2
        push() // eslint-disable-line
            translate(w / 2, h / 2)
            rotate(radians(-frameCount / 10) * x4.value() / 10)
            fill(COLORS[2])
            beginShape()
            for (angle = 0; angle < TWO_PI * 10 + x4.value(); angle += 0.1) {
                k = x5.value() / x4.value() // n / d;
                r = (Math.cos(k * angle)) * expander + x6.value() * 1.5
                posX = r * Math.cos(angle)
                posY = r * Math.sin(angle)
                noFill()
                stroke(COLORS[1])
                // strokeWeight(2)
                // point(posX, posY)
                strokeWeight(0.5)
                vertex(posX, posY)
            }
            endShape()
        pop() // eslint-disable-line
    }
}

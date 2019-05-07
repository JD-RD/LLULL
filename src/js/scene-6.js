/* eslint-disable indent */
/* eslint-disable no-debugger */
/* eslint-disable no-global-assign */
// debugger
function Scene6 () { // eslint-disable-line
    let dotSize = w / 12
    let phase = 0
    let speed = 0.03
    let numCols = 8
    const COLORS = [ 'rgba(255, 199, 26,0.5)',
                     'rgba(0, 166, 81, 0.5)',
                     'rgba(237, 28, 36, 0.5)' ]

    this.setup = function () {
      frameRate(rate)
    }

    this.draw = function () {
        background(255, 199, 26, x3.value() + 25 - x7.value() * 0.25)

        // Loop1
        for (let strand = 0; strand < 9; strand++) {
            dotSize = w / 12 + x0.value()
            let x = map(strand, 0, numCols, dotSize, w - dotSize)

            phase = frameCount * speed + x1.value()
            let y = h / 2 + Math.sin(phase + strand / 8) * 25 + x2.value() / 2
            let sizeOffset = (Math.cos(phase + strand) + 1) * 0.5
            let circleSize = sizeOffset * dotSize

            let dot1 = new Dot(x, y)
            dot1.create(circleSize, COLORS[1])
        }

        // Loop2
        for (let strand = 9; strand > 0; strand--) {
            dotSize = w / 12 + x4.value()

            let x = map(strand, 0, numCols, w - dotSize, dotSize)

            phase = frameCount * speed + x5.value()
            let y = h / 2 + Math.cos(phase + strand / 8) * 25 + x6.value() / 2
            let sizeOffset = (Math.sin(phase + strand) + 1) * 0.5
            let circleSize = sizeOffset * dotSize

            let dot1 = new Dot(x, y)
            dot1.create(circleSize, COLORS[2])
        }
    }
}

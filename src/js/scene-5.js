/* eslint-disable indent */
/* eslint-disable no-debugger */
/* eslint-disable no-global-assign */
// x0,x4    =>dot size for each player
// x1,x5    =>radius for each player
// x2,x6    =>speed for each player
// x3,x7    =>alpha controlled by both players
// debugger
function Scene5 () { // eslint-disable-line
    let dotList1 = []
    let dotList2 = []
    let number = 9
    let dotSize1
    let dotSize2 = w / 32
    let radius1
    let radius2 = 200
    let speed1
    let speed2 = 30
    const COLORS = [ 'rgba(255, 199, 26,0.5)',
                     'rgba(0, 166, 81, 0.5)',
                     'rgba(237, 28, 36, 0.5)']

    this.setup = function () {
      // dotsList1
      for (let i = 0; i < number; i++) {
          dotList1.push(new Dot(w / 2, h / 2, dotSize1))
      }
      // dotsList2
      for (let i = 0; i < number; i++) {
          dotList2.push(new Dot(w / 2, h / 2, dotSize2))
      }
    }

    this.draw = function () {
        frameRate(rate)
        background(255, 199, 26, x3.value() + 20 - x7.value() * 0.25)
        // dotList1
        fill(COLORS[1])
        // inputs
        dotSize1 = w / 32 + x0.value()
        radius1 = 200 + x1.value()
        speed1 = (30 + x2.value()) / 3

        for (let i = 0; i < dotList1.length; i++) {
            // radius = random(20,50);
            dotList1[i].create(dotSize1, COLORS[1])
            dotList1[i].circlePos(i, speed1, radius1)
        }
        // dotList2
        fill(COLORS[2])
        // inputs
        dotSize2 = w / 32 + x4.value()
        radius2 = 200 + x5.value()
        speed2 = (30 + x6.value()) / 3
        for (let i = 0; i < dotList2.length; i++) {
            // radius = random(20,50);
            dotList2[i].create(dotSize2, COLORS[2])
            dotList2[i].circleNeg(i, speed2, radius2)
        }
    }
}

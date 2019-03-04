/* global x0, x1, x2, x3, x4, x5, x6, x7, w, h, Dot, background, translate, rotate, radians, frameCount */
function Scene1 () {
  // x0,x4    =>dot size controlled by each player
  // x1,x5    =>randomness controlled by each player
  // x2,x6    =>alpha controlled by both players
  // x3,x7    =>speed rotation controlled by both players

  // dots
  let dot1, dot2
  let dotSize = 252
  // let s1Yellow = 'rgba(255, 199, 26, 0.5)'
  let s1Red = 'rgba(237, 28, 36, 0.5)'
  let s1Green = 'rgba(0, 166, 81, 0.5)'

  this.setup = function () {
    // Create dots in the center of the scene
    dot1 = new Dot(0, 0)
    dot2 = new Dot(0, 0)
  }

  this.draw = function () {
    // bg - x2 adds x6 substracts alpha
    background(255, 199, 26, x2.value() + 5 - x6.value() * 1.25)
    // grid translations - x3 adds x7 substracts rotation
    translate(w / 2 + x3.value() - x7.value(), h / 2)
    rotate(radians(frameCount / 10 + x3.value() - x7.value()))
    // dot1
    dot1.setProperties(dotSize + x0.value() * 2, s1Red)
    dot1.randomness1(x1.value() / 10)
    dot1.checkDistance(dotSize / 2)
    // dot2
    dot2.setProperties(dotSize / 2 + x4.value() * 2, s1Green)
    dot2.randomness1(x5.value() / 10)
    dot2.checkDistance(dotSize)
    dot2.checkCollision(dot1, dotSize)
  }
}

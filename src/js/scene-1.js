function Scene1 () {
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
    // dots at 0, 0 creation
    dot1 = new Dot(0, 0)
    dot2 = new Dot(0, 0)
  }

  this.draw = function () {
    // bg - x2 adds x6 substracts alpha
    background(255, 199, 26, x2.value() + 5 - x6.value() * 1.25)
    // grid translations - x3 adds x7 substracts rotation
    translate(w / 2 + x3.value() - x7.value(), h / 2)
    rotate(radians(frameCount/10 + x3.value() - x7.value()))
    // dot1
    dot1.creation(dotSize + x0.value() * 2, colors[1])
    dot1.randomness1(x1.value() / 10)
    dot1.checkDistance(dotSize / 2)
    // dot2
    dot2.creation(dotSize / 2 + x4.value() * 2, colors[2])
    dot2.randomness1(x5.value() / 10)
    dot2.checkDistance(dotSize)
    dot2.checkCollision(dot1, dotSize)
  }

  // KEYS CONTROL
  this.keyPressed = function () {
    // console.log(key)
    // Scenes
    if (key === 0) {
      this.sceneManager.showScene(Intro)
      console.log('Intro')
    } else if (key === '1') {
      this.sceneManager.showScene(Scene1)
      console.log('Scene-1')
    } else if (key === '2') {
      this.sceneManager.showScene(Scene2)
      console.log('Scene-2')
    } else if (key === '3') {
      this.sceneManager.showScene(Scene3)
      console.log('Scene-3')
    } else if (key === '4') {
      this.sceneManager.showScene(Scene4)
      console.log('Scene-4')
    } else if (key === '5') {
      this.sceneManager.showScene(Scene5)
      console.log('Scene-5')
    } else if (key === '6') {
      this.sceneManager.showScene(Scene6)
      console.log('Scene-6')
    } else if (key == '7') {
      this.sceneManager.showScene(Scene7)
      console.log('Scene-7')
    } else if (key == '8') {
      this.sceneManager.showScene(Scene8)
      console.log('Scene-8')
    } else if (key === '9') {
      this.sceneManager.showScene(Scene9)
      console.log('Scene-9')
    // FrameRate
    } else if (key === 'ArrowUp') {
      if (rate <= 22) {
        rate = rate + 2
        console.log('Frame Rate +2: ' + rate)
      }
    } else if (key === 'ArrowDown') {
      if (rate >= 4) {
        rate = rate - 2
        console.log('Frame Rate -2: ' + rate)
      }
    // Transitions
    } else if (key === 'q') {
      this.sceneManager.showScene(transition1)
      console.log('transition1')
    } else if (key === 'w') {
      this.sceneManager.showScene(transition2)
      console.log('transition2')
    } else if (key === 'e') {
      this.sceneManager.showScene(transition3)
      console.log('transition3')
    } else if (key === 'r') {
      this.sceneManager.showScene(transition4)
      console.log('transition4')
    } else if (key === 't') {
      this.sceneManager.showScene(transition5)
      console.log('transition5')
    } else if (key === 'y') {
      this.sceneManager.showScene(transition6)
      console.log('transition6')
    } else if (key === 'u') {
      this.sceneManager.showScene(transition7)
      console.log('transition7')
    } else if (key === 'i') {
      this.sceneManager.showScene(transition8)
      console.log('transition8')
    } else if (key === 'o') {
      this.sceneManager.showScene(transition9)
      console.log('transition9')
    }
  }

  // reset values
  this.resetScenes =  function () {
    // multipliers values to 0
    x0.value(0)
    x1.value(0)
  }
}

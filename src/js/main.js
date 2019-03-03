/* global Intro, Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, SceneManager, p5, WebMidi */
// MAIN.JS
console.log('> main: connected')

// canvas vars
let w = window.innerWidth
let h = window.innerHeight
// slider vars (multipliers)
let x0, x1, x2, x3, x4, x5, x6, x7
let sliderHeight = 50
let sliderWidth = 130
// distance between ? and ? (JD)
let d
// Perlin Noise vars
let noiseMax = 0.8
let zoff = 0

// scene manager
var manager = new SceneManager()

// Keypress Handler
this.keyPressed = function () {
  if (this.key === 0) {
    manager.showScene(Intro)
    console.log('Intro')
  } else if (this.key === '1') {
    this.resetScenes()
    manager.showScene(Scene1)
    console.log('Scene-1')
  } else if (this.key === '2') {
    this.resetScenes()
    manager.showScene(Scene2)
    console.log('Scene-2')
  } else if (this.key === '3') {
    this.resetScenes()
    manager.showScene(Scene3)
    console.log('Scene-3')
  } else if (this.key === '4') {
    this.resetScenes()
    manager.showScene(Scene4)
    console.log('Scene-4')
  } else if (this.key === '5') {
    this.resetScenes()
    manager.showScene(Scene5)
    console.log('Scene-5')
  } else if (this.key === '6') {
    this.resetScenes()
    manager.showScene(Scene6)
    console.log('Scene-6')
  } else if (this.key === '7') {
    this.resetScenes()
    manager.showScene(Scene7)
    console.log('Scene-7')
  } else if (this.key === '8') {
    this.resetScenes()
    manager.showScene(Scene8)
    console.log('Scene-8')
  } else if (this.key === '9') {
    this.resetScenes()
    manager.showScene(Scene9)
    console.log('Scene-9')
  }
}

// reset values
function resetScenes () {
  // multipliers values to 0
  x0.value(0)
  x1.value(0)
}

// main p5js setup
function setup () {
  // scene manager
  this.manager.wire()
  this.manager.addScene(Intro)
  this.manager.addScene(Scene1)
  this.manager.addScene(Scene2)
  this.manager.addScene(Scene3)
  this.manager.addScene(Scene4)
  this.manager.addScene(Scene5)
  this.manager.addScene(Scene6)
  this.manager.addScene(Scene7)
  this.manager.addScene(Scene8)
  this.manager.addScene(Scene9)
  // SCENE1 STARTS HERE
  // manager.showScene(Intro)
  manager.showScene(Scene1)
  // canvas
  createCanvas(w, h)
  background(0)
  // sliders
  createSliders()
}

// sliders creation
function createSliders () {
  // sliders -> createSlider(min, max, [default], [stepSize])
  x0 = createSlider(0, 127, 0, 0.1)
  x0.position(sliderWidth, sliderHeight)
  x0.style('width', '80px')
  x1 = createSlider(0, 127, 0, 0.1)
  x1.position(sliderWidth * 2, sliderHeight)
  x1.style('width', '80px')
  x2 = createSlider(0, 127, 0, 0.1)
  x2.position(sliderWidth * 3, sliderHeight)
  x2.style('width', '80px')
  x3 = createSlider(0, 127, 0, 0.1)
  x3.position(sliderWidth * 4, sliderHeight)
  x3.style('width', '80px')
  x4 = createSlider(0, 127, 0, 0.1)
  x4.position(sliderWidth * 1, this.height - sliderHeight)
  x4.style('width', '80px')
  x5 = createSlider(0, 127, 0, 0.1)
  x5.position(sliderWidth * 2, this.height - sliderHeight)
  x5.style('width', '80px')
  x6 = createSlider(0, 127, 0, 0.1)
  x6.position(sliderWidth * 3, this.height - sliderHeight)
  x6.style('width', '80px')
  x7 = createSlider(0, 127, 0, 0.1)
  x7.position(sliderWidth * 4, this.height - sliderHeight)
  x7.style('width', '80px')
}

// dot
class Dot {
  constructor (x, y) {
    this.x = x | 0
    this.y = y | 0
  }

  creation (s, c) {
    noStroke()
    ellipse(this.x, this.y, s, s)
  }

  creationBlubby (color) {
    beginShape()
    noStroke()
    fill(color)
    translate(w / 2, h / 2)

    for (let a = 0; a < TWO_PI; a += 0.02) {
      let xoff = map(cos(a), -1, 1, 0, noiseMax)// offset through my perlinNoise spectrum in x
      let yoff = map(sin(a), -1, 1, 0, noiseMax)// offset through my perlinNoise spectrum in y
      let radius = map(noise(xoff, yoff, zoff), 0, 1, 100, 200)
      let x = radius * cos(a)
      let y = radius * sin(a)
      p5.vertex(x, y)
    }

    p5.endShape(CLOSE)
    zoff += 0.01
  }

  randomness1 (rnd) {
    this.x += random(-rnd, rnd) // random option
    this.y += random(-rnd, rnd)
  }

  randomness3 (rnd) {
    this.y += random(-rnd, rnd) // random option
  }

  checkDistance (dotSize) {
    if (this.x > dotSize * 3 || this.x < -dotSize * 3) {
      this.x = 0 // reset distance
    }
    if (this.y > dotSize * 3 || this.y < -dotSize * 3) {
      this.y = 0 // reset distance
    }
  }

  checkDistance3 (dotSize) {
    if (this.y > dotSize * 3 || this.y < -dotSize * 3) {
      this.y = 0 // reset distance
    }
  }

  checkDistance4 (dotSize) {
    if (this.y < 0) {
      this.y = this.y + dotSize * 3 // we just pullback the dot 3 times it's size
    }
    if (this.y > h) {
      this.y = this.y - dotSize * 3
    }
  }

  checkCollision (dot, dotSize) {
    d = dist(this.x, this.y, dot.x, dot.y)
    if (d + dotSize / 2 >= dotSize) {
      this.x = dot.x
      this.y = dot.y
    }
  }
}

// text
class word {
  constructor (x, y, c, s, t) {
    this.x = x
    this.y = y
    this.c = c
    this.s = s
    this.t = t
  }

  creation () {
    fill(this.c)
    textSize(this.s)
    textFont('Montserrat')
    textAlign('center')
    text(this.t, this.x, this.y)
  }
}
// debugger  // eslint-disable-line
// enable MIDI
WebMidi.enable(function () {
  var twister = WebMidi.getInputByName('Midi Fighter Twister')
  // var TouchOSC = WebMidi.getInputByName('TouchOSC Bridge')
  // var roland = WebMidi.getInputByName('TR-8')
  // var moog = WebMidi.getInputByName('Moog Sub Phatty')
  console.log(WebMidi.inputs)
  // Listen to control change message on Sub Phatty's channel 1
  /*
  moog.addListener('controlchange', 1,
      function (e) {
          console.log("Moog's ControlChange Number: ", e.controller.number);
          switch (e.controller.number) {
              // Filter Cutoff Knob
              case 19:
                  x0 = x0.value(e.value);
                  console.log('x0: ' + x0.value());
                  break
              // LFO Rate Knob
              case 3:
                  x1.value(e.value);
                  console.log('x1: ' + x1.value());
                  break;
              // Mod Wheel
              case 1:
                  x2.value(e.value);
                  console.log('x2: ' + x2.value());
                  break;
              // Resonance Knob
              case 3:
                  x3.value(e.value);
                  console.log('x3: ' + x3.value());
                  break;
              // Amp Env. Attack
              case 28:
                  x4.value(e.value);
                  console.log('x4: ' + x4.value());
                  break;
              // Amp Env. Decay
              case 29:
                  x5.value(e.value);
                  console.log('x5: ' + x5.value());
                  break;
              // Amp Env. Sustain
              case 30:
                  x6.value(e.value);
                  console.log('x6: ' + x6.value());
                  break;
              // Amp Env. Release
              case 31:
                  x7.value(e.value);
                  console.log('x7: ' + x7.value());
                  break;
          }
      }
  );
  */
  // Listen to control change message on TR-8's channel 10
  /*
  roland.addListener('controlchange', 10,
    function (e) {
      console.log('Roland\'s ControlChange Number: ', e.controller.number)
      switch (e.controller.number) {
        // Bass Drum SLider
        case 24:
          x0 = x0.value(e.value)
          console.log('x0: ' + x0.value())
          break
        // Snare Drum Slider
        case 29:
          x1.value(e.value)
          console.log('x1: ' + x1.value())
          break
        // Rim Shot Slider
        case 57:
          x2.value(e.value)
          console.log('x2: ' + x2.value())
          break
        // Closed Hihat Slider
        case 63:
          x3.value(e.value)
          console.log('x3: ' + x3.value())
          break
        // Delay Level Knob
        case 16:
          x4.value(e.value)
          console.log('x4: ' + x4.value())
          break
        // Delay Time Knob
        case 17:
          x5.value(e.value)
          console.log('x5: ' + x5.value())
          break
        // Delay Feedback Knob
        case 18:
          x6.value(e.value)
          console.log('x6: ' + x6.value())
          break
        // Master Volume
        case 7:
          x7.value(e.value)
          console.log('x7: ' + x7.value())
          break
      }
    }
  )
  */
  // Listen to Note On messages on Twister's channel 2
  twister.addListener('noteon', 2,
    function (e) {
      console.log('Twister\'s  Note On: ', e.note.name + e.note.octave)
      switch (e.note.name + e.note.octave) {
        case 'C-1':
          this.resetScenes()
          this.manager.showScene(Scene1)
          console.log('Scene-1')
          break
        case 'C#-1':
          this.resetScenes()
          this.manager.showScene(Scene2)
          console.log('Scene-2')
          break
        case 'D-1':
          this.resetScenes()
          this.manager.showScene(Scene3)
          console.log('Scene-3')
          break
        case 'D#-1':
          this.resetScenes()
          this.manager.showScene(Scene4)
          console.log('Scene-4')
          break
        case 'E-1':
          this.resetScenes()
          this.manager.showScene(Scene5)
          console.log('Scene-5')
          break
        case 'F-1':
          this.resetScenes()
          this.manager.showScene(Scene6)
          console.log('Scene-6')
          break
        case 'F#-1':
          this.resetScenes()
          this.manager.showScene(Scene7)
          console.log('Scene-7')
          break
        case 'G-1':
          this.resetScenes()
          this.manager.showScene(Scene8)
          console.log('Scene-8')
          break
      }
    }
  )

  // Listen to Note Off messages on Twister's channel 2
  twister.addListener('noteoff', 2,
    function (e) {
      console.log('Twister\'s  Note Off: ', e.note.name + e.note.octave)
      switch (e.note.name + e.note.octave) {
      }
    }
  )
  // Listen to control change messages on Twister's channel 2
  twister.addListener('controlchange', 2,
    function (e) {
      console.log('Twister\'s ControlChange Number: ', e.controller.number)
      switch (e.controller.number) {
        // Bank 1
        // First row
        case 0:
          x0 = x0.value(e.value)
          console.log('knob 0: ' + e.value)
          break
        case 1:
          x1.value(e.value)
          console.log('knob 1: ' + e.controller.value)
          break
        case 2:
          x2.value(e.value)
          console.log('knob 2: ' + e.controller.value)
          break
        case 3:
          x3.value(e.value)
          console.log('knob 3: ' + e.controller.value)
          break
        // Second row
        case 4:
          x4.value(e.value)
          console.log('knob 4: ' + e.controller.value)
          break
        case 5:
          x5.value(e.value)
          console.log('knob 5: ' + e.controller.value)
          break
        case 6:
          x6.value(e.value)
          console.log('knob 6: ' + e.controller.value)
          break
        case 7:
          x7.value(e.value)
          console.log('knob 7: ' + e.controller.value)
          break
        // Third row
        case 8:
          x4.value(e.value)
          console.log('knob 8: ' + e.controller.value)
          break
        case 9:
          x5.value(e.value)
          console.log('knob 9: ' + e.controller.value)
          break
        case 10:
          x6.value(e.value)
          console.log('knob 10: ' + e.controller.value)
          break
        case 11:
          x7.value(e.value)
          console.log('knob 11: ' + e.controller.value)
          break
        // Forth row
        case 12:
          console.log('knob 12: ' + e.controller.value)
          break
        case 13:
          console.log('knob 13: ' + e.controller.value)
          break
        case 14:
          console.log('knob 14: ' + e.controller.value)
          break
        case 15:
          console.log('knob 15: ' + e.controller.value)
          break
      }
    }
  )
  console.log('> web-midi: connected')
})

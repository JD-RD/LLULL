/* eslint-disable indent */
/* eslint-disable no-debugger */
// debugger
// MAIN.JS
console.log('> main: connected')
// distance (collisions)
let d
// canvas vars
let h = window.innerHeight
let w = window.innerWidth
// Perlin Noise vars
let noiseMax = 0.8
let zoff = 0
// Sliders properties
let sliderHeight = 50
let sliderWidth = 130
// slider multipliers
let x0, x1, x2, x3, x4, x5, x6, x7
// SceneManager
let manager

// main p5js setup
function setup () { // eslint-disable-line
    manager = new SceneManager() // eslint-disable-line
    // canvas
    createCanvas(w, h)
    background(0)
    // sliders
    createSliders()
    // scene manager
    // manager.addScene(Intro) // eslint-disable-line
    manager.addScene(Scene1) // eslint-disable-line
    manager.addScene(Scene2) // eslint-disable-line
    manager.addScene(Scene3) // eslint-disable-line
    manager.addScene(Scene4) // eslint-disable-line
    manager.addScene(Scene5) // eslint-disable-line
    manager.addScene(Scene6) // eslint-disable-line
    manager.addScene(Scene7) // eslint-disable-line
    manager.addScene(Scene8) // eslint-disable-line
    manager.addScene(Scene9) // eslint-disable-line
    manager.addScene(Transition1) // eslint-disable-line
    manager.addScene(Transition2) // eslint-disable-line
    manager.addScene(Transition3) // eslint-disable-line
    manager.addScene(Transition4) // eslint-disable-line
    manager.addScene(Transition5) // eslint-disable-line
    manager.addScene(Transition6) // eslint-disable-line
    manager.addScene(Transition7) // eslint-disable-line
    manager.addScene(Transition8) // eslint-disable-line
    manager.addScene(Transition9) // eslint-disable-line
    // SCENE1 STARTS HERE
    manager.showScene(Scene1) // eslint-disable-line
}

function draw () { // eslint-disable-line
    manager.draw()
}

function keyPressed() { // eslint-disable-line
    // handle the key press at global level
    switch (key) {
        case '0':
            manager.showScene(Intro) // eslint-disable-line
            break
        case '1':
            manager.showScene(Scene1) // eslint-disable-line
            break
        case '2':
            manager.showScene(Scene2) // eslint-disable-line
            break
        case '3':
            manager.showScene(Scene3) // eslint-disable-line
            break
        case '4':
            manager.showScene(Scene4) // eslint-disable-line
            break
        case '5':
            manager.showScene(Scene5) // eslint-disable-line
            break
        case '6':
            manager.showScene(Scene6) // eslint-disable-line
            break
        case '7':
            manager.showScene(Scene7) // eslint-disable-line
            break
        case '8':
            manager.showScene(Scene8) // eslint-disable-line
            break
        case '9':
            manager.showScene(Scene9) // eslint-disable-line
            break
        case 'q':
            manager.showScene(Transition1) // eslint-disable-line
            break
        case 'w':
            manager.showScene(Transition2) // eslint-disable-line
            break
        case 'e':
            manager.showScene(Transition3) // eslint-disable-line
            break
        case 'r':
            manager.showScene(Transition4) // eslint-disable-line
            break
        case 't':
            manager.showScene(Transition5) // eslint-disable-line
            break
        case 'y':
            manager.showScene(Transition6) // eslint-disable-line
            break
        case 'u':
            manager.showScene(Transition7) // eslint-disable-line
            break
        case 'i':
            manager.showScene(Transition8) // eslint-disable-line
            break
        case 'o':
            manager.showScene(Transition9) // eslint-disable-line
            break
        case 'ArrowUp':
            if (rate <= 22) {
                rate = rate + 2 // eslint-disable-line
            }
            break
        case 'ArrowDown':
            if (rate >= 4) {
                rate = rate - 2 // eslint-disable-line
            }
    }
    // dispatch via the SceneManager
    manager.handleEvent('keyPressed')
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
  x4.position(sliderWidth * 1, height - sliderHeight)
  x4.style('width', '80px')
  x5 = createSlider(0, 127, 0, 0.1)
  x5.position(sliderWidth * 2, height - sliderHeight)
  x5.style('width', '80px')
  x6 = createSlider(0, 127, 0, 0.1)
  x6.position(sliderWidth * 3, height - sliderHeight)
  x6.style('width', '80px')
  x7 = createSlider(0, 127, 0, 0.1)
  x7.position(sliderWidth * 4, height - sliderHeight)
  x7.style('width', '80px')
}

// Dot class
class Dot { // eslint-disable-line
    constructor (x, y) {
        this.x = x | 0
        this.y = y | 0
    }

    // All Scenes
    create (s, c) {
        noStroke()
        fill(c)
        ellipse(this.x, this.y, s, s)
    }

    checkCollision (dot, dotSize) {
        d = dist(this.x, this.y, dot.x, dot.y)
        if (d + dotSize / 2 >= dotSize) {
            this.x = dot.x
            this.y = dot.y
        }
    }

    // Scene-5 amazing how changing + and - sinus effects appear / play with them!
    circlePos (i, speed, radius) {
        this.x = (w / 2 - Math.sin(-frameCount / speed + i) * radius) // + w / 7
        this.y = h / 2 + Math.cos(frameCount / speed + i) * radius
    }

    circleNeg (i, speed, radius) {
        this.x = (w / 2 + Math.sin(frameCount / speed + i) * radius)//  - w/7;
        this.y = h / 2 - Math.cos(frameCount / speed + i) * radius
    }

    // Scene8-9
    creationBlubby (color, thickness = 0) {
        beginShape()
        stroke(color)
        if (thickness === 0) {
            noStroke()
        } else {
            strokeWeight(thickness)
        }
        noFill()
        translate(w / 2, h / 2)
        for (let a = 0; a < TWO_PI; a += 0.02) {
            let xoff = map(Math.cos(a), -1, 1, 0, noiseMax) // offset through my perlinNoise spectrum in x
            let yoff = map(Math.sin(a), -1, 1, 0, noiseMax) // offset through my perlinNoise spectrum in y
            let radius = map(noise(xoff, yoff, zoff), 0, 1, 100, 200)
            let x = radius * Math.cos(a)
            let y = radius * Math.sin(a)
            vertex(x, y)
        }
        endShape(CLOSE)
        zoff += 0.01
    }
}

// text
class Word { // eslint-disable-line
    constructor (x, y, c, s, t) {
        this.x = x
        this.y = y
        this.c = c
        this.s = s
        this.t = t
    }
    create () {
        fill(this.c)
        textSize(this.s)
        textFont('Montserrat')
        textAlign('center')
        text(this.t, this.x, this.y)
    }
}

// Enable MIDI
WebMidi.enable(function () {
  // Retrieve an input by name, id or index
  // let input = WebMidi.getInputByName("Midi Fighter Twister"); // ID: 663841880
  // var input = WebMidi.getInputByName('TouchOSC Bridge'); // TR-8 // Moog Sub Phatty
  // var input = WebMidi.getInputByName('TR-8');
  // var input = WebMidi.getInputByName('Moog Sub Phatty');
  console.log(WebMidi.inputs)
  var roland = WebMidi.getInputByName('TR-8')
  // var moog = WebMidi.getInputByName('Moog Sub Phatty');
  // Listen to control change message on Sub Phatty's channel 1
  /*
  moog.addListener('controlchange', 1,
    function (e) {
      console.log("Moog's ControlChange Number: ", e.controller.number)
      switch (e.controller.number) {
          // Filter Cutoff Knob
          case 19:
            x0 = x0.value(e.value);
            console.log('x0: ' + x0.value())
            break
          // LFO Rate Knob
          case 3:
            x1.value(e.value);
            console.log('x1: ' + x1.value())
            break
          // Mod Wheel
          case 1:
            x2.value(e.value);
            console.log('x2: ' + x2.value())
            break
          // Resonance Knob
          case 3:
            x3.value(e.value);
            console.log('x3: ' + x3.value())
            break
          // Amp Env. Attack
          case 28:
            x4.value(e.value)
            console.log('x4: ' + x4.value())
            break
          // Amp Env. Decay
          case 29:
            x5.value(e.value)
            console.log('x5: ' + x5.value())
            break
          // Amp Env. Sustain
          case 30:
            x6.value(e.value)
            console.log('x6: ' + x6.value())
            break
          // Amp Env. Release
          case 31:
            x7.value(e.value)
            console.log('x7: ' + x7.value())
            break
      }
    }
  );

  // Listen to control change message on TR-8's channel 10
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
  console.log('> web-midi: connected')
  */
})

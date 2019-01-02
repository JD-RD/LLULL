
// canvas pararms
let w = 732
let h = 250
let s = 2
let gds
// dot
let dot
// slider params
let spacing = 9
let dotList = []
let rnd = 3
let alph = 255

// P5.JS Stuff \\
// Matrix creation function
function matrix () {
  background('black')
  dotList = []
  // dotList creation
  for (let x = spacing / 2; x < w; x += spacing) {
    for (let y = spacing / 2; y < h; y += spacing) {
      dotList.push(new Dot(x, y, s))
    }
  }
}
function setup () {
  // sliders \\ createSlider(min, max, [default], [stepSize])
  s_size = createSlider(1, 10, 2)
  s_size.parent('sliders-holder')
  s_rnd = createSlider(0, 10, 0)
   s_rnd.parent('sliders-holder')
  s_alph = createSlider(0, 50, 25)
   s_alph.parent('sliders-holder')
  // buttons
  b_reset = createButton('reset')
   b_reset.parent('sliders-holder')

  // canvas
  var canvas = createCanvas(w, h)
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder')
  matrix()
}
function draw () {
  background(0, alph)

  // sliders control
  s = s_size.value()
  rnd = s_rnd.value()
  alph = s_alph.value()
  
  // button
  b_reset.mousePressed(matrix)

  // dotList mapping actions
  dotList.map((dot) => {
    dot.on(s)
    dot.randomness(rnd)
  })
}
// Dot object
class Dot {
  // class attributes
  constructor (x, y, s) {
    this.x = x | 0
    this.y = y | 0
    this.size = s | 2
  }
  // class methods
  on (s) { // here we pass the size parameter to affect this method
    noStroke()
    fill(color('white'))

    ellipse(this.x, this.y, s, s)
  }
  randomness (rnd) {
    this.x += random(-rnd, rnd)
    this.y += random(-rnd, rnd)
  }
}

// Tone.JS & WebMIDI.JS Stuff \\
console.clear()

class MIDIAccess {
  constructor (args = {}) {
    this.onDeviceInput = args.onDeviceInput || console.log
    }

  start () {
    return new Promise((resolve, reject) => {
      this._requestAccess().then(access => {
        this.initialize(access)
            resolve()
            }).catch(() => reject('Something went wrong.'))
        })
    }

  initialize (access) {
    const devices = access.inputs.values()
        for (let device of devices) this.initializeDevice(device)
    }

  initializeDevice (device) {
    device.onmidimessage = this.onMessage.bind(this)
    }

  onMessage (message) {
    let [_, input, value] = message.data
        this.onDeviceInput({ input, value })
    }

  _requestAccess () {
    return new Promise((resolve, reject) => {
      if (navigator.requestMIDIAccess)
        {navigator.requestMIDIAccess()
          .then(resolve)
          .catch(reject);}
      else reject()
    })
  }
}

class Instrument {
  constructor () {
    this.synth = new Tone.PolySynth(3, Tone.FMSynth)

    this.filter = new Tone.Filter()
    this.volume = new Tone.Gain()

    this.synth.connect(this.filter)
    this.filter.connect(this.volume)
    this.volume.toMaster()
    
    this.filter.frequency.value = 200 // 200 - 15000
    this.volume.gain.value = 0.8 // 0-0.8
  }

  toggleSound (value) {
    let method = value === 127 ? 'triggerAttack' : 'releaseAll'
    this.synth[method](['C4', 'E4', 'G4'])
  }

  handleVolume (value) { // 0-127
    let val = value / 127 * 0.8
    this.volume.gain.value = val
  }

  handleFilter (value) { // 0-127
    let val = value / 127 * 14800 + 200
    this.filter.frequency.value = val
  }
}

const inst = new Instrument()
const midi = new MIDIAccess({ onDeviceInput })
midi.start().then(() => {
  console.log('MIDI STARTED!')
}).catch(console.error)

function onDeviceInput ({ input, value }) {
  if (input === 85) inst.toggleSound(value)
  else if (input === 12) inst.handleVolume(value)
  else if (input === 13) inst.handleFilter(value)
  else console.log('MIDI Input: ', input, value)
}

// Slider s for Size'
// Slider rnd for Random'
// Slider alph for 'Alpha'
// Reset buttons to restart default params

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
  // b_reset = createButton('reset');
  // b_reset.parent('sliders-holder');

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
  // b_reset.mousePressed(matrix);

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

// MIDI Controller management
WebMidi.enable(function () {
  // Viewing available inputs
  // console.log(WebMidi.inputs);

  // Retrieve an input by name, id or index
  var input = WebMidi.getInputByName('TouchOSC Bridge')
  // var input = WebMidi.getInputByName("Vestax PC-CONTROLLER");
  // OR...
  // var input = WebMidi.getInputById("1809568182");
  // var input = WebMidi.inputs[0];

  // Listen for a 'note on' message on channel 1
  input.addListener('noteon', 1,
    function (e) {
      console.log('Note On: (' + e.note.name + e.note.octave + ').')
      inst.toggleSound('on', e.note.name + String(e.note.octave))
    }
  )

  // Listen for a 'note off' message on channel 1
  input.addListener('noteoff', 1,
    function (e) {
      console.log('Note Off: (' + e.note.name + e.note.octave + ').')
      inst.toggleSound('off', e.note.name + String(e.note.octave))
    }
  )

  // Listen to control change message on channel 1
  input.addListener('controlchange', 1,
    function (e) {
      console.log('MIDI Control: ', e)
      switch (e.controller.number) {
        case 1:
          s_size.value(e.value / 12.7) // Slider max is 10, knob max is 127 
          break                        // so each steps should be 12.7
        case 2:
          s_rnd.value(e.value / 12.7)
          break
        case 3:
          s_alph.value(e.value / 2.54)
          break
        case 4:
          break
      }
    }
  )
  /*
    // Remove all listeners on the input
    input.removeListener();
  */
})

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

  toggleSound (status, note) {
    if (status === 'on') {
      this.playChordFromRootNote(note)
    } else {
      this.synth.releaseAll()
    }
  }

  playChordFromRootNote (note) {
    switch (note) {
      case 'C4':
        this.synth.triggerAttack(['C4', 'E4', 'G4'])
        break

      case 'D4':
        this.synth.triggerAttack(['D4', 'F4', 'A4'])
        break

      case 'E4':
        this.synth.triggerAttack(['E4', 'G4', 'B4'])
        break

      case 'F4':
        this.synth.triggerAttack(['F4', 'A4', 'C5'])
        break

      case 'G4':
        this.synth.triggerAttack(['G4', 'B4', 'D5'])
        break

      case 'A4':
        this.synth.triggerAttack(['A4', 'C5', 'E5'])
        break

      case 'B4':
        this.synth.triggerAttack(['B4', 'D5', 'F5'])
        break

      case 'C5':
        this.synth.triggerAttack(['C5', 'E5', 'G5'])
        break
    }
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

/*
  function onDeviceInput({ input, value }) {
    if (input === 85) inst.toggleSound(value);
    else if (input === 12) inst.handleVolume(value);
    else if (input === 13) inst.handleFilter(value);
    else console.log('MIDI Input: ', input, value);
  }
*/

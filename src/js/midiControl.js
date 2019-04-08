// Enable MIDI
WebMidi.enable(function () {
  // Retrieve an input by name, id or index
  // let input = WebMidi.getInputByName("Midi Fighter Twister") // ID: 663841880
  // var input = WebMidi.getInputByName('TouchOSC Bridge') // TR-8 // Moog Sub Phatty
  // var input = WebMidi.getInputByName('TR-8')
  // var input = WebMidi.getInputByName('Moog Sub Phatty')
  console.log(WebMidi.inputs)
  let twister = WebMidi.getInputByName('Midi Fighter Twister')
  // Listen to control change message on Twister's channel 4
  twister.addListener('controlchange', 2,
    function (e) {
      console.log('Twister\'s ControlChange Number: ', e.controller.number)
      switch (e.controller.number) {
        case 0:
          x0 = x0.value(e.value)
          // console.log('x0: ' + x0.value())
          break
        case 1:
          x1.value(e.value)
          // console.log('x1: ' + x1.value())
          break
        case 2:
          x2.value(e.value)
          // console.log('x2: ' + x2.value())
          break
        case 3:
          x3.value(e.value)
          // console.log('x3: ' + x3.value())
          break
        case 4:
          x4.value(e.value)
          // console.log('x4: ' + x4.value())
          break
        case 5:
          x5.value(e.value)
          // console.log('x5: ' + x5.value())
          break
        case 6:
          x6.value(e.value)
          // console.log('x6: ' + x6.value())
          break
        // Master Volume
        case 7:
          x7.value(e.value)
          // console.log('x7: ' + x7.value())
          break
      }
    }
  )

  // var roland = WebMidi.getInputByName('TR-8')
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

// MAIN.JS
console.log('> main: connected');
// colors
const COLORS = ['rgb(255, 199, 26)','rgb(237, 28, 36)', 'rgb(0, 166, 81)' ];
// canvas vars
let w = window.innerWidth, h = window.innerHeight;
// slider vars ( multipliers ) 
let x0, x1, x2, x3, x4, x5, x6, x7;
let sliderHeight = 50, sliderWidth = 130;

// main p5js setup
function setup() {
     // scene manager
    var manager = new SceneManager();
    manager.wire();
    manager.addScene ( Intro );
    manager.addScene ( Scene1 );
    manager.addScene ( Scene2 );
    manager.addScene ( Scene3 );
    manager.addScene ( Scene4 );
    manager.addScene ( Scene5 );
    manager.addScene ( Scene6 );
    manager.addScene ( Scene7 );
    manager.addScene ( Scene8 );
    manager.addScene ( Scene9 );
    // SCENE1 STARTS HERE
    manager.showScene( Intro );   
    // canvas
    createCanvas(w, h);
    background(0);
    // sliders
    createSliders();
}

// sliders creation
function createSliders() {
    // sliders -> createSlider(min, max, [default], [stepSize])
    x0 = createSlider(0, 127, 0, 0.1);
    x0.position(sliderWidth, sliderHeight);
    x0.style('width', '80px');
    x1 = createSlider(0, 127, 0, 0.1);
    x1.position(sliderWidth * 2, sliderHeight);
    x1.style('width', '80px');
    x2 = createSlider(0, 127, 0, 0.1);
    x2.position(sliderWidth * 3, sliderHeight);
    x2.style('width', '80px');
    x3 = createSlider(0, 127, 0, 0.1);
    x3.position(sliderWidth * 4, sliderHeight);
    x3.style('width', '80px');
    x4 = createSlider(0, 127, 0, 0.1);
    x4.position(sliderWidth * 5, sliderHeight);
    x4.style('width', '80px');
    x5 = createSlider(0, 127, 0, 0.1);
    x5.position(sliderWidth * 6, sliderHeight);
    x5.style('width', '80px');
    x6 = createSlider(0, 127, 0, 0.1);
    x6.position(sliderWidth * 7, sliderHeight);
    x6.style('width', '80px');
    x7 = createSlider(0, 127, 0, 0.1);
    x7.position(sliderWidth * 8, sliderHeight);
    x7.style('width', '80px');
}

// dot
class Dot {
    constructor(x, y) {
        this.x = x | 0;
        this.y = y | 0;
    }
    creation(s, c) {
        noStroke();
        fill(c);
        ellipse(this.x, this.y, s, s);
    }
    randomness(rnd) {
        this.x += random(-rnd, rnd);
        this.y += random(-rnd, rnd);
    }
}

// text
class word {
    constructor(x, y, c, s, t) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.s = s;
        this.t = t;
    }
    creation() {
        fill(this.c);
        textSize(this.s);
        textFont("Montserrat");
        textAlign('center');
        text(this.t, this.x, this.y);
    }
}
// enable MIDI
WebMidi.enable(function () {

    // Retrieve an input by name, id or index
    // let input = WebMidi.getInputByName("Midi Fighter Twister"); // ID: 663841880
    // var input = WebMidi.getInputByName('TouchOSC Bridge'); // TR-8 // Moog Sub Phatty
    // var input = WebMidi.getInputByName('TR-8');
    // var input = WebMidi.getInputByName('Moog Sub Phatty');
    console.log(WebMidi.inputs);
    var roland = WebMidi.getInputByName('TR-8');
    var moog = WebMidi.getInputByName('Moog Sub Phatty');

    // Listen to control change message on Sub Phatty's channel 1
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

    // Listen to control change message on TR-8's channel 10
    roland.addListener('controlchange', 10,
        function (e) {
            console.log('Roland\'s ControlChange Number: ', e.controller.number);
            switch (e.controller.number) {
                // Bass Drum SLider
                case 24:
                    x0 = x0.value(e.value);
                    console.log('x0: ' + x0.value());
                    break;
                // Snare Drum Slider
                case 29:
                    x1.value(e.value);
                    console.log('x1: ' + x1.value());
                    break;
                // Rim Shot Slider
                case 57:
                    x2.value(e.value);
                    console.log('x2: ' + x2.value());
                    break;
                // Closed Hihat Slider
                case 63:
                    x3.value(e.value);
                    console.log('x3: ' + x3.value());
                    break;
                // Delay Level Knob
                case 16:
                    x4.value(e.value);
                    console.log('x4: ' + x4.value());
                    break;
                // Delay Time Knob
                case 17:
                    x5.value(e.value);
                    console.log('x5: ' + x5.value());
                    break;
                // Delay Feedback Knob
                case 18:
                    x6.value(e.value);
                    console.log('x6: ' + x6.value());
                    break;
                // Master Volume
                case 7:
                    x7.value(e.value);
                    console.log('x7: ' + x7.value());
                    break;
            }
        }
    );
    console.log('> web-midi: connected');
}); 
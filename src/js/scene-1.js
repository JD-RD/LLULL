function Scene1() {
    // Parameters in Scene 1:
    // x0=>dot size, x1=>randomness

    let colors = ['rgba(255, 199, 26,0.5)','rgb(237, 28, 36)', 'rgb(0, 166, 81)' ];
    // dots
    let dot1;
    // oscillators
    let osc1;
    // dot 
    let s;
    let dotSize = 12;

    this.setup = function() {
        //dot
        dot1 = new Dot(w/2, h/2);
        // oscillators
        osc1= new p5.SawOsc();
        osc1.freq(140);
        osc1.amp(.05);
        osc1.start();
    }

    this.draw = function() {
        background(color(colors[0]));
        // dot creation
        // dot1.creation(10, 'tomato', x0.value() * 4);
        dot1.creation(dotSize+x0.value(), 'tomato');
        dot1.randomness(x1.value()/4);
        // oscillators
        osc1.freq(x0.value());
    }

    // KEYS CONTROL
    this.keyPressed = function() {
        if(key == 0) {
            this.sceneManager.showScene( Intro );
            console.log('Intro');
        }else if (key == '1') {
            this.resetScenes();
            this.sceneManager.showScene( Scene1 );
            console.log('Scene-1');
        } else if (key == '2') {
            this.resetScenes();
            this.sceneManager.showScene( Scene2 );
            console.log('Scene-2');
        } else if (key == '3') {
            this.sceneManager.showScene( Scene3 );
            console.log('Scene-3')
        } else if (key == '4') {
            this.sceneManager.showScene( Scene4 );
            console.log('Scene-4')
        } else if (key == '5') {
            this.sceneManager.showScene( Scene5 );
            console.log('Scene-5')
        } else if (key == '6') {
            this.sceneManager.showScene( Scene6 );
            console.log('Scene-6')
        } else if (key == '7') {
            this.sceneManager.showScene( Scene7 );
            console.log('Scene-7')
        } else if (key == '8') {
            this.sceneManager.showScene( Scene8 );
            console.log('Scene-8')
        } else if (key == '9') {
            this.sceneManager.showScene( Scene9 );
            console.log('Scene-9')
        }
    }

    // reset values
    this.resetScenes =  function() {
        // multipliers values to 0
        x0.value(0);
        x1.value(0);
        // oscillators values to 0
        osc1.start(0);
        // osc2.start(0);
    }
}

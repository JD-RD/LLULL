function Scene2() {

    // dots
    let dot2;
    // oscillators
    let osc2;

    this.setup = function() {
        //dot
        dot2 = new Dot(w/2, h/2);
        // oscillators
        // osc2= new p5.SinOsc(120);
        // osc2.freq(120);
        // osc2.amp(.5);
        // osc2.start();
    }

    this.draw = function() {
        background('tomato')
        // dot creation
        dot2.creation(10, 'red', x1.value());
        dot2.randomness(x2.value()/6);
        // oscillators
        // osc2.freq(x1.value());
    }

    // keys | 0: Intro, 1: Scene-1, 2: Scene-2, ..., 9: Scene-9
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
            console.log('Scene-2')
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
        // osc1.start(0);
        osc2.start(0);
    }
}

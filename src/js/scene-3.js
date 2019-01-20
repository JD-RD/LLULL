function Scene3() {

    // dots
    let dot3, dot4;
    // oscillators
    let osc3, osc4;

    this.setup = function() {
        // dots
        dot3 = new Dot(w/2, h/2);
        dot4 =  new Dot(w/2, h/2);
        // oscillators
        osc3 = new p5.SawOsc(80);
        osc3.amp(.5);
        // osc3.start();
        osc4 = new p5.SawOsc(80);
        osc4.amp(.5);
        // osc4.start();
    }

    this.draw = function() {
        background('red')
        fill('yellow')
        // dot3
    }
    
    // KEYS CONTROL
    this.keyPressed = function() {
        if(key == 0) {
            this.sceneManager.showScene( Intro );
            console.log('Intro');
        }else if (key == '1') {
            this.sceneManager.showScene( Scene1 );
            console.log('Scene-1');
        } else if (key == '2') {
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

    // COLLISION + CHANGE COLORS

    
}

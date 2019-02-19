function Scene2() {
    // x0,x4    =>dot size
    // x1,x5    =>randomness
    // x2,x6    =>alpha
    // x3,x7    =>speed rotation

    // dots
    let dot1, dot2, test
    let dotSize = 152;
    let colors = [  'rgba(255, 199, 26,0.5)',
                    'rgba(237, 28, 36, 0.5)', 
                    'rgba(0, 166, 81, 0.5)' ]
   
    this.setup = function() {
        //dots at 0,0 creation
        dot1 = new Dot(-dotSize, 0)
        dot2 = new Dot(dotSize, 0)
    }

    this.draw = function() {
        test = 0.5
        // bg - x2 adds x6 substracts alpha
        background(255,199, 26, x2.value()+ 5 - x6.value() * 1.25)
        // grid translations - x3 adds x7 substracts rotation
        translate(w/2, h/2)
        rotate(radians(frameCount/10 + x3.value()- x7.value()))
        // dot1
        dot1.creation(dotSize + x0.value()*2, colors[1])
        dot1.randomness1(x1.value()/10)
        dot1.checkDistance(dotSize)
        // dot2
        dot2.creation(dotSize + x4.value()*2, colors[2])
        dot2.randomness1(x5.value()/10)
        dot2.checkDistance(dotSize)
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
    }
}

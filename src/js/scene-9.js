    // x0,x4    =>dot size for each player
    // x1,x5    =>randomness for each player
    // x2,x6    =>alpha controlled by both players
    // x3,x7    =>amount Perlin Noise / WIP

    function Scene9() {
        let dot1, dot2
        let colors = [  'rgba(255, 199, 26,0.5)',
                        'rgba(237, 28, 36, 0.5)', 
                        'rgba(0, 166, 81, 0.75)' ]
    
    
        this.setup = function() {
            dot1 =  new Dot(w/2 , h/2)
            dot2 = new Dot(w/2, h/2)
        }
    
        this.draw = function() {
        background(255,199, 26, x3.value()+ 25 - x7.value() * 0.25)
            // dot 1
            push()
                noiseMax = x2.value()/200
                thickness = x1.value()/10
                dot1.creationBlubby(colors[1])
            pop()
            // dot2
            push()
                noiseMax = x6.value()/100
                thickness = x5.value()/10
                dot2.creationBlubby(colors[2])
            pop()
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
    }

    
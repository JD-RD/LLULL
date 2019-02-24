function Scene4() {
    // x0,x4    =>dot size for each player
    // x1,x5    =>randomness for each player
    // x2,x6    =>alpha controlled by both players
    // x3,x7    =>amount of sin() controlled by both players

    // dots
    let dot1, dot2
    let dotSize = w/32;
    let colors = [  'rgba(255, 199, 26,0.5)',
                    'rgba(237, 28, 36, 0.5)', 
                    'rgba(0, 166, 81, 0.5)' ]

    let dotList1 = [], dotList2 = []
    let spacing1 = w/10, spacing2 = w/9.5

   
    this.setup = function() {
        // dotList1 creation
        for(let x = spacing1; x < w; x += spacing1) {
            for( let y = spacing1; y < h; y += spacing1) {
                dotList1.push(new Dot(x - dotSize/2, y - dotSize/2))
            }
        }
        console.log('dotList1:', dotList1)
        // dotList2 creation
        for(let x = spacing2; x < w; x += spacing2) {
            for(let y = spacing1; y < h; y += spacing1) {
                dotList2.push(new Dot(x - dotSize/2, y - dotSize/2))
            }
        }
    }

    this.draw = function() {
        // bg - x2 adds x6 substracts alpha
        background(255,199, 26, x2.value()+ 5 - x6.value() * 1.25)

        // grid translations - x3 adds x7 substracts rotation
        // translate(0, 0)
        // play with sin() to move the y grid position
        translate(0, 10 + sin(frameCount/10) * x3.value()- x7.value())

        // dot1
        for( let i=0; i< dotList1.length; i++){
            dotList1[i].creation(dotSize + x0.value()*2, colors[1])
            dotList1[i].randomness3(x1.value()/10)
            noiseMax = x3.value()/100
            // dotList1[i].creationBlubby(colors[1])
            // dotList1[i].checkDistance3(dotSize)
          }

        // dot2
        for( let i=0; i< dotList2.length; i++){
            dotList2[i].creation(dotSize + x4.value()*2, colors[2])
            dotList2[i].randomness3(x5.value()/10)
            noiseMax = x3.value()/100
            // dotList2[i].creationBlubby(colors[2])
            // dotList2[i].checkDistance3(dotSize)
          }
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

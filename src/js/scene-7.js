function Scene7() {

    // Rose Patterns =>  r = cos(k*angle );
    // posX = (cos(k*angle) * cos(angle);
    // posY = (sin(k*angle) * sin(angle);
    // k = n / d; number of sides / numbers of sides
    let posX, posY
    let r
    let angle
    let n = 9
    let d = 1
    let k
    let expander = 200
    const COLORS = ['rgba(255, 199, 26,0.5)',
            'rgba(0, 166, 81, 0.5)',
            'rgba(237, 28, 36, 0.5)']

    this.setup = function() {
        x0.value(1)
        // x1.value(80)
        // x2.value(5)
        x3.value(1)
        x4.value(1)
        // x5.value(90)
        // x6.value(50)
        x7.value(1)
    }

    // // 9 sides = 0.69813170079

    this.draw = function() {
        background(255,199, 26, x3.value()+ 25 - x7.value() * 0.25)
        // Rose 1
        push()
            translate(w/2 + w / 12, h/2);
            rotate(radians(frameCount/10) *  x3.value()/10)
            fill(COLORS[2])
            for( angle = 0 ; angle < TWO_PI * 10 + x0.value(); angle += 0.1) {
                k = x1.value() / x0.value() // n / d;
                r = (cos( k * angle )) * expander + x2.value() * 3
                posX = r * cos(angle)
                posY = r * sin(angle)
                noFill()
                stroke(COLORS[2])
                strokeWeight(3)
                point(posX, posY)
                }
        pop()
         // Rose 2
        push()
            translate(w/2 -  w/12, h/2);
            rotate(radians(-frameCount/10) * x7.value()/10)
            fill(COLORS[2])
            for( angle = 0 ; angle < TWO_PI * 10 + x4.value(); angle += 0.1) {
                k = x5.value() / x4.value() // n / d;
                r = (cos( k * angle )) * expander + x6.value() * 3
                posX = r * cos(angle)
                posY = r * sin(angle)
                noFill()
                stroke(COLORS[1])
                strokeWeight(3)
                point(posX, posY)
            }
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

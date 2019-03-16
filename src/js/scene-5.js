    // x0,x4    =>dot size for each player
    // x1,x5    =>radius for each player
    // x2,x6    =>speed for each player
    // x3,x7    =>alpha controlled by both players

function Scene5() {
    dotList1 = [], dotList2=[]
    let number = 9
    let dotSize1, dotSize2 = w/32
    let radius1, radius2 = 200
    let speed1, speed2 = 30
    const COLORS = [  'rgba(255, 199, 26,0.5)',
                    'rgba(0, 166, 81, 0.5)', 
                    'rgba(237, 28, 36, 0.5)']

    this.setup = function() {
    // dotsList1
    for(let i=0; i<number; i++){
        dotList1.push( new Dot(w/2, h / 2, dotSize1));
        }
    // dotsList2
    for(let i=0; i<number; i++){
        dotList2.push( new Dot(w/2, h / 2, dotSize2));
        }
    }

    this.draw = function() {
        background(255,199, 26, x3.value()+ 50 - x7.value() * 0.25)
        // dotList1
        fill(COLORS[1]);
        // inputs
        dotSize1 = w/32 + x0.value()
        radius1 = 200 +x1.value()
        speed1 = (30 + x2.value()) / 3

	    for(let i=0; i<dotList1.length; i++  ){
        // radius = random(20,50);
            dotList1[i].creation(dotSize1, COLORS[1]);
  	        dotList1[i].circlePos(i, speed1, radius1);
        }
        // dotList2
        fill(COLORS[2]);
        // inputs
        dotSize2 = w/32 + x4.value()
        radius2 = 200 + x5.value()
        speed2 = (30 + x6.value()) / 3
	    for(let i=0; i<dotList2.length; i++  ){
        // radius = random(20,50);
            dotList2[i].creation(dotSize2, COLORS[2]);
  	        dotList2[i].circleNeg(i, speed2, radius2);
        }
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



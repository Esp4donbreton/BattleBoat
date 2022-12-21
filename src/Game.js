/**
* Author
 @Inateno / http://inateno.com / http://dreamirl.com

* ContributorsList
 @Inateno

***
simple Game declaration
**/
import DE from '@dreamirl/dreamengine';
var Game = {};

Game.render = null;
Game.scene = null;
Game.boat_1 = null;
Game.obj = null;

// init
Game.init = function() {
  console.log('game init');
  // DE.config.DEBUG = 1;
  // DE.config.DEBUG_LEVEL = 2;




  //-----------------------------Generation de la scene-----------------------------------
  // Create the renderer before assets start loading
  Game.render = new DE.Render('render', {
    resizeMode: 'stretch-ratio',
    width: 1920,
    height: 1080,
    backgroundColor: '0x00004F',
    roundPixels: false,
    powerPreferences: 'high-performance',
  });
  Game.render.init();

  DE.start();
};

Game.onload = function() {
  console.log('game start');

  // scene
  Game.scene = new DE.Scene();
//------------------------------------------------------------------------------------------




  //------------------------------Generation de la camera (pour voir la scene)------------------------------
  Game.camera = new DE.Camera(0, 0, 1920, 1080, {
    scene: Game.scene,
    backgroundImage: 'bg',
  });
  Game.camera.interactive = true;
  Game.camera.pointermove = function(pos, e) {
    Game.targetPointer.moveTo(pos, 100);
  };
  Game.camera.pointerdown = function(pos, e) {
    Game.boat_1.gameObjects[0].moveTo(Game.targetPointer, 500);
    // Game.targetPointer.shake( 10, 10, 200 );
    Game.targetPointer.renderer.setBrightness([1, 0]);
  };
  Game.camera.pointerup = function(pos, e) {
    console.log('up');
    Game.targetPointer.shake(10, 10, 200);
  };
  Game.render.add(Game.camera);
  // Game.render.add( Game.scene );

  Game.targetPointer = new DE.GameObject({
    zindex: 500,
    renderer: new DE.SpriteRenderer({ spriteName: 'target', scale: 0.3 }),
  });
   //-----------------------------------------------------------------------------------




  Game.boat_1;
  Game.boat_2;

  //---------------Generation du bateau du joueur 1--------------------------
  Game.boat_1 = new DE.GameObject({
    x: 1600,
    y: 240,
    scale: 0.4,
    renderers: [
      new DE.SpriteRenderer({ spriteName: 'boat_1' }),
    ],

    axes: { x: 0, y: 0 },
    interactive: true,
    checkInputs: function() {
      this.translate({ x: this.axes.x * 2, y: this.axes.y * 2 });
    },
    automatisms: [['checkInputs', 'checkInputs']],
  });
  //----------------------------------------------------------------------------
  
  //Game.boat_1 = new DE.FixedBoxCollider(150,100);


    //---------------Generation du bateau du joueur 2--------------------------
    Game.boat_2 = new DE.GameObject({
      x: 240,
      y: 800,
      scale: 0.4,
      renderers: [
        new DE.SpriteRenderer({ spriteName: 'boat_2' }),
      ],
      
      axes: { x: 0, y: 0 },
      interactive: true,
      checkInputs: function() {
        this.translate({ x: this.axes.x * 2, y: this.axes.y * 2 });
     },
     automatisms: [['checkInputs', 'checkInputs']],
    });
    //----------------------------------------------------------------------------
    




  //--------------------------fonction "fire"--------------------------
  Game.boat_1.fire = function() {
    DE.Save.save('fire', DE.Save.get('fire') + 1 || 1);
    DE.Audio.fx.play('Boom');
    var bullet = new DE.GameObject({
      x: this.x,
      y: this.y,
      rotation: this.rotation+1.5,
      renderer: new DE.SpriteRenderer({ spriteName: 'player-bullet' }),
      scale: 0.1,
    });
    bullet.addAutomatism('translateY', 'translateY', { value1: -12 });
    // bullet.moveTo( { z: 10 }, 2000 );
    // bullet.addAutomatism( "rotate", "rotate", { value1: Math.random() * 0.1 } );
    // bullet.addAutomatism( "inverseAutomatism", "inverseAutomatism", { value1: "rotate", interval: 100 } );
    bullet.addAutomatism('askToKill', 'askToKill', {
      interval: 2000,
      persistent: false,
    });
    /*bullet.addAutomatism('lookAt', 'lookAt', {value1: boat_2});
    bullet.removeAutomatism('lookAt');*/
    
    console.log('fired in total ' + DE.Save.get('fire') + ' times');
    Game.scene.add(bullet);
  };
  //-------------------------------------------------------------------------------


  //----------------------------fonction rotate left------------------------------
  Game.boat_1.rotate_left = function(){
    Game.boat_1.rotation -= 0.1;
  }
//-------------------------------------------------------------------------------------------
  //----------------------------fonction rotate right------------------------------
  Game.boat_1.rotate_right = function(){
    Game.boat_1.rotation += 0.1;
  }
//-------------------------------------------------------------------------------------------








  //--------------------------fonction "fire"--------------------------
  Game.boat_2.fire = function() {
    DE.Save.save('fire', DE.Save.get('fire') + 1 || 1);
    DE.Audio.fx.play('Boom');
    var bullet = new DE.GameObject({
      x: this.x,
      y: this.y,
      rotation: this.rotation+1.5,
      renderer: new DE.SpriteRenderer({ spriteName: 'player-bullet' }),
      scale: 0.1,
    });
    bullet.addAutomatism('translateY', 'translateY', { value1: -12 });
    // bullet.moveTo( { z: 10 }, 2000 );
    // bullet.addAutomatism( "rotate", "rotate", { value1: Math.random() * 0.1 } );
    // bullet.addAutomatism( "inverseAutomatism", "inverseAutomatism", { value1: "rotate", interval: 100 } );
    bullet.addAutomatism('askToKill', 'askToKill', {
      interval: 2000,
      persistent: false,
    });
    /*bullet.addAutomatism('lookAt', 'lookAt', {value1: boat_2});
    bullet.removeAutomatism('lookAt');*/
    
    console.log('fired in total ' + DE.Save.get('fire') + ' times');
    Game.scene.add(bullet);
  };
  //-------------------------------------------------------------------------------
  //----------------------------fonction rotate left------------------------------
  Game.boat_2.rotate_left = function(){
    Game.boat_2.rotation -= 0.1;
  }
  //-------------------------------------------------------------------------------------------
  //----------------------------fonction rotate right------------------------------
  Game.boat_2.rotate_right = function(){
    Game.boat_2.rotation += 0.1;
  }
  //-------------------------------------------------------------------------------------------

/*

Game.bullet.explode = function(){
  askToKill();
}

Game.bullet.addAutomatism('explode', 'explode', {interval: 1})

*/




  Game.heart1 = new DE.GameObject({
    x: 1600,
    y: 100,
    zindex: 10,
    renderer: new DE.TextureRenderer({ spriteName: 'heart' }),
  });
  Game.heart2 = new DE.GameObject({
    x: 1700,
    y: 100,
    zindex: 10,
    renderer: new DE.TextureRenderer({ spriteName: 'heart' }),
  });
  Game.heart3 = new DE.GameObject({
    x: 1800,
    y: 100,
    zindex: 10,
    renderer: new DE.TextureRenderer({
      spriteName: 'heart',
      width: 50,
      height: 20,
    }),
  });


  Game.heart12 = new DE.GameObject({
    x: 100,
    y: 100,
    zindex: 10,
    renderer: new DE.TextureRenderer({ spriteName: 'heart' }),
  });
  Game.heart22 = new DE.GameObject({
    x: 200,
    y: 100,
    zindex: 10,
    renderer: new DE.TextureRenderer({ spriteName: 'heart' }),
  });
  Game.heart32 = new DE.GameObject({
    x: 300,
    y: 100,
    zindex: 10,
    renderer: new DE.TextureRenderer({ spriteName: 'heart' }),
  });
  

  Game.scene.add(
    Game.boat_1,
    Game.boat_2,
    Game.heart1,
    Game.heart2,
    Game.heart3,
    Game.heart12,
    Game.heart22,
    Game.heart32,
  );

  Game.boat_1.rotation = -90;
  Game.boat_2.rotation = 45;




  //-----------------------------input j1--------------------------
  DE.Inputs.on('keyDown', 'left', function() {
    Game.boat_1.addAutomatism('rotate_left', 'rotate_left', { interval: 1 });
  });
  DE.Inputs.on('keyUp', 'left', function(){
    Game.boat_1.removeAutomatism('rotate_left');
  })

  DE.Inputs.on('keyDown', 'right', function() {
    Game.boat_1.addAutomatism('rotate_right', 'rotate_right', { interval: 1 });
  });
  DE.Inputs.on('keyUp', 'right', function(){
    Game.boat_1.removeAutomatism('rotate_right');
  })

  DE.Inputs.on('keyDown', 'up', function() {
    Game.boat_1.axes.y = -5;
  });


  DE.Inputs.on('keyUp', 'up', function() {
    Game.boat_1.axes.y = 0;
  });

  DE.Inputs.on('keyDown', 'fire', function() {
    Game.boat_1.fire();
    Game.boat_1.addAutomatism('fire', 'fire', { interval: 150 });
  });
  DE.Inputs.on('keyUp', 'fire', function() {
    Game.boat_1.removeAutomatism('fire');
  });
  //---------------------------------------------------------------------------------






    //-----------------------------input j2--------------------------
    DE.Inputs.on('keyDown', 'left2', function() {
      Game.boat_2.addAutomatism('rotate_left', 'rotate_left', { interval: 1 });
    });
    DE.Inputs.on('keyUp', 'left2', function(){
      Game.boat_2.removeAutomatism('rotate_left');
    })
  
    DE.Inputs.on('keyDown', 'right2', function() {
      Game.boat_2.addAutomatism('rotate_right', 'rotate_right', { interval: 1 });
    });
    DE.Inputs.on('keyUp', 'right2', function(){
      Game.boat_2.removeAutomatism('rotate_right');
    })
  
    DE.Inputs.on('keyDown', 'up2', function() {
      Game.boat_2.axes.y = -5;
    });
  
  
    DE.Inputs.on('keyUp', 'up2', function() {
      Game.boat_2.axes.y = 0;
    });
  
    DE.Inputs.on('keyDown', 'fire2', function() {
      Game.boat_2.fire();
      Game.boat_2.addAutomatism('fire', 'fire', { interval: 3000 });
    });
    DE.Inputs.on('keyUp', 'fire2', function() {
      Game.boat_2.removeAutomatism('fire');
    });
    //---------------------------------------------------------------------------------
};

// just for helping debugging stuff, never do this ;)
window.Game = Game;

export default Game;

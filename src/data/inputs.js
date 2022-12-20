/**
 * @ContributorsList
 * @Inateno / http://inateno.com / http://dreamirl.com
 *
 * this is the inputs list sample that will be loaded by the project
 * Please declare in the same way than this example.
 */
const inputs = {
  "left":{"keycodes":[ "K.left"] },
  "right":{"keycodes":[ "K.right"] },
  "up":{"keycodes":[ "K.up"] },
  "down":{"keycodes":[ "K.down" , 'K.s' ] },
  "jump":{"keycodes":[ 'G0.B.A', "K.space" ], "stayOn": true },
  
  "fire":{"keycodes":[ "K.space" , 'G0.B.A' ]/*, "interval": 100*/ },
  "deep":{"keycodes":[ "K.shift" , 'G0.B.B' ]/*, "interval": 100*/ },
  "undeep":{"keycodes":[ "K.ctrl" , 'G0.B.X' ]/*, "interval": 100*/ },
  
  "haxe":{"keycodes":[ "G0.A.LHorizontal" ] },
  "vaxe":{"keycodes":[ "G0.A.LVertical" ] },



  "left2":{"keycodes":['K.a', 'K.q' ] },
  "right2":{"keycodes":['K.d' ] },
  "up2":{"keycodes":['K.z', 'K.w' ] },

  "fire2":{"keycodes":[ "K.t" , 'G0.B.A' ]/*, "interval": 100*/ },


};

export default inputs;

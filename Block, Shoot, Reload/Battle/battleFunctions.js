// DECLARATIONS

var ammoP1 = 0;
var ammoP2 = 0;
var canBeShotP1 = true;
var canBeShotP2 = true;
var healthP1 = 1;
var healthP2 = 1;


// RELOAD FUNCTIONS

function reloadP1() {
  if (ammoP1 == 6) {
    console.log('No point in doin that!');
    return canBeShotP1 = true;
 } else {
    ammoP1++;
    return canBeShotP1 = true;
 }
}

function reloadP2() {
    if (ammoP2 == 6) {
      console.log('No point in doin that!');
      return canBeShotP2 = true;
   } else {
      ammoP2++;
      return canBeShotP2 = true;
   }
  }


// DODGE FUNCTIONS

function dodgeP1() {
    canBeShotP1 = false
}

function dodgeP2() {
    canBeShotP2 = false
}


// SHOOT FUNCTIONS

function shootP1() {
    canBeShotP1 = true;
    if (ammoP1 > 0) {
        if (canBeShotP2 == true) {
            healthP2 = 0;
            return ammoP1--;
        }
    } else {
        console.log("Can't pop heads with no leads!");
        return;
    }
}

function shootP2() {
    canBeShotP2 = true;
    if (ammoP2 > 0) {
        if (canBeShotP1 == true) {
            healthP1 = 0;
            return ammoP2--;
        }
        return;
    } else {
        console.log("Can't pop heads with no leads!");
        return;
    }
}


// CHECK HEALTH FUNCTIONS

function checkHealthP1() {
    if (healthP1 == 0){
        console.log("Player 1 was bested");
    }
}

function checkHealthP2() {
    if (healthP2 == 0){
        console.log("Player 2 was bested");
    }
}

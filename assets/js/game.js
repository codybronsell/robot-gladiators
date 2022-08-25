var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  } // end of while loop
}; // end of fight function
var startGame = function() {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
      
      var pickedEnemyName = enemyNames[i];
      
      enemyHealth = 50;
      
      fight(pickedEnemyName);

      if (playerHealth > 0 && i < enemyNames.length - 1) {

        var storeConfirm = window.confirm("The fight is over, visit the store before the next round pimp?")

        if (storeConfirm) {
          shop();
        }
      }
    }
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }
  endGame();
};
var endGame = function() {
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have the score of " + playerMoney + ". ");
  }
  else {
    window.alert("you've lost your robot in battle.");
  }

  var playAgainConfirm = window.confirm("would you like to play agian?");

  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert("THay you for playing robot gladiators! come back soon!");
  }

  
  window.alert("the game has now ended. Let's see how you did!");
};
var shop = function() {
  var shopOptionPrompt = window.prompt(
    "would you like to REFILL your Health, Upgrade your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', LEAVE' to make a choice."
  );

  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":   
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert ("you dont have enough money!");
      }
      
      break;
    
    case "upgrade":
    case "UPGRADE":   
      if (playerMoney >= 7) {
      window.alert("Upgrading players attack by 6 for 7 dollars.");
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      }
      else {
        window.alert("you dont have enough money!");
      }
      break;

    case "leave":
    case "LEAVE":  
      window.alert("leaving the store.");
      break
      
    default:
      window.alert("you did not pick a valid option.try again.");
      
      shop();
      break
  }
};

startGame();
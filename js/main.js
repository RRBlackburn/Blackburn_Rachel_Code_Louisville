

 //quote array
 var joke = ["Blank", "\"What do you call a party of bards in full-plate?\"<br><small><em>(A heavy metal band.)</em></small>", "\"How many Barbarians does it take to screw in a light bulb?\"<br><small><em>(4. 3 to figure out what the heck a light bulb does, and 1 to spend a rank to get it done.)</em></small>", "\"An ogre, giant, and troll walk into a bar... but the kobold was able to duck under it. \"<br>", "\"Why did the halfling cross the road? \"<br><small><em>(To steal the chicken.)</em></small>", "\"Why do elves have pointy ears?\"<br><small><em>(There has to be some point to them. )</em></small>", "\"How many dwarves does it take to change a light bulb?\"<br><small><em>( Five. One to hold the bulb, four to drink 'till the room spins.)</em></small>", "\"How many high elves does it take to change a light bulb?\"<br><small><em>( Just one. He holds the bulb, and the universe revolves around him.)</em></small>", "\”How many wizards does it take to change a light bulb?\"<br><small><em>( That depends. Change it into what?)</em></small>","\"How many clerics does it take to change a light bulb?\"<br><small><em>(Only one. He casts Cure Light. )</em></small>", "\"How many barbarians does it take to change a light bulb?\"<br><small><em>( A barbarian warrior is not afraid of the dark!)</em></small>","\"How many rogues does it take to change a light bulb?\"<br><small><em>( How much is it worth to you?)</em></small>", "\"Why are there no dwarven lawyers?\"<br>-<small><em>( They cannot pass the bar.)</em></small>","\"What do you call a raging barbarian?\"<br>-<small><em>(Anything you like - you can't make Listen checks while Raging. )</em></small>", "\"What's the difference between a porcupine and a Temple of Pelor?\"<br><small><em>( Porcupine has the pricks on the outside.)</em></small>", "\" Why did the dead goblin cross the road?\"<br><small><em>(Because it's stapled to a chicken )</em></small>", "\" How many goblins does it take to paint a house?\"<br><small><em>( Depends on how hard you throw 'em.)</em></small>","\"What's brown and sits motionless on the floor?\"<br><small><em>(A goblin in a bag of holding. )</em></small>","\"Why are there no stars to the left?\"<br><small><em>(Because the stars are right. )</em></small>","\"What do you do when Olladra gives you lemons?\"<br><small><em>( You find another god.)</em></small>", "\"How do you get a chord from half-orc bards?\"<br><small><em>( Ask them all to play the same note.)</em></small>","\"How many Gnomes does it take to light a candle?\"<br><small><em>( Only one, but it only appears to be lit)</em></small>", "\"How many Elves does it take to light a candle?\"<br><small><em>(One to sing, one to dance, one to summon the spiritual guardian of joyous flame forth into the realm material. )</em></small>", "\"How many Dwarves does it take to light a candle?\"<br><small><em>( Three, one to count the money, one to light the candle and one to check for sliding stone panels.)</em></small>", "\"Why can't a fallen paladin walk straight?\"<br><small><em>(He's out of alignment. )</em></small>",];
 
 
 
/*this starts the joke generator*/
function genjoke() {
    var randNum = Math.floor(Math.random() *24) + 1;
    document.getElementById('joke').innerHTML = joke[randNum];
  }
  
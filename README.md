# Go-for-Gold
Game project week 3

General idea:
This is  a memory game which has a bit of chance associated with winning
The grid is shown at the beginning of the game for about 20 seconds
The timer is set to 3 minutes and the player starts mining
Player has to try remembering where gold was and go for it 
Below holes can be nothing, dirt, old mineshaft or gold

Catching gold gives player 50 points
Catching dirt gives player -10 points
Catching nothing just wastes player’s time
Some holes are old mineshafts then player loses automatically because they fall in and die
Game ends when either player gets all gold on board or falls in a shaft or 3 minutes elapse
Game can be upgraded to have 2 players and once there are no more gold holes game ends and the winner is the one with the highest score

Description of board:
It is a 6x6 grid thus there are 36 positions
There are only 20 holes 
There are 10 holes with pieces of gold, 7 with dirt and 3 old mine shafts the rest are just empty

What’s Happening Behind the Scenes:
When game starts player is at position (0,0) on grid and gold, dirt and nothing holes are randomly placed.
The player get’s to peep for 20 seconds then goes to work trying to find gold 
When player is placed on a quadrant of a grid he can decide whether he wants to dig or not depending on what he remembered seeing there
Timer is set to 3 minutes
Game ends either automatically after time elapses or by player falling in shaft and dying or by all gold holes being uncovered



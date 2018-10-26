   
      /*
        To use:
        1. Create a page called "Loading" (you can change this in variables)
        2. On the object layer create a textbox (will be auto created if none exists)
        
        Note:
          To optimize resources, the tooltips only change when the players (not GM) are viewing the page
      */
      
        var displaySpeed = 30000;    		//Sets speed (in milleseconds) at which to cycle tips
      	var numChars = 35; 					//Set maximum number of characters per line
      	var targetPageName = "Party Assemble"; 	//The name of the page you want to use for your loading screen
      	var onlyChangeIfVisible = true;	//Only rotates tips when players are on Loading screen
      	var debug = false;					//Enables debugging messages

      	var tips = [
            "General OSR Tip #01\nView the entire area you've mapped out as the battleground; don't plan on taking on monsters in a single room. They may try to outflank you by running down corridors. Establish rendezvous points where the party can fall back to a secure defensive position.",
            "General OSR Tip #02\nScout ahead, and try to avoid wandering monsters which don't carry much treasure. You're in the dungeon to find the treasure-rich lairs. Trying to kill every monster you meet will weaken the party before you find the rich monsters.",
            "General OSR Tip #03\nDon't assume you can defeat any monster you encounter.",
            "General OSR Tip #04\nKeep some sort of map, even if it's just a flow chart. If you get lost, you can end up in real trouble – especially in a dungeon where wandering monster rolls are made frequently.",
            "General OSR Tip #05\nAsk lots of questions about what you see. Look up. Ask about unusual stonework. Test floors before stepping.",
            "General OSR Tip #06\nProtect the magic-user. He's your nuke.",
            "General OSR Tip #07\nHire some cannon fodder. Don't let the cannon fodder start to view you as a weak source of treasure.",
            "General OSR Tip #08\nSpears can usually reach past your first rank of fighters, so a phalanx of hirelings works well.",
            "General OSR Tip #09\nCheck in with the grizzled one-armed guy in the tavern before each foray; he may have suddenly remembered more details about the area.",
            "ACK System Tip #01\nEvery adventurer maintains a standard of living appropriate for their level. This is a monthly expense.",
            "ACK System Tip #02\nEvery settlement has a market class which defines what is available for purchase. Don't assume!",
            "ACK System Tip #03\nEquipment can be commissioned if it is not available right away.",
            "ACK System Tip #04\nMany one-handed weapons can be wielded with two hands for a bump to their damage die.",
            "ACK System Tip #05\nHenchmen will accompany you into a dungeon. Mercenaries and Specialists will not.",
            "ACK System Tip #06\nHenchmen are entitled to a share of experience and treasure, in addition to their wage.",
            "ACK System Tip #07\nSpell casters do not have to memorize their spells every day. Instead they keep a limited repertoire with a number of castings per day for each spell level.",
            "ACK System Tip #08\nFor an arcane caster to learn a new spell its formula must be found or researched.",
            "ACK System Tip #09\nAn arcane caster may have more spell formulae than he can keep in his repertoire. Modifying your repertoire is possible.. given enough time and gold.",
            "ACK System Tip #10\nSpell casters have a spell signature.. a sensory effect that makes their spells unique to them.",
            "ACK System Tip #11\nWhile exploring, each turn is 10 minutes.",
            "ACK System Tip #12\nWhile exploring, it is recommended that you take a 10 minute break every hour.",
            "ACK System Tip #13\nWhile exploring, most actions take a full turn to complete.",
            "ACK System Tip #14\nIn combat, each round is 10 seconds.",
            "ACK System Tip #15\nWhen in darkness, or targeting an invisible adversary, there is a -4 penalty to the attack throw.",
            "ACK System Tip #16\nWhen forcing a door open, any help will give a +4 to the attempt.",
            "ACK System Tip #17\nSearching a 10'x10' area takes a full turn.",
            "ACK System Tip #18\nAnyone can attempt to search for traps, not just Thieves.",
            "ACK System Tip #19\nIf you need to get somewhere fast, you can force march. You will be tired until you take it easy for a full day afterward.",
            "ACK System Tip #20\nWhile marching through the wilderness, it is recommended that you rest for one day in every six.",
            "ACK System Tip #21\nWhile on the march it is possible to forage for rations without slowing down, if the environment permits.",
            "ACK System Tip #22\nWhen an encounter begins a surprise check may be necessary for one or both sides. Then the reaction of what you've encountered is determined.",
//            "ACK System Tip #23\nSneaking is best explained via a flowchart: http://crowbarandbrick.blogspot.com/2016/05/surprise-itsa-flowchart.html",
            "ACK System Tip #24\nDuring an encounter initiative is rolled every round!",
            "ACK System Tip #25\nCasting a spell must be declared before initiative is rolled for the round.",
            "ACK System Tip #26\nWithdrawing or Retreating from melee must be declared before initiative is rolled for the round.",
            "ACK System Tip #27\nIf a faster opponent approaches you and you have a weapon with long reach, or a readied missile weapon, you may attack on the same initiative (simultaneously).",
            "ACK System Tip #28\nAfter attacking, a combatant may not move again until the next round.",
            "ACK System Tip #29\nCharging gives a +2 to the next attack throw and a -2 penalty to your armor class until your next initiative.",
            "ACK System Tip #30\nA helpless target can be automatically slain.",
            "ACK System Tip #31\nWhen making a ranged attack it is possible that your target may have cover that will penalize the attack by up to -4.",
            "ACK System Tip #32\nFlasks of oil can be lit and thrown as missile attacks. Mind the splash!",
            "ACK System Tip #33\nIf between declaring a spell and casting it you take any damage or fail any saving throw, the spell is interrupted and lost.",
            "ACK System Tip #34\nA caster may not move or perform any other action on a round in which they attempt to cast a spell.",
            "ACK System Tip #35\nDamage multipliers are applied to the die result, additional dice are not rolled.",
            "ACK System Tip #36\nIf you are reduced to 0 hitpoints, prepare to roll on the Mortal Wounds table when someone checks on you.",
            "ACK System Tip #37\nPermanent damage and even death can be reversed with a Restore Life and Limb spell. There may be other consequences, however.",
            "ACK System Tip #38\nFor each full day of complete rest in sanitary conditions, a character will recover 1d3 hitpoints.",
            "ACK System Tip #39\nThe healing proficiency can improve a characters natural healing rate.",
            "ACK System Tip #40\nSometimes an injury requires a period of rest to fully recover. Unless specified otherwise, natural healing does not occur until the injury has recovered.",
            "ACK System Tip #41\nCharacters that attack as Fighters can cleave after downing an opponent, moving up to 5' to do so. This can be done a number of times in a single round equal to their hit dice.",
            "ACK System Tip #42\nCharacters that attack as Clerics or Thieves can cleave like Fighters, up to a number of times in a single round equal to half their hit dice (rounded down).",
            "ACK System Tip #43\nIt is possible to cleave with missile weapons, but the number of times you can cleave in a round is limited by the type of weapon.",
            "ACK System Tip #44\nSpecial Maneuvers can always be attempted in combat, generally with a -4 penalty to the attack throw.",
            "ACK System Tip #45\nMorale can play a key factor in combat, for or against you and your hirelings.",
            "ACK System Tip #46\nThe difficulty of a swimming throw is determined by your encumbrance.",
            "ACK System Tip #47\nIf a swimming throw is failed, you will begin to sink, and drown in 10 rounds unless you are rescued.",
            "ACK System Tip #48\nThe majority of experience toward your advancement will come from treasure, not slaying foes.",
            "ACK System Tip #49\nYou can 'bank' gold toward an experience reserve should your character die and need to be replaced.",
            "ACK System Tip #50\nThere are many useful things that can be done with a little downtime between adventures.",
            "Additional Tip #01\nWhen dividing a number, always round down!",
            "Additional Tip #02\nMaybe your adventuring party should have a name!",
            "Additional Tip #03\nMake sure to establish your marching order!",
            "Additional Tip #04\nSomeone should take the responsibility of mapping the dungeon.",
            "Additional Tip #05\nSlower travel is safer travel. Moving faster leaves you exposed to more random encounters.",
            "Additional Tip #06\nUse your social skills often; violence isn't always the answer! Just usually."
        ];
      	
      // 
      // Don't edit bellow this line if you don't know what you are doing
      // ------------------------------------------------------	
      
      on("ready", function(obj) {
          
      	var loadingPage;
      	//var textAnchor;
      	// Warn user that there is no page
      	if( findObjs({_type: "page",name: targetPageName}).length == 0){
      		log("Warning! No Page named '"+targetPageName+"' exists, create one for this script to work");
      		return;
      	}
      	else{
      		loadingPage = findObjs({_type: "page",name: targetPageName})[0];
      		//textAnchor = findObjs({_type: "graphic",name: "textanchor"})[0];
      	}
      
      	//Update the loading screen with a new tip (requires players to be viewing page)
      	var UpdateWithNewTip = function() { 
      	
      		//Change Tip only if Red player marker is on Loading Page
      		if(onlyChangeIfVisible && getObj("page", Campaign().get("playerpageid")).get("name") != targetPageName) return;
      		else if(debug) log("Players not on "+targetPageName);
      		
      		var textObjects = findObjs({
      			_type: "text",
      			_pageid: loadingPage.get("_id"),
      			layer: "objects"
      		});
      	
      		if(debug) log("Text Objects on page");
      		if(debug) log(textObjects);
      		
      		//Find First text field or create one if none exists
      		var text;
      		if(textObjects.length == 0){
      			if(debug) log("Create New Text Box");
      			text = createObj("text", {
      				_pageid: loadingPage.get("_id"),
      				left: 650, 
      				top: 255, 
      				width: 200, 
      				height: 200, 
      				font_size: 56,
      				text: "Loading...",
      				layer: "objects"
      			});
      		}
      		else{
      			if(debug) log("Text Box Already Exists");
      			text = textObjects[0];
      		}
      	
           	var pickone = randomInteger(tips.length) - 1;
      
      		var formattedText;
              var formattedLines = [];
              _.each(tips[pickone].split(/\n/),function(l){
                  formattedText = '';
                  _.each(l.split(''),function(c){
                      if(formattedText.length > numChars && ' ' === c) {
                          formattedLines.push(formattedText);
                          formattedText = '';                       
                      } else {
                          formattedText += c;
                      }
                  });
                  formattedLines.push(formattedText);
              });
              formattedText=formattedLines.join("\n");
      		
      		text.set("font_family", "monospace");
      		text.set("text", formattedText);
      		//text.set("top", textAnchor.get("top") + (text.get("height")/2));
      		//text.set("left", textAnchor.get("left") + (text.get("width")/2));
      		if(debug) log( "new tip: "+ text.get("text"));
      	}
       
          UpdateWithNewTip();
          setInterval( UpdateWithNewTip, displaySpeed); //take an action every ___ seconds   
      });

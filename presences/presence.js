/*
 * Unrecommended options are marked as note, these either dont have any purpose yet or are unuseful.
 * You can unmark them at any time
 */

module.exports = {
	name: 'presence',
	async execute(client) {
        client.setActivity({
            largeImageKey: 'LargeImageKey', //  name of the uploaded image for the large profile artwork (Image Key)
            largeImageText: 'Large Image Text', // tooltip for the largeImageKey (string)
            smallImageKey: 'SmallImageKey', // name of the uploaded image for the small profile artwork (Image Key)
            smallImageText: 'Small Image Text', // tooltip for the smallImageKey (string)
            details: 'Details', // what the player is currently doing (string)
            state: 'State', // the user's current party status (string)
	    startTimestamp: '1507665886', // epoch seconds for game start - including will show time as "elapsed" (int64_t)
	    endTimetstamp: '1507665886', // epoch seconds for game end - including will show time as "remaining" (int64_t)
//	    partyId: 'ae488379-351d-4a4f-ad32-2b9b01c91657', // id of the player's party, lobby, or group
//	    partySize: '1', // current size of the player's party, lobby, or group (int)
//	    partyMax: '5', // maximum size of the player's party, lobby, or group (int)
//	    matchSecret: 'MmhuZToxMjMxMjM6cWl3amR3MWlqZA==', // (for future use) unique hashed string for a player's match (string)
//	    spectateSecret: 'MTI4NzM0OjFpMmhuZToxMjMxMjM=', // unique hashed string for chat invitations and Ask to Join (string)
            buttons: [
                { 
		 label: "Button 1 Label", // text displayed on the button of the activity (string)
		 url: "Button 1 URL", // URL the button leads to (URL)
		 label: "Button 2 Label", // text displayed on the button of the activity (string) 
		 url: "Button 2 URL" // URL the button leads to (URL)
		}, // You can have 2 Max Buttons
            ],
            instance: false // (for future use) integer representing a boolean for if the player is in an instance (an in-progress match) (boolean)
        });
    }
}

/* 
 * Note:
 * Sending endTimestamp will always have the time displayed as "remaining" until the given time. Sending startTimestamp will show "elapsed" as long as there is no endTimestamp sent.
 */

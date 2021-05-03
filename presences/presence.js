module.exports = {
	name: 'presence',
	async execute(client) {
        client.setActivity({
            largeImageKey: 'Large Image Key', // Image Key
            largeImageText: 'Large Image Text', // String
            smallImageKey: 'Small Image Key', // Image Key
            smallImageText: 'Small Image Text', // String
            details: `Details`, // String
            state: `State`, // String
            buttons: [
                { 
		 label: "Button Label", // String 
		 url: "Button URL" // URL
		}, // You can have 2 Max Buttons
            ],
            instance: false, // Boolean
        });
    }
}

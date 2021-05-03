const { Client } = require('discord-rpc');
const client = new Client({ transport: 'ipc' });


client.on('ready', async () => {
    const file = require(`./presences/presence.js`);
    file.execute(client);
    setInterval(() => {
        delete require.cache[require.resolve(`./presences/presence.js`)];
        const file = require(`./presences/presence.js`);
        file.execute(client);
    }, 15000);
});

client.login({ clientId: '756404434048909374' });


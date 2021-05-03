const { pool } = require('../Database.js');
module.exports = {
	name: 'presence',
	async execute(client) {
        const res = await pool.query(`SELECT * FROM stats`);
        client.setActivity({
            largeImageKey: '512',
            largeImageText: 'v1.4.-',
            smallImageKey: 'lars_und_so',
            smallImageText: 'Developed by Lars_und_so',
                details: `${res.rows[0].guildcount} Servers | ${res.rows[0].usercount} Users | ${res.rows[0].rolecount} Roles`,
            state: `${res.rows[0].allusers} Server Members | ${res.rows[0].channelcount} Channels`,
            buttons: [
                { label: "Invite Ayako", url: "https://discord.com/api/oauth2/authorize?client_id=650691698409734151&permissions=1576396919&scope=bot" },
            ],
            instance: false,
        });
    }
}
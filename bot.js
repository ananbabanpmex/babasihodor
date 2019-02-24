const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  
   bot.user.setActivity("BabasınınSorakası'nı", {type: "WATCHING"});

});

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('519561388113395713').send('Hey ' + '<@' + member.user.id + '>' + ', Discord Sunucumuza Hojjgeldiniz efenim :tada::hugging: !'); 
});

bot.login('NTQ5MjIxMDI3Njc5NTY3ODg5.D1RL-w.41tHCH28PrQdzmfzGCHOvzIFd1k');

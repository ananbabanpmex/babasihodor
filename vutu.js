const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  
   bot.user.setActivity("BabasınınSorakası'nı", {type: "WATCHING"});

});

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('438404115757006878').send('Hey ' + '<@' + member.user.id + '>' + ', Discord Sunucumuza Hojjgeldiniz efenim :tada::hugging: !'); 
});

bot.login('yarramı ye');

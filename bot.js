const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  
   bot.user.setActivity("BabasınınSorakası'nı", {type: "WATCHING"});

});

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('519561388113395713').send('Hey ' + '<@' + member.user.id + '>' + ', Discord Sunucumuza Hojjgeldiniz efenim :tada::hugging: !'); 
});

bot.login('NTQ3Nzk3Njg3OTAzMzIyMTUw.D07_3Q.aMVa38xJnwsQv6FBu-1HDg_Bw38');
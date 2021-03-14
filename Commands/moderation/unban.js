const Discord = require('discord.js');

exports.run = async(client, message, args) => {
 var guild = message.guild;
 var baniacan = message.author.tag;
 if (!args[0]) return message.reply("Banlayacağım Kişiyi Etiketlemen Gerek!");
 var kisi = args[0];
 //var gun = args.slice(1).join(' ') ? `${args.slice(1).join(' ')}` :"";
 var neden = args.slice(1).join(' ') ? `${args.slice(1).join(' ')} Banı açan: ${baniacan}` : `Neden Belirtilmemiş.  banı açan: ${baniacan}`

//if (!kisi) return message.reply("Kişi Bulunamadı! Lütfen ID Doğru Giriniz!")

 await message.channel.send(`${kisi} ID'li kullanıcının banı açıldı. \nNedeni: ${neden}`)
 await guild.members.unban(kisi, neden);



};


exports.conf = {
  aliases: ['unban', 'idunban'],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'ban acar',
  usage: 'ban'
};
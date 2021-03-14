const Discord = require('discord.js');

exports.run = (client, message, args) => {

var embesil = new Discord.MessageEmbed()
.setColor('#c66276')
.setTitle(`${message.author.tag} adlı kullanıcının Profil Fotoğrafı`)
.setAuthor(message.author.username, message.author.avatarURL({ size:1024, dynamic:true, format: 'png'}))
.setImage(message.author.avatarURL( { size:1024, dynamic:true, format: 'png'} ))
message.channel.send(embesil)

};


exports.conf = {
  aliases: ['pp', 'avatar'],
  permLevel: 0
};

exports.help = {
  name: 'pp',
  description: 'Kullanan kisinin ppsini atar',
  usage: 'ping'
};
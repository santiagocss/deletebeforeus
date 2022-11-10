module.exports = {
TOKEN: "MTAzNTk5ODM3NDM1ODQzODAzOA.GGzsVu.-SC07624P_4XDbS4HphrNf2em9qvgGkHPrdlH0",
ownerID: "1009183664321609870", 
botInvite: "https://discord.com/oauth2/authorize?client_id=1035998374358438038&scope=bot&permissions=274881138240", 
supportServer: "https://discord.gg/tJX3PkaKDX", 
mongodbURL: "mongodb+srv://santiago:102030ss@cluster0.crnznhd.mongodb.net/?retryWrites=true&w=majority", 
status: '/help',
commandsDir: './commands', 
language: "en", 
embedColor: "ffa954", 
errorLog: "1040051659268698212", 
    voteManager: { //optional
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },

    playlistSettings:{
        maxPlaylist: 10, //max playlist count
        maxMusic: 75, //max music count
    },

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}

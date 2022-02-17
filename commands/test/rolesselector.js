const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "rolesselector",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("**Notifikationer**").setDescription("Klik på den grå kanp hvis du ønsker og få notifikationer, når vi skriver en besked i <#939855045615300669> eller <#939855634994724894>").setColor("GREEN")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-939856408558567425").setStyle("SECONDARY").setLabel("notifikationer")
                ])
            ],
        })
    }
}
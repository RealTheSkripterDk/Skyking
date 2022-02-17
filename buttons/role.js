module.exports = {
    name: "role",
    run: async (bot, interaction, parameters) => {
        const roleId = parameters[0]
        if (!interaction.guild)
            return interaction.reply({content: "This command can only be used in a guild!", ephemeral: true})
        
            const role = await interaction.guild.roles.fetch(roleId)
            if (!role)
                return interaction.reply({content: "Role not found", ephemeral: true})
            
            const member = await interaction.guild.members.fetch(interaction.member.id)

            // member has the role => remove role
            if (member.roles.cache.has(role.id)){
                await member.roles.remove(role.id)
                return interaction.reply({ content: `Vi har nu taget **${role.name}** rollen fra dig igen`, ephemeral: true})
            }
            // member doesn't have the role => add role
            else {
                await member.roles.add(role.id)
                return interaction.reply({ content: `Du er nu blivet tildelt **${role.name}** rollen på discorden`, ephemeral: true})
            }

    }
}
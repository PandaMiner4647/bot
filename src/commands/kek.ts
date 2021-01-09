import { Command, CmdArgs } from ".";
import { Message, MessageEmbed } from "discord.js";
import { kek } from "..";

export class CommandKekw implements Command {
  aliases = ["kek","kekw"];
  cmdDocs = {
    description: "kek",
  };
  async execute(cmdArgs: CmdArgs): Promise<void | Message> {
    const { msg } = cmdArgs;
    msg.channel.send(
      `
      <:kek:797191552442040330>               <:kek:797191552442040330>       <:kek:797191552442040330> <:kek:797191552442040330> <:kek:797191552442040330>       <:kek:797191552442040330>               <:kek:797191552442040330>
<:kek:797191552442040330>        <:kek:797191552442040330>              <:kek:797191552442040330>                     <:kek:797191552442040330>        <:kek:797191552442040330>
<:kek:797191552442040330> <:kek:797191552442040330>                     <:kek:797191552442040330> <:kek:797191552442040330> <:kek:797191552442040330>       <:kek:797191552442040330> <:kek:797191552442040330>
<:kek:797191552442040330>        <:kek:797191552442040330>              <:kek:797191552442040330>                     <:kek:797191552442040330>        <:kek:797191552442040330>
<:kek:797191552442040330>               <:kek:797191552442040330>       <:kek:797191552442040330> <:kek:797191552442040330> <:kek:797191552442040330>       <:kek:797191552442040330>               <:kek:797191552442040330>`
    );
  }
}
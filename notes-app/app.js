const getNotes = require("./notes")
const chalk = require("chalk")
const yargs = require("yargs")


yargs.command({
  command: "add",
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    console.log(`Title: ${argv.title}`)
    console.log(`Body: ${argv.body}`)
  }
})

yargs.command({
  command: "remove",
  describe: 'Remove a new note',
  handler: () => console.log('Removing a new note!')
})

yargs.command({
  command: "list",
  describe: 'List a new note',
  handler: () => console.log('Listing a new note!')
})

yargs.command({
  command: "read",
  describe: 'Read a new note',
  handler: () => console.log('Reading a new note!')
})

yargs.parse()

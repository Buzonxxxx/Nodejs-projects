const notes = require("./notes");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
});

yargs.command({
  command: "list",
  describe: "List a new note",
  handler() {
    console.log("Listing a new note!")
  }
});

yargs.command({
  command: "read",
  describe: "Read a new note",
  handler() {
    console.log("Reading a new note!")
  }
});

yargs.parse();

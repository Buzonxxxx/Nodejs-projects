const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatedNote = notes.find(note => note.title === title);

  if (!duplicatedNote) {
    notes.push({ title, body });
    saveNote(notes);
    console.log("New note added!")
  } else {
    console.log("No note taken!")
  }
};

const saveNote = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"))
    saveNote(notesToKeep);
  } else {
    console.log(chalk.red.inverse("Not note found!"))
  }
}

const readNote = (title) => {
  const notes = loadNotes();
  const matchNote = notes.find(note => note.title === title)
  if(matchNote){
    console.log(chalk.inverse("Your note"))
    console.log(`Title: ${matchNote.title}`);
    console.log(`Body: ${matchNote.body}`);
  } else {
    console.log(chalk.red.inverse("No matched note!"))
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes"));
  console.log("-----")
  notes.forEach(note => {
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  });

}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};
module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};

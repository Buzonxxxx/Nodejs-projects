const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatedNotes = notes.filter(note => note.title == title);

  if (duplicatedNotes.length === 0) {
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
  removeNote
};

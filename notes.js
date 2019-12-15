const fs = require('fs')
const chalk = require('chalk')


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./notes.json')
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    } catch (err) {
        return []
    }
}


const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync('./notes.json', notesJson)
}

const addNote = (title, body) => {

    const notes = loadNotes()
    const duplicateNote = notes.find( (note) => note.title === title)

    if(!duplicateNote) {
        const newNote = {
            title: title,
            body: body
        }
        notes.push(newNote)
        saveNotes(notes)
        console.log(chalk.green.bold.inverse('New note added.'))
    } else {
        console.log(chalk.red.bold.inverse('Already a note with that title.'))
    } 
}

const removeNote = (title) => {
    const notes = loadNotes();
    const titleIndex = notes.findIndex( (note) => note.title === title )
    if (titleIndex != -1) {
        notes.splice(titleIndex, 1)
        saveNotes(notes)
        console.log(chalk.green.bold.inverse('Note with title ' + title + ' removed.'))
    } else {
        console.log(chalk.red.bold.inverse("No note found!"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length > 0) {
        console.log(chalk.blue.bold('Your notes:'))
        notes.forEach(note => {
            console.log(note.title)
        })
    } else {
        console.log(chalk.yellow.bold('There are not any notes.'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find( (note) => note.title === title)

    if(noteToRead) {
        console.log(chalk.blue.underline('Title: ' + noteToRead.title))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red.bold('No note found with that title.'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
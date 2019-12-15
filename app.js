#!/usr/bin/env node
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//customize yargs
yargs.version('3.4.0')

//create add command
yargs.command({
    command: 'add',
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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})


//list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler() {
        notes.listNotes()
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.usage('{$0} <cmd> [args]')

yargs.parse()






// first do npm init
// search for a package on npm
// then do npm install <packageName>@versionNumber

// local npm modules get loaded into node_modules and package.json
// we are going to install an npm module clobally


//console.log(process.argv)


// let msg = getNotes()

// console.log(msg)

// //console.log(validator.isEmail('@example.c'))
// console.log(validator.isURL('http://google.com'))
// console.log( chalk.blue.bold('SUCCESS') )

// let command = undefined
// let title = undefined
// let body = undefined

// if (argv.command === 'add' || argv.command === 'remove') {
//     command = argv.command
// } else {
//     console.log('command flag should either be add or remove.  Exiting...')
//     process.exit()
// }
// console.log(chalk.blue.bold.inverse(command))

// if (argv.title && argv.title != '') {
//     title = argv.title
// } else {
//     console.log('invalid title given in arguments.  Exiting...')
//     process.exit()
// }
// console.log(chalk.blue.bold.inverse(title))

// if (argv.body  && argv.body != '') {
//     body = argv.body
// } else {
//     console.log('invalid body given in arguments.  Exiting...')
//     process.exit()
// }
// console.log(chalk.blue.bold.inverse(body))








// //const command = process.argv[2]

// // if (command) {
// //     if (command === 'add') {
// //         clog(chalk.blue.bold.inverse('add called'))
// //     } else if (command === 'remove') {
// //         clog(chalk.yellow.bold.inverse('remove called'))
// //     } else {
// //         clog(chalk.red.bold.inverse('something else that is not add is in argv[2]'))
// //     }
// // } else {
// //     clog(chalk.yellow.bold.inverse('There is nothing provided in argv[2]'))
// // }

// // console.log(process.argv)

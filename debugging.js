const person = {
  name: 'Louis'
}

person.age = 25

debugger

person.name = 'Liao'
debugger
console.log(person)


/*
[How to user CLI debugger]
- set debugger breakpoint in your code
- node inspect xxx.js
- type 'c' to the debugger breakpoint
- type 'repl'
- verify your code
- e.g. node inspect app.js debugging.js

[How to user Chrome DevTool Debugger]
- node --inspect-brk xxx.js
- go to Chrome://inspect
- click 'Open dedicated DevTools for Node'
- e.g. node --inspect-brk debugging.js
*/
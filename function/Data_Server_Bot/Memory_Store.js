// MAKE IN MEMORY STORE

const { makeInMemoryStore } = require("@adiwajshing/baileys")
const fs = require("fs");
const logg = require('pino')
const Memory_Store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })

module.exports = { Memory_Store }
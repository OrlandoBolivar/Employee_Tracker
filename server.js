const mysql = require('mysql2');

const prompts = require('./lib/prompt.js')

const consoleTable = require('console.table');

const db = require('./db/connection.js');

const PORT = process.env.PORT || 3001;


prompts.mainList();
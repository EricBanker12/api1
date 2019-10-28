// console.log("\nIt's alive!\n")

const express = require('express') // import express from 'express'

const server = express() // create server

// request/route handlers

// GET to localhost:5000
server.get('/', (req, res) => {
    res.send('Hello World')
})

const port = 8000

server.listen(port, () => console.log(`\n=== API on port ${port} ===\n`))
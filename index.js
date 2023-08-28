const express = require('express')

const bodyparser = require('body-parser')
const jsonparser = bodyparser.json()

const cp = require('child_process')

const app = express()
const port = 3000

app.post('/connect/:ip', (req, res) => {
  try {
    cp.exec(`adb connect ${req.params.ip}`)
    res.send()
  }
  catch (ex) {
    res.errored(ex)
  }
})

app.post('/disconnect/:ip', (req, res) => {
  try {
    cp.exec(`adb disconnect ${req.params.ip}`)
    res.send()
  }
  catch (ex) {
    res.errored(ex)
  }
})

app.post('/command', jsonparser, (req, res) => {
  try {
    cp.exec(`adb -s ${req.body.device} ${req.body.command}`)
    res.send()
  }
  catch (ex) {
    res.errored(ex)
  }
})

app.listen(port, () => {
  console.log("Starting to listen on port ", port)
})
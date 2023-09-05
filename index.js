const express = require('express')
const cp = require('child_process')

const app = express()
app.use(express.json())
const port = 3000

app.post('/connect/:ip', (req, res) => {
  try {
    console.log('connecting to '+req.params.ip)
    const ret = cp.execSync(`adb connect ${req.params.ip}`)
    res.send(ret)
  }
  catch (ex) {
    console.error('error', ex)
    res.status(500).send(ex.message)
  }
})

app.post('/disconnect/:ip', (req, res) => {
  try {
    console.log('disconnecting from '+req.params.ip)
    const ret = cp.execSync(`adb disconnect ${req.params.ip}`)
    res.send(ret)
  }
  catch (ex) {
    console.error('error', ex)
    res.status(500).send(ex.message)
  }
})

app.post('/command', (req, res) => {
  try {
    console.log('incoming req',req,body)
    const cmd = `adb -s ${req.body.device} ${req.body.command}`
    console.log('executing command',cmd)
    const ret = cp.execSync(cmd)
    res.send(ret)
  }
  catch (ex) {
    console.error('error', ex)
    res.status(500).send(ex.message)
  }
})

app.listen(port, () => {
  console.log("Starting to listen on port ", port)
})
const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')
app.use(express.json({ limit: '20mb' }))
app.use(express.urlencoded({ extended: false, limit: '20mb' }))
const bcrypt = require('bcrypt')

app.use(express.static(path.join(__dirname, 'build')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/api/register', async (req, res) => {
  fs.readFile('./data.json', 'utf8', async (err, jsonString) => {
    if (err) {
      console.log('Error reading file from disk:', err)
      return
    }
    try {
      const data = JSON.parse(jsonString)

      data.users.push({
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        likes: [],
        favorites: [],
      })
      const newUsers = JSON.stringify(data)

      fs.writeFile('./data.json', newUsers, (err) => {
        if (err) console.log('Error writing file:', err)
      })

      return res.status(201).json({
        message: 'Register successfully',
      })
    } catch (err) {
      console.log('Error parsing JSON string:', err)
    }
  })
})

app.post('/api/login', async (req, res) => {
  fs.readFile('./data.json', 'utf8', async (err, jsonString) => {
    if (err) {
      console.log('Error reading file from disk:', err)
      return
    }
    try {
      const data = JSON.parse(jsonString)

      const user = data.users.find(
        (user) => user.email === req.body.email
      )

      if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
        return res
          .status(400)
          .send({ message: 'Your email and/or password do not match' })
      }
      res.status(200).json({
        message: 'Login success',
      })

    } catch (err) {
      console.log('Error parsing JSON string:', err)
    }
  })
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})

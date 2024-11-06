const express  = require('express')
const {body, validationResult} = require('express-validator')
const fs = require('fs');
const cors = require("cors")

const port = 3000
const app = express()
app.use(express.json())
app.use(cors())


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/info', async(req, res) => {
    fs.readFile('./info.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(400).json({'success': false})
        }
        return res.status(200).json(JSON.parse(data))
    })
})

app.post('/info', 
         body('aboutMe').notEmpty().isString(),
         body('languages').notEmpty().isArray(),
         body('technologies').notEmpty().isArray(),
         body('developerTools').notEmpty().isArray(),
         async(req, res) => {
    
    // validate
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({error: "no load"})
    }

    const json = JSON.stringify(req.body)
    fs.writeFile('./info.json', json, 'utf-8', (err) => {
        if (err) {
            return res.status(400).json({'success': false})
        }
        console.log('wrote to file')
        return res.status(200).json({'success': true})
    })
})


app.post('/contacts',
         body('firstName').notEmpty().isString(),
         body('lastName').notEmpty().isString(),
         body('subject').notEmpty().isString(),
         async (req, res) => {

    // validate
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({error: "no load"})
    }

    fs.readFile('./contacts.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(400).json({'success': false})
        }

        // get id and add to body
        const jsonData = JSON.parse(data)
        const id = jsonData[jsonData.length - 1].id + 1
        const newContact = req.body
        newContact.id = id
        jsonData.push(newContact)
        fs.writeFile('./contacts.json', JSON.stringify(jsonData), (err) => {
            if (err) {
                return res.status(400).json({'success': false})
            }
            console.log('wrote to file')
            return res.status(200).json({'success': true})
        })
    })
    
})

app.get('/contacts', async (req, res) => {
    fs.readFile('./contacts.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(400).json({'success': false})
        }
    return res.status(200).json(JSON.parse(data))
    })
})

app.get('/contacts/:id', async(req, res) => {
    fs.readFile('./contacts.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(400).json({'success': false})
        }

        const id = req.params.id
        const jsonData = JSON.parse(data)
        for (let i = 0; i < jsonData.length; i++) {
            let obj = jsonData[i];
            if (obj.id == id) {
                return res.status(200).json(obj)
            }
        }
        return res.status(400).json({'success': false})
    })
})

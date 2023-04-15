const express = require("express");
const cors = require("cors");
require("./db/conn")
const Marketting = require("./models/promote")
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.urlencoded({ extended: true, limit: '512kb' }))
app.use(express.json({ limit: '2mb' }))

app.get("/", (req, res) => {
    res.send("Hi, welcome to promote app");
})

app.get("/promoteDetails", async (req, res) => {

    res.send(data)
})

app.get('/getPromoteLink', async (req, res) => {
    try {
        const getMarkettingLinks = await Marketting.find({})
        res.status(201).send(getMarkettingLinks)

    } catch (error) {
        res.status(400).send(error)
    }


})

app.post('/sendPromoteLink', (req, res) => {
    console.log({ body: req.body })
    const links = new Marketting(req.body)
    links.save().then(
        () => {
            res.status(201).send(links)
        }
    ).catch((error) => {
        res.status(400).send(error)
        console.log(error)
    })

})

const starts = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} yes connected !!!`)
        });

    } catch (error) {
        console.log(error)
    }
}

starts();
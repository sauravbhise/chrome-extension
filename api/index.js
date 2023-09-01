const express = require("express")
const app = express()
const cors = require("cors")

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.post("/question", (req, res) => {
	const question = req.body.question;
	const answer = "Hello from GenAI!"
	res.json({ question, answer })
})

app.listen(port, () => console.log(`API is running on port ${port}`))
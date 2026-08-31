const express = require('express');
const app = express()
const port = 3000

app.get('/deck-advice', (req, res) => {
  if (!req?.query?.prompt) return;

  const prompt = req.query.prompt;


  

})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
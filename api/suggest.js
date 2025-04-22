const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/suggest', async (req, res) => {
  const { word } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant skilled in content moderation and optimizing text for social media. You specialize in suggesting safer alternatives to sensitive or potentially banned words." },
        { role: "user", content: `Please suggest a word to replace "${word}" that is less likely to be flagged or banned on social media, and briefly explain why your suggestion is safer.` }
      ],
      temperature: 0.7
    });

    const response = completion.choices[0].message.content;
    res.json({ suggestion: response });
  } catch (error) {
    console.error("🔥 OpenAI Fail：", error);
    res.status(500).json({ error: 'Failed' });
  }
});

module.exports = app;


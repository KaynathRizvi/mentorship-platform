import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/assignments/generate", async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    const prompt = `Generate a ${difficulty} level assignment on ${topic} with 3 questions.`;

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "user", content: prompt }
      ],
    });

    const assignment = response.choices[0].message.content;

    res.json({ assignment });

  } catch (error) {
    res.status(500).json({ error: "AI generation failed" });
  }
});

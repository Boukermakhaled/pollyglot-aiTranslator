import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { text, lang } = req.body;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: `Translate this text to ${lang}: ${text}`,
    });

    res.status(200).json({
      success: true,
      result: response.output_text,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}

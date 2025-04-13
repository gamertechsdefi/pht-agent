import { OpenAI } from 'openai';

const xai = new OpenAI({
  apiKey: process.env.XAI_API_KEY, // Use your xAI API key
  baseURL: 'https://api.x.ai/v1', // xAI's API endpoint
});

export async function POST(req) {
  const { message } = await req.json();

  try {
    const response = await xai.chat.completions.create({
      model: 'grok-3-latest',
      messages: [{ role: 'user', content: message }],
      temperature: 0.7,
    });

    const botReply = response.choices[0]?.message?.content?.trim();
    return Response.json({ reply: botReply });
  } catch (error) {
    console.error(error);
    return Response.json({ reply: "Sorry, I couldn't process your request." }, { status: 500 });
  }
}
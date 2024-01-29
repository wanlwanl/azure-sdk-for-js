import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Write a short novel" }],
    model: "gpt-3.5-turbo",
    max_tokens: 100,
    stream: true,
  });

  for await (const message of completion) {
    console.log(message.choices[0].delta);
  }
}

main();

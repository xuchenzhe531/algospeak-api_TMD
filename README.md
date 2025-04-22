# 🛡️ Algospeak API

This project provides a lightweight API that takes a potentially banned or sensitive word and returns a safer, algorithm-friendly ("algospeak") alternative using OpenAI's language models.

Perfect for tools that help users avoid shadowbans, censorship, or content moderation blocks on social platforms.

---

## ✨ Features

- 💬 Suggests safer replacements for sensitive words
- 🧠 Powered by OpenAI (`gpt-3.5-turbo`)
- 🧱 Built with Node.js + Express
- ☁️ Serverless-ready (Vercel deployment)
- 🖼️ Easily integratable with frontend (Framer, React, etc.)

---

## 📁 Project Structure

```
algospeak-api/
├── api/
│   └── suggest.js       # Main API route
├── .gitignore
├── .env.template        # Example env file (no real key)
├── package.json
└── vercel.json          # Vercel route config
```

---

## 🧪 Example Request

**Endpoint**  
```
POST /suggest
```

**Body**

```json
{
  "word": "sex"
}
```

**Response**

```json
{
  "suggestion": "You could use 'intimacy' instead, which is less likely to be flagged on social media."
}
```

---

## 🚀 Local Setup & Development

### 1. Clone the repository

```bash
git clone https://github.com/your-username/algospeak-api_TMD.git
cd algospeak-api_TMD
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file based on the template:

```bash
cp .env.template .env
```

Edit `.env` to include your OpenAI API key:

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Run locally

```bash
npx vercel dev
```

Your local endpoint will be available at:  
```
http://localhost:3000/suggest
```

---

## ☁️ Deploy to Vercel

1. Log into Vercel (if not already):

```bash
npx vercel login
```

2. Deploy project:

```bash
npx vercel
```

3. Add environment variable (one-time setup):

```bash
npx vercel env add OPENAI_API_KEY
```

4. Deploy production version:

```bash
npx vercel --prod
```

You’ll get a URL like:

```
https://algospeak-xxxxx.vercel.app/suggest
```

---

## 🖥️ Frontend Integration (Framer / React)

### Framer Example (React-style component):

```js
const res = await fetch("https://algospeak-xxxxx.vercel.app/suggest", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ word: "sex" })
});

const data = await res.json();
console.log(data.suggestion);
```

---

## 🧷 Environment Variables

Use `.env.template` as a reference for required secrets.

| Variable         | Description              |
|------------------|--------------------------|
| OPENAI_API_KEY   | Your OpenAI API Key      |

---

## ✅ Best Practices

- Never commit `.env` (it's ignored via `.gitignore`)
- If you accidentally pushed your API key, **revoke it immediately** via [OpenAI dashboard](https://platform.openai.com/account/api-keys)

---

## 📄 License

MIT License

---

## 🙌 Author

Developed by [your-name]  
For more tools like this, visit: [your-website]
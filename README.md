# AI STEM Quiz Generator

AI-powered STEM practice problem generator using Google Gemini API.

## Features

- Generate practice problems for Math, Physics, Chemistry, and Biology
- Customizable topics
- Powered by Google Gemini AI

## Deployment Instructions

This project uses Vercel for serverless backend hosting.

### Prerequisites

1. A Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. A GitHub account
3. A Vercel account (free tier works)

### Deploy to Vercel

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Add serverless backend"
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com)** and sign in with GitHub

3. **Import your GitHub repository**
   - Click "Add New Project"
   - Select your `ai-stem-quiz` repository
   - Click "Import"

4. **Configure Environment Variables**
   - In the project settings, go to "Environment Variables"
   - Add: `GEMINI_API_KEY` with your API key value
   - Click "Save"

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be live at `https://your-project.vercel.app`

### Local Development

If you want to test locally with the serverless function:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Create a `.env` file with your API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. Run locally:
   ```bash
   vercel dev
   ```

4. Open `http://localhost:3000` in your browser

## Project Structure

```
ai-stem-quiz/
├── api/
│   └── generate.js       # Serverless function
├── index.html           # Frontend HTML
├── script.js            # Frontend JavaScript
├── style.css            # Styles
└── vercel.json          # Vercel configuration
```

## How It Works

1. User selects a subject and enters a topic
2. Frontend sends a POST request to `/generate`
3. Vercel serverless function receives the request
4. Function calls Google Gemini API with the prompt
5. AI generates practice problems
6. Results are displayed to the user

import dotenv from 'dotenv'

dotenv.config();

const BASE_URL = "https://openrouter.ai/api/v1/chat/completions"
const MODEL = "deepseek/deepseek-r1-0528:free"
const AUTHORIZATION = process.env.DEEPSEEK_API_KEY
const CONTENT_TYPE =  "application/json"
export async function execPrompt(prompt){
    return await fetch(BASE_URL,{
        method: 'POST',
        headers: {
            "Content-Type": CONTENT_TYPE,
            "Authorization": AUTHORIZATION,
        },
        body: JSON.stringify({
            "model": MODEL,
            "messages":[
                {
                    "role":"user",
                    "content": prompt
                }
            ]
        })
    })
}
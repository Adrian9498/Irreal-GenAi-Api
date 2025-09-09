
import dotenv from 'dotenv'

dotenv.config();

const BASE_URL       = "https://api.openai.com/v1/responses"
const MODEL          =  process.env.OPENAI_MODEL
const CONTENT_TYPE   =  "application/json"
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export async function execPromptOpenAI(prompt,imageUrl){

    return await fetch(BASE_URL,{
        method: 'POST',
        headers: {
            "Content-Type": CONTENT_TYPE,
            "Authorization": OPENAI_API_KEY,
        },
        body: JSON.stringify({
            "model": MODEL,
            "input": [
                        {
                            role: "user",
                            content: [
                                { type: "input_text", text: prompt },
                                { type: "input_image", image_url: imageUrl }
                            ]
                        }
                    ],
            "store": true
        })
    })
}

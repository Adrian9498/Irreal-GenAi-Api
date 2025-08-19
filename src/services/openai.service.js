
const BASE_URL       = "https://api.openai.com/v1/responses"
const MODEL          =  "gpt-4.1-mini"
const CONTENT_TYPE   =  "application/json"

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

import { execPromptOpenAI } from "../services/openai.service.js";

export async function openaiPromptExecution(req,res){
    // The prompt sended by the client
    let {prompt,imageUrl} = req.body;

    //Configuration of deepseek response
    let response = await execPromptOpenAI(prompt,imageUrl)
    response = await response.json();

    //Response from deepseek
    let answer = response.output[0].content[0].text

    // Response to  POST petition
    res.status(200).json({
        "prompt": prompt,
        "answer":answer
    })
}
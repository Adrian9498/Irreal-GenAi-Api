import { execPrompt } from "../services/deepseek.service.js";

export async function deepseekPromptExecution(req,res){
    // The prompt sended by the client
    let {prompt} = req.body;

    //Configuration of deepseek response
    let response = await execPrompt(prompt)
    response = await response.json();

    //Response from deepseek
    let answer = response.choices[0].message.content

    // Response to  POST petition
    res.status(200).json({
        "prompt": prompt,
        "answer":answer
    })
}
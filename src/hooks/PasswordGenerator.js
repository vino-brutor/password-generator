import { useState } from "react";

export default function PasswordGenerator(){
    const [password, setPassword] = useState("")

    function createPassword(passwordSize, setCopyText){
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|:;<>,.?/~`"
        let generatedPassword = ""

        for(let i = 0; i < passwordSize; i++){
            generatedPassword += characters[Math.floor(Math.random() * characters.length)]
        }
        setPassword(generatedPassword)
        setCopyText("Copiar")
    }

    return {password, createPassword}
}
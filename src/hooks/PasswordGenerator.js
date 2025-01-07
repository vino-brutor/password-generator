import { useState } from "react";

export default function PasswordGenerator(setCopy){
    const [password, setPassword] = useState("")

    function createPassword(){
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|:;<>,.?/~`"
        let generatedPassword = ""
        for(let i = 0; i < 10; i++){
            generatedPassword += characters[Math.floor(Math.random() * characters.length)]
        }
        setPassword(generatedPassword)
        setCopy("Copiar")
    }

    return {password, createPassword}
}
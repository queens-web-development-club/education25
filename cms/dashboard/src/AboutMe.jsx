import { useState } from "react"

export default function AboutMe({aboutMe, updateAboutMe}){
    const [input, setInput] = useState(aboutMe)

    function updateInput(evt){
        setInput(evt.target.value)
    }

    return (
        <div>
            <h2>About Me</h2>
            <textarea
            value={input}
            rows={10}
            cols={50}
            onChange={updateInput}
            >
            </textarea>
            <br />
            <button onClick={()=>updateAboutMe(input)}>Update</button>
        </div>
    )
}
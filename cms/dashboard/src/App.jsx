import { useState, useEffect } from "react"
import AboutMe from "./AboutMe"
import axios from "axios"
import Contacts from "./Contacts"

export default function App(){
    const [content, setContent] = useState()
    const [contacts, setContacts] = useState()
    useEffect(()=>{
        axios.get("http://localhost:3000/contents")
        .then((res)=>{
            setContent(res.data)
        })
        axios.get("http://localhost:3000/contacts")
        .then((res)=>{
            setContacts(res.data)
        })
    }, [])

    function updateAboutMe(newAboutMe){
        axios.post("http://localhost:3000/contents", {
            ...content,
            aboutMe: newAboutMe
        })
    }

    if (!content || !contacts){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <AboutMe aboutMe={content.aboutMe} updateAboutMe={updateAboutMe}/>
            <Contacts contacts={contacts}/>
        </div>
    )
}
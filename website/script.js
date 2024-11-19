async function loadContent(){
    const res = await fetch("https://server-cool-glade-3651.fly.dev/contents")
    const content = await res.json()
    document.querySelector("#description").textContent = content.aboutMe

    const languagesElement = document.querySelector("#language-list")
    const technologiesElement = document.querySelector("#tech-list")
    const developerToolsElement = document.querySelector("#devtools-list")

    fillLi(languagesElement, content.languages)
    fillLi(technologiesElement, content.technologies)
    fillLi(developerToolsElement, content.developerTools)
}
function fillLi(ul, items){
    items.forEach((item)=>{
        li = document.createElement("li")
        li.textContent = item
        ul.appendChild(li)
    })
}

loadContent()

function submitForm(){
    const form = document.querySelector("#form")
    const formData = new FormData(form)
    fetch("https://server-cool-glade-3651.fly.dev/contacts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            subject: formData.get("subject")
        })
    })
    form.reset()
}
async function loadContent(){
    const res = await fetch("http://localhost:3000/info")
    const content = await res.json()
    console.log(content)
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
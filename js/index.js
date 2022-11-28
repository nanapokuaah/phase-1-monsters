document.addEventListener("DOMContentLoaded"),() =>{
const monsterContainer = document.getElementById("monster-container")
const backButton = document.getElementById('back')
const forwardButton = document.getElementById('forward')
const formContainer = document.getElementById('create-monster')
let pageNum = 20

const monsterForm = document.createElement("form")
monsterFrom.innerHTML = `
<label>Name</label>
<input type= "text" id= "monster-name"/>
<label>age</label>
<input type ="text" id = monster-age/>
<label>Description</label>
<input type= "text" id= "monster-description"/>
<input type="submit" id= "monster-submit"/>Create Monster! 
`
formContainer.append(monsterForm)

monsterForm.addEventListener("submit", (event) => {
event.preventDefault()
fetch("http://localhost:3000/monsters", {
    method: "POST"
    headers: {"Accept": "application/json",
         "Content-type": "application/json"}
         body:JSON.stringify {
            name: document.getElementById('monster-name').value
            age: document.getElementById('monster-age').value
            description: document.getElementById('monster-description').value
         })
    })
})

fetch (`http://localhost:3000/monsters/?_limit=50&_page=${pageNum}`)
.then (response => response.json())
.then((monsters) => {
    monsterContainer.innerHTML = `On Page${pageNum}`
    monsters.forEach((monster) =>{
    monsterContainer.append(renderMonster(monster), document.createElement("hr")
    })
})

backButton.addEventListener("click", () =>{
    if(pageNum ===1){
        window.alert("No more Monsters that way:( ")
    } else {
        pageNum -= 1
fetch (`http://localhost:3000/monsters/?_limit=50&_page=${pageNum}`)
.then (response => response.json())
.then((monsters) => {
    monsterContainer.innerHTML = `On Page${pageNum}`
    monsters.forEach((monster) =>{
    monsterContainer.append(renderMonster(monster), document.createElement("hr")
    })
  })
    }
})

forwardButton.addEventListener("click",() => {
    pageNum += 1
    fetch (`http://localhost:3000/monsters/?_limit=50&_page=${pageNum}`)
    .then (response => response.json())
    .then((monsters) => {
        if (monsters.length === 0 {
            pageNum -= 1
            window.alert ("No more Monsters Back here :(")
        }else{
        }
        monsterContainer.innerHTML = `On Page${pageNum}`
        monsters.forEach((monster) =>{
        monsterContainer.append(renderMonster(monster), document.createElement("hr")
        })
    })
  
    backButton.addEventListener("click", () =>{=

        forwardButton.addEventListener("click", () => {=
    
function renderMonster(monster){
    const monsterSpan = document.createElement("span")
    monsterSpan.innerHTML = `
        <h1>${monster.name}</h1>
        <h4>${monster.age}</h4>
        <p>Description:${monster.description}</p>
    `
    monsterSpan.setAttribute("data-id", monster.id)
    monsterSpan.style.color = "red"
    return monsterSpan
}
    })
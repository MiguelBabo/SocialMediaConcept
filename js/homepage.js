const username = document.getElementById("username")
const textBox = document.getElementById("textBox")
const okButton = document.getElementById("okButton")

username.innerText = "@" + localStorage.getItem("username") 

function saveAbout(){
    let about = textBox.value

    localStorage.setItem("userbio", about)
}

okButton.addEventListener('click', saveAbout)
textBox.value = localStorage.getItem("userbio")
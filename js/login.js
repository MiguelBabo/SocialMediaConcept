const userNameInput = document.getElementById("username")
const submitUsername = document.getElementById("submitUsername")

const errorMsg = document.getElementById("error")

function login(){
    if(userNameInput.value === ""){
        errorMsg.style.display = "block"
    }else{
        errorMsg.style.display = "none"

        localStorage.setItem("username", userNameInput.value)
        window.location.href = "homepage.html"
    }
}

submitUsername.addEventListener('click', login)
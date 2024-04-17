
//Bio elements ----------------------------------------
const username = document.getElementById("username")
const textBox = document.getElementById("textBox")
const okButton = document.getElementById("okButton")
//Bio elements ----------------------------------------

//Post Section Elements ----------------------------------------
const postsSection = document.getElementById("posts")
const emptyAdv = document.getElementById("empty")
//Post Section Elements ----------------------------------------

//Create Post Elements ----------------------------------------
const createPost = document.getElementById("createPost")
const writePost = document.getElementById("writePost")
const postIpt = document.getElementById("postIpt")
const postBtn = document.getElementById("postBtn")
//Create Post Elements ----------------------------------------

let isClicked = false
var likes = 0
let liked = false
var posts = document.getElementsByClassName("post")

writePost.addEventListener("click", () => {
    if(isClicked == false){
      isClicked = true
      writePost.style.color = "#3880ff"
      createPost.style.display = "flex"
      createPost.animate([ { opacity: "0", }, { opacity: "1", } ], {duration: 400, iterations: 1,},)
    }else{
      isClicked = false
      writePost.style.color = "#fff"
      // createPost.animate([ { opacity: "0", }, { opacity: "1", } ], {duration: 750, iterations: 1,},)
      createPost.style.display = "none"
    }
})

function addPost(){
   if(postIpt.value !== ""){

      const post = document.createElement("div")
      post.className = "post"
      
      post.innerHTML = `
      <div>
         <h1>Miguel</h1>
         <p>asd</p>
      </div>
      <hr>
      <div id="likes">
         <div id="cont">
            <h2 id="likesQtt">0</h2>
         </div>
      `

      postIpt.value = ""
      postsSection.appendChild(post)

      const deleteButton = document.createElement('button') 
      deleteButton.id = "delete"
      deleteButton.innerHTML = '<ion-icon name="trash-outline" size="large" id="delete"></ion-icon>'
      deleteButton.addEventListener("click", function(){
         postsSection.removeChild(post)
      })
      document.getElementById("likes").appendChild(deleteButton)

      const likeButton = document.createElement('button')
      likeButton.id = "like"
      likeButton.innerHTML = '<ion-icon name="heart-outline" size="large"></ion-icon>'
      likeButton.addEventListener("click", function() {
         

         if(!liked){
            liked = true
            likes += 1
            likeButton.innerHTML = '<ion-icon name="heart" size="large"></ion-icon>'
            document.getElementById("likesQtt").innerText = likes
         }else{
            liked = false
            likes -= 1
            likeButton.innerHTML = '<ion-icon name="heart-outline" size="large"></ion-icon>'
            document.getElementById("likesQtt").innerText = likes
         }  
      })
      document.getElementById("cont").appendChild(likeButton)
   }
}

function checkPosts(){
   if(posts.length > 0 )/* Se existir posts, mostrar aviso de vazio */{
      emptyAdv.style.display = "none"
   }else if(posts.length <= 0)/* se não existir posts, mostrar o aviso */{
      emptyAdv.style.display = "flex"
   }
}

window.addEventListener("DOMContentLoaded", checkPosts)
window.addEventListener("DOMNodeInserted", checkPosts)

function writeBio(){
   sessionStorage.setItem("userbio", textBox.value)
}

username.innerText = "@" + sessionStorage.getItem("username") 
okButton.addEventListener("click", writeBio)
postBtn.addEventListener("click", addPost)

textBox.value = sessionStorage.getItem("userbio")

var form = document.getElementById("myForm")

form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value
    
    var originalName = search.split(' ').join('')

    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("resultProfile").innerHTML = `
        <img src="${data.avatar_url}"
        <br><br>
        <p class="name">${data.name}</p>
        <p>${data.bio}</p>
        <p>${data.email}</p>
        <p>Public Repo:- ${data.public_repos}</p>

        `

    })
})
//* get username
let UN_DATA_0 = null
let usernames_0 = []
let usernames_0_length = 0
let current_username_0 = 1
fetch('https://script.google.com/macros/s/AKfycbxNz5hGUhVik5V7GSSAB99YvdAp-WX_kAq2w4JJxPonazKkRUE9qy1xAUGHtK-h1CrX/exec')
.then(res => res.json())
.then(data => {
    UN_DATA_0 = data
    usernames_0_length = UN_DATA_0.content.length

    for(let io = 0; io < UN_DATA_0.content.length; io++){
        usernames_0[io] = UN_DATA_0.content[io+1][0]
        current_username_0 = io
    }
})


let user_count = 0
let user_number = 0
let  user_found = false
const identifyUserAccount = (user) => {
    document.getElementsByClassName("fa fa-search")[1].style.color = "rgb(102, 102, 102)"
    document.getElementsByClassName("resultbar-out")[0].style.display = "none"
    document.getElementsByClassName("searchbar-button-out")[0].style.borderBottomRightRadius = "25px"
    document.getElementsByClassName("searchbar-button-out")[0].style.borderBottomLeftRadius = "0px"
    document.getElementsByClassName("searchbar-out")[0].style.borderBottomLeftRadius = "25px"
    document.getElementsByClassName("searchbar-out")[0].style.borderBottomRightRadius = "25px"
    while(user_found == false){
        if(usernames_0[user_count] === user){
            user_number = user_count + 1
            openUserAccount(user_number)
            return
        }else{
            user_count++
        }
    }
    console.log(user_number)
    
}
const openUserAccount = (user_id) => {
    var PROFILE_IMAGE = document.getElementsByClassName("userdetails-dp")[0]
    var DETAILS = document.getElementsByClassName("userdetails-name")[0]
    var LOVERS = document.getElementsByClassName("userdetails-list-item-a")[0]
    var LOVING = document.getElementsByClassName("userdetails-list-item-a")[1]
    var UPLOADS = document.getElementsByClassName("userdetails-list-item-a")[2]
    var first_name = "Accessing"
    var last_name = "Data..."
    var about = "Loading about..."
    var username = "Loading username..."
    var profile_photo = "..."
    first_name = UN_DATA_0.content[user_id][2]
    last_name = UN_DATA_0.content[user_id][3]
    about = UN_DATA_0.content[user_id][9]
    username = UN_DATA_0.content[user_id][0]
    profile_photo = UN_DATA_0.content[user_id][10]
    PROFILE_IMAGE.src = profile_photo
    DETAILS.innerHTML = `
    <h2>${first_name+" "+last_name}</h2>
    <h3>${about}</h3>
    <h4>@${username}</h4>`
    LOVERS.innerHTML = UN_DATA_0.content[user_id][11] + "<br> Lovers"
    LOVING.innerHTML = UN_DATA_0.content[user_id][12] + "<br> Loving"
    UPLOADS.innerHTML = UN_DATA_0.content[user_id][13] + "<br> Uploads"
}
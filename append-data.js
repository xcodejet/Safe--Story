
//* get data
let first_name = "Accessing"
let last_name = "Data..."
let about = "Loading about..."
let username = "Loading username..."
let profile_photo = "..."
let APP_DATA = null
fetch('https://script.google.com/macros/s/AKfycbxNz5hGUhVik5V7GSSAB99YvdAp-WX_kAq2w4JJxPonazKkRUE9qy1xAUGHtK-h1CrX/exec')
.then(res => res.json())
.then(data => {
    APP_DATA = data
    first_name = APP_DATA.content[1][2]
    last_name = APP_DATA.content[1][3]
    about = APP_DATA.content[1][9]
    username = APP_DATA.content[1][0]
    profile_photo = APP_DATA.content[1][10]
    appendData()
})
//APP_DATA = APP_DATA.content


function getdata(){

}
const appendData = () => {
    document.getElementById('profile-1').src = profile_photo
    document.getElementById('icon').href = profile_photo
    document.getElementById('title').innerHTML = first_name + " | Safe Story"
    document.getElementsByClassName("settings-dp")[0].src = profile_photo
    document.getElementsByClassName("settings-name")[0].innerHTML = `
    <h2>${first_name+" "+last_name}</h2>
    <h3>${about}</h3>
    <h4>@${username}</h4>`

}
const addProfileImg1 = (element) => {
    //element.src = 
    document.getElementById('profile-1').src = "./System/no-profile-image.png"
    document.getElementsByClassName("settings-dp")[0].src = "./System/no-profile-image.png"
}
getdata()
addProfileImg1()
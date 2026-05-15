export function saveUsers(user){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find(u => u.username === user.username)

    if(exists){
return {success: false}
    }
    if(user.role.includes("teacher")){
        user.status="pending"
        user.course=""
    }
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
return{success: true}
}
export function getUsers(){
    return JSON.parse(localStorage.getItem("users")) || []
}
export function loginUser(username, password) {
    const users = getUsers();
    const user = user.find(u => u.username ===username && u.password ===password)

if(user){
    localStorage.setItem("loggedUser",
        JSON.stringify(user))
        return user
}
return null
}
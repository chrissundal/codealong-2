function updateHomeView(){
    document.getElementById('app').innerHTML = `
    ${createFriend()}
    ${model.app.showInfo}
    <button onclick="registerUser()">Legg til venn</button>
    `;
}
function createFriend(){
    let html='';
    for(let user of model.data.users){
        html += `
        ${user.name}
        ${user.info}
        <img src="${user.image}">
        <button onclick="goFriendPage(${user.userId})">go</button>
        `;
    }
    return html;
}

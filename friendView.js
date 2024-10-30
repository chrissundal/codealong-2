function updateFriendView(){
    document.getElementById('app').innerHTML = `
    <h3>friend ${model.data.users[model.app.selectedFriend].name}</h3>
    `;
}
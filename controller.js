function goHomePage(){
    model.app.currentPage = model.app.pages[0]
    changeView();
}
function registerUser(){
    model.app.showInfo = `
    <input type="text" onchange="model.input.register.name=this.value">
    <input type="text" onchange="model.input.register.info=this.value">
    <input type="file">
    <button onclick="addUser()">legg til</button>
    `;
    changeView();
}
function addUser(){
    model.data.users.push(
        {
            userId: model.data.users.length,
            name: model.input.register.name,
            image: '',
            info: model.input.register.info,
            password: '',
            friends: []
        }
    )
    model.app.showInfo = '';
    changeView();
}
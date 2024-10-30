function goFriendPage(userId){
    model.app.selectedFriend = userId;
    model.app.currentPage = model.app.pages[1]
    changeView();
}
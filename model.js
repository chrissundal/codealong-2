let model = {
    app: {
        pages: ["mainPage","friendPage"],
        currentPage: "mainPage",
        selectedFriend: 0, 
        showInfo: '',
    },
    input: {
        register: {
            name: '',
            image: '',
            info: '',
            password: '',
        },
        
    },
    data: {
        users: [
            {
                userId: 0,
                name: "chris",
                image: '',
                info: "hei jeg heter chris",
                password: "123",
                friends: []
            },
            {
                userId: 1,
                name: "frank",
                image: '',
                info: "hei jeg heter chris",
                password: "123",
                friends: []
            },
            {
                userId: 2,
                name: "bjarne",
                image: '',
                info: "hei jeg heter chris",
                password: "123",
                friends: []
            },
        ]
    }
    
}
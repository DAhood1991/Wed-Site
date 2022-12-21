type DialogsDataType = {
    name: string
    id: number
}
export type MessageDataType = {
    id: number
    message: string
}
export type TypePosts = {
    id: number
    message: string
    likeCount: number
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messageData: Array<MessageDataType>
}
export type ProfilePageType ={
    posts:Array<TypePosts>
}
export type RootStateType ={
    ProfilePage:ProfilePageType
    DialogsPage:DialogsPageType
    sidebar:SidebarType
}
type SidebarType={
}
export let state:RootStateType = {
    ProfilePage: {
        posts: [
            {id: 1, message: "YI", likeCount: 22},
            {id: 2, message: "man", likeCount: 24},
            {id: 3, message: "how are you", likeCount: 28},
            {id: 4, message: "fine", likeCount: 29},
            {id: 5, message: "back me", likeCount: 26},
        ]
    },
    DialogsPage: {
        dialogsData: [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Dndrey"},
            {id: 3, name: "Fndrey"},
            {id: 4, name: "Indrey"},
            {id: 5, name: "Wndrey"},
        ],
        messageData: [
            {id: 1, message: "YI"},
            {id: 2, message: "man"},
            {id: 3, message: "how are you"},
            {id: 4, message: "fine"},
            {id: 5, message: "back me"},
        ],


    },
    sidebar:{},
}
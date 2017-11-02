import * as firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDI43g1tBe7_9oa3Yns-JKcQBeZsUfzuKI",
    authDomain: "lesson-chat.firebaseapp.com",
    databaseURL: "https://lesson-chat.firebaseio.com",
    projectId: "lesson-chat",
    storageBucket: "",
    messagingSenderId: "433814877969"
};

export const fire = firebase.initializeApp(config)

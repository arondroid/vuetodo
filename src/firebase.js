// import firebase from 'firebase/app'
// This import loads the firebase namespace.
import firebase from 'firebase/app'
// import 'firebase/storage';     // for storage
// import 'firebase/database';    // for realtime database
import 'firebase/firestore';

import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyD1EHvxgzKDWz7yxusraYgAkzTTxOgzLcA",
    authDomain: "vue3-crud-9ad67.firebaseapp.com",
    projectId: "vue3-crud-9ad67",
    storageBucket: "vue3-crud-9ad67.appspot.com",
    messagingSenderId: "849150453106",
    appId: "1:849150453106:web:20012a46d88f062bef29eb",
    measurementId: "G-5LM55VEF8J"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}


export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}

// where("status", "==","1")


import { getUsers, addUser } from './user.js'
import vue from 'vue'

console.log(getUsers())

addUser('X')

console.log(getUsers())

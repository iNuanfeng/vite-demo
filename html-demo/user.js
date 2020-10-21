const users = ['A', 'B', 'C']

export const getUsers = function () {
  return users
}

export const addUser = function (name) {
  users.push(name)
  return users
}
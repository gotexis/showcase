const id2user = (id, friends) => {
  return friends.filter(t => t.id == id)[0]
}

export {id2user}

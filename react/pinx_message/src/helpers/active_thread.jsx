const id2thread = (id, threads, pm = false) => {
  let thread
  switch (pm) {
    case false:
    default:
      thread = threads.filter(t => t.id == id)[0]
      break
    case true:
      thread = threads.filter(t => t.type == 2 &&
        (t.user.some(user => user.id == id))
      )[0]
  }
  return thread
}

export {id2thread}

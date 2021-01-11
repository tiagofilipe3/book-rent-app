const randomID = () => {
  return Number(Math.random().toString().substr(2, 4))
}

export { randomID }

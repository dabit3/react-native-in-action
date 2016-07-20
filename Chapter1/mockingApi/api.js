export default {
  getName () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('nader dabit')
      }, 3000)
    })
  }
}

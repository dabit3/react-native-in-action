export default {
  getName: function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('nader dabit')
      }, 3000)
    })
  }
}

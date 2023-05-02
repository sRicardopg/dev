async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
  }
  
  const generator = anotherGenerator()
  generator.next().then(response => console.log(response.value))
  generator.next().then(response => console.log(response.value))
  generator.next().then(response => console.log(response.value))

  async function forAwait() {
    const names = ["Alejandra", "Oscar", "David"]
    for await (let valor of names) {
      console.log(valor)
    }
  }
  
  forAwait()
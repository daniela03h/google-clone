document
  .querySelector('#search-button')
  .addEventListener('click', () => {
    const busqueda = document.querySelector('input')
    if(busqueda.value.trim() !== '') {
      window.location = `https://google.com.co/search?q=${busqueda.value.trim().replace(/ /g, '+')}`
    }
  })

document
  .querySelector('input')
  .addEventListener('keyup', event => {
    if(event.key === 'Enter') {
      event.preventDefault()
      document.querySelector('#search-button').click()
    }
  })
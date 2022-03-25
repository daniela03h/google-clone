const $searchButton = document.querySelector('#search-button')
const $searchText = document.querySelector('#search-text')

$searchButton.addEventListener('click', executeSearch)
$searchText.addEventListener('keyup', executeSearchOnEnter)

function executeSearch() {
  let query = $searchText.value
  if (query !== '') {
    query = query.trim().replace(' ', '+')

    window.location = `https://www.google.com/search?q=${query}`
  }
}

function executeSearchOnEnter(event) {
  let ENTER = 13
  if (event.keyCode === ENTER) {
    executeSearch()
  }
}
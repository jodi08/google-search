const form = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';

function submitted(event) {
  event.preventDefault();
  const url = google + '+' + q.value;//add + site + where the '+' is
  const win = window.open(url, '_blank');
  win.focus();
  q.value = ''
}

form.addEventListener('submit', submitted)

//https://pagedart.com/blog/how-to-add-a-search-bar-in-html/ 
//instructions to add website search
//const site = 'pagedart.com';
let btn = document.getElementById('menu')
let links = document.getElementById('links')
let flag = false
if (btn) {
  btn.addEventListener('click', e => {
    e.preventDefault()
    if (flag === false) {
      links.className = 'links two'
      flag = true
    } else {
      links.classList.remove('two')
      links.className = 'links one'
      flag = false
    }
  })
}

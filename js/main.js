function copyToClipboard() {
  // Get the text from code element
  let key = document.getElementById('key')
  let text = key.innerText
  // Copy the text inside the text field
  navigator.clipboard.writeText(text)
  let button = document.getElementById('button')
  button.firstChild.data = 'kopiert...'
  button.disabled = true
  setTimeout(() => {
    button.firstChild.data = 'in die Zwischenablage kopieren'
    button.disabled = false
  }, 3000)
}

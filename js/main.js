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

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active')
  }

  function closeModal($el) {
    $el.classList.remove('is-active')
  }

  function closeAllModals() {
    ;(document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal)
    })
  }

  // Add a click event on buttons to open a specific modal
  ;(document.querySelectorAll('.js-modal-trigger') || []).forEach(
    ($trigger) => {
      const modal = $trigger.dataset.target
      const $target = document.getElementById(modal)

      $trigger.addEventListener('click', () => {
        openModal($target)
      })
    }
  )

  // Add a click event on various child elements to close the parent modal
  ;(
    document.querySelectorAll(
      '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest('.modal')

    $close.addEventListener('click', () => {
      closeModal($target)
    })
  })

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals()
    }
  })
})

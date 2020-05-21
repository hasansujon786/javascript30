const inputs = document.querySelectorAll('.controls input')

function handaleUpdate() {
  let suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('input', handaleUpdate))

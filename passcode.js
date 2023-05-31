
function onkeydown(e) {
  log(`onchange: ${e.target.tabIndex}, key: ${e.key} , key: ${e.code}`)
  const key = e.key
  const code = e.code
  const tabIndex = e.target.tabIndex
  if (
    (code === 'Backspace' || code === 'Delete') 
    && tabIndex > 1 
    && e.target.value === ''
  ) {
    // 后退
    document.getElementById(`${tabIndex - 1}`).focus()
  }
}

function oninput(e) {
  log(`oninput: ${e.target.tabIndex}, ${e.target.value}`)
  const value = e.target.value
  const tabIndex = e.target.tabIndex
  const inputType = e.inputType
  if (/\d/.test(value) && tabIndex < 6) {
    document.getElementById(`${tabIndex + 1}`).focus()
  }
}
document.onload = () => {
for (let i = 1; i <= 6; i++) {
  let tmp = document.getElementById(`${i}`)
  tmp.onkeydown = onkeydown
  tmp.oninput = oninput
}
document.getElementById(`1`).focus()
}

function log(string) {
  const log = document.getElementById('log')
  log.innerHTML += `<div>${string}</div>`
}

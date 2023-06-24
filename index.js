let saveEl = document.getElementById("save-el")
let saveEl2 = document.getElementById("save-el2")
let countEl = document.getElementById("count-el")
let count = 0
let dcount=1
function increment() {
    count += 1
  
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    let countStr1 = dcount + " - "
    dcount+=1
    saveEl2.textContent += countStr1
    countEl.textContent = 0
    count = 0
}

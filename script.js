let positive = 1
let first = 8
let second = 3
let total = 0

document.getElementById('button').addEventListener('click', intergers)

function intergers () {
  first = document.getElementById('math').value
  second = document.getElementById('answer').value
  first = parseInt(first)
  second = parseInt(second)
  if (first < 0) {
    first = first * -1
    positive = positive * -1
  }
  if (second < 0) {
    second = second * -1
    positive = positive * -1
  }
  for (first; first > 0; first--) {
    total = total + second
  }
  total = positive * total
  alert(total)
}

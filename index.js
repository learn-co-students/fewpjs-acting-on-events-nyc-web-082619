// Your code here 
let dodger = document.getElementById('dodger')
console.log(dodger.style)

dodger.style.backgroundColor= '#FF69B4'

console.log(dodger.style.left)
console.log(dodger.style.bottom)
 
function moveDodgerLeft(){
    dodger.style.left = '100px'
}

function moveDodgerRight(){
    dodger.style.right = '100px'
}

let colorEl = document.getElementById("color").value
colorEl = colorEl.replace("#", "")
let selectElval = document.getElementById("mode").value
const btnEl = document.getElementById("btn")
let images= document.getElementById("container")
let hexEl= document.getElementById("hex")


function render(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorEl}&mode=${selectElval}&count=5`,{method:"GET"})
    .then(res=>res.json())
    .then(data=>{console.log(data)
    images.innerHTML=""
    hexEl.innerHTML=""
    console.log(data.image.bare)
    let im=data.image.bare
    let colorsArray = data.colors
    images.innerHTML=`<img id="immg" src=${im}>`
    for (let i in colorsArray){
        
        hexEl.innerHTML+=`<p>${colorsArray[i].hex.value}</p>`

    }
})
}  

document.getElementById("mode").addEventListener("change",function(){
    selectElval = document.getElementById("mode").value
    
})

document.getElementById("color").addEventListener("change",function(){
    colorEl= document.getElementById("color").value
    colorEl = colorEl.replace("#", "")
    console.log(colorEl)
})

render()
btnEl.addEventListener("click",function(){

    render()
    
})







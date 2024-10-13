function volume_sphere(event) {
    //Write your code here
event.preventDefault()
	
  let radius = document.querySelector(`#radius`).value

	radius = parseFloat(radius)
if(isNaN(radius) || radius < 0){
	 document.querySelector(`#volume`).value = `NaN`
}else{
	let volume = (4/3)*Math.PI*Math.pow(radius,3)
	volume = volume.toFixed(4)
	document.querySelector(`#volume`).value = volume
}
} 

window.onload = function(){ document.getElementById('MyForm').onsubmit = volume_sphere}
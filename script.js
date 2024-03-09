//your JS code here. If required.
let first = null
let second = null
let third = null
const allInputs = document.querySelectorAll('.toggle')
allInputs.forEach(input=>{
	input.addEventListener('click', e=>{
		if(!first && !second && !third) {
			first = e.target
		}	
		else if(!second && !third){
			second = e.target
		}
		else if(!third) {
			third = e.target
			first.checked= false 
			first = second
			second = third 
			third = null		 
		}
	})
})
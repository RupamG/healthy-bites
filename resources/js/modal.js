document.getElementById('bt').addEventListener("click", function() {
	setTimeout(
		function() {
			document.querySelector('.bg-modal').style.display = "flex";
		},
		250);
	
});

document.querySelector('.close').addEventListener("click", function() {
	setTimeout(function(){
		document.querySelector('.bg-modal').style.display = "none";
	}, 250)
	
});
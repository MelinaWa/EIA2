namespace Aufg0 {
      
var i : string ="";
        
	function hallo() {
        var i = prompt("Wie heisst du?");
        var node : any = document.getElementById("cont");
        node.innerHTML += "Hallo ";
        node.innerHTML += i;
        node.innerHTML += ", schoen dich zu sehen.";
        console.log("Hallo",i,", schoen dich zu sehen.");
        }
    
    document.addEventListener('DOMContentLoaded',hallo);
}
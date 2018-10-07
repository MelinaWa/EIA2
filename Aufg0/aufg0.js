var i = "";
function main() {
    var i = prompt("Wie heisst du?");
    var node = document.getElementById("cont");
    node.innerHTML += "Hallo ";
    node.innerHTML += i;
    node.innerHTML += ", schoen dich zu sehen.";
    console.log("Hallo", i, ", schoen dich zu sehen.");
}
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=aufg0.js.map
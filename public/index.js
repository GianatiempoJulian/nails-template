var btn = document.getElementById('btn-action');
var text = document.getElementById('text');


btn.addEventListener('click', function() {
    if (text.textContent == "17.00 hrs") {
        text.textContent = "RESERVADO";
    } else {
        text.textContent = "17.00 hrs";
    }
});
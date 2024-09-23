
// ---------------modal one-------------------//

document.getElementById("donate-btn-noyakhali").addEventListener('click', function () {
    document.getElementById('Noakhali-modal').classList.remove("hidden");
});

document.getElementById('noakhali-modal-off').addEventListener('click', function(){
    document.getElementById('Noakhali-modal').classList.add('hidden');
})
// ------------- modal 2 -----------------------//

document.getElementById("donate-btn-feni").addEventListener('click', function () {
    document.getElementById('feni-modal').classList.remove("hidden");
});

document.getElementById('feni-modal-off').addEventListener('click', function(){
    document.getElementById('feni-modal').classList.add('hidden');
})

// --------------modal 3--------------------//

document.getElementById("donate-btn-quota").addEventListener('click', function () {
    document.getElementById('quota-modal').classList.remove("hidden");
});

document.getElementById('quota-modal-off').addEventListener('click', function(){
    document.getElementById('quota-modal').classList.add('hidden');
})

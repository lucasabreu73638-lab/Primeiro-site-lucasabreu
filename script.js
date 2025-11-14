// script.js
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');
const listItems = resultsList.querySelectorAll('li');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); 

    listItems.forEach(item => {
        const itemText = item.textContent.toLowerCase(); 

        if (itemText.includes(searchTerm)) {
            item.style.display = 'block'; 
        } else {
            item.style.display = 'none'; 
        }
    });
});
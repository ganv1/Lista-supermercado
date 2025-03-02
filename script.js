const categorias = ['frutas', 'lácteos', 'congelados', 'dulces', 'verduras', 'carnes', 'pastas'];
let shoppingList = [];

function addItemToList() {
    const itemName = prompt('¿Qué alimento deseas agregar?');
    if (itemName) {
        const category = prompt(`¿En qué categoría se encaja "${itemName}"? Las opciones son: ${categorias.join(', ')}`);
        if (categorias.includes(category)) {
            shoppingList.push({ name: itemName, category: category });
            askToAddMore();
        } else {
            alert('Categoría no válida. Inténtalo de nuevo.');
            addItemToList();
        }
    }
}

function askToAddMore() {
    const answer = prompt('¿Deseas agregar otro alimento a tu lista de compras? (si/no)').toLowerCase();
    if (answer === 'si') {
        addItemToList();
    } else if (answer === 'no') {
        showShoppingList();
    } else {
        alert('Respuesta no válida. Inténtalo de nuevo.');
        askToAddMore();
    }
}

function showShoppingList() {
    const listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '<h2>Tu Lista de Compras</h2>';
    categorias.forEach(category => {
        const itemsInCategory = shoppingList.filter(item => item.category === category);
        if (itemsInCategory.length > 0) {
            const categoryHeader = document.createElement('h3');
            categoryHeader.textContent = category;
            listContainer.appendChild(categoryHeader);
            const ul = document.createElement('ul');
            itemsInCategory.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.name;
                ul.appendChild(li);
            });
            listContainer.appendChild(ul);
        }
    });
}

document.getElementById('startButton').addEventListener('click', () => {
    addItemToList();
});

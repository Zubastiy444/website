// Функция для отображения избранных товаров в виде таблицы
function displayFavorites() {
    // Получаем список избранных товаров из локального хранилища
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let favoritesTable = document.getElementById('favorites-table');

    // Очищаем таблицу перед добавлением новых товаров
    favoritesTable.innerHTML = '<tr><th>Название</th><th>Цена</th><th>Действие</th></tr>';

    // Выводим каждый избранный товар в виде строки таблицы
    favorites.forEach(function (item) {
        let row = favoritesTable.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellPrice = row.insertCell(1);
        let cellAction = row.insertCell(2);

        cellName.textContent = item.name;
        cellPrice.textContent = item.price;
        cellAction.innerHTML = '<button onclick="removeFromFavorites(\'' + item.name + '\')">Удалить</button>';
    });
}

// Функция для удаления товара из избранного
function removeFromFavorites(name) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Удаляем товар из списка по имени
    favorites = favorites.filter(item => item.name !== name);

    // Обновляем данные в локальном хранилище
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Повторно отображаем избранные товары после удаления
    displayFavorites();
}

// Вызываем функцию отображения избранных товаров на загрузке страницы
displayFavorites();
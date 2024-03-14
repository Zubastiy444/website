// Функция для добавления товара в избранное
function addToFavorites(name, price) {
    // Получаем текущий список избранных товаров из локального хранилища, если он существует
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Добавляем новый товар в список избранных
    favorites.push({ name: name, price: price });
    
    // Обновляем данные в локальном хранилище
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Выводим сообщение о добавлении товара в избранное на странице
    alert('Товар добавлен в избранное: ' + name);
}

cartItems = [];
function addItem(itemId) {
	var cart = document.getElementById('cart');
	// Check if item is already in my cart
	var hasItem = false;
	cartItems.forEach(function (cartItemId) {
		if (cartItemId === itemId) {
			hasItem = true;
		}
	});
	if (hasItem) {
		return;
	}
	cartItems.push(itemId);
	// Create an element for the new item in the cart
	var newItem = document.createElement('div');
	newItem.id = 'cart' + itemId;
	// Create an image for the item
	var newItemImg = document.createElement('img');
	newItemImg.src = itemId + '.jpg';
	newItemImg.height = 50;
	newItemImg.width = 50;
	var removeItemButton = document.createElement('button');
	removeItemButton.classList.add('remove-item-button');
	removeItemButton.textContent = 'Remove';
	removeItemButton.onclick = function () {
		removeItem(itemId);
	};

	// Add the elements
	newItem.append(newItemImg);
	newItem.append(itemId);
	newItem.append(removeItemButton);
	cart.append(newItem);
}

function removeItem(itemId) {
	var indexOfItem = cartItems.indexOf(itemId);
	if (indexOfItem < 0) {
		return;
	}
	cartItems.splice(indexOfItem, 1);
	var item = document.getElementById('cart' + itemId);
	item.remove();
}
function setup() {
	var allItems = document.querySelectorAll('input');
	allItems.forEach(function (item) {
		var itemButton = document.getElementById(item.id);
		itemButton.onclick = function () {
			addItem(item.id);
		};
	});
}
setup();

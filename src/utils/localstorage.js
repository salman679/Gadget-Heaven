// get from local storage
export function getLocalItem(itemName) {
  const item = localStorage.getItem(itemName);
  const data = JSON.parse(item);
  if (data) {
    return data;
  } else {
    return [];
  }
}
// add on local storage
export function addLocalItem(itemName, item) {
  const allItem = getLocalItem(itemName);
  const filteredItem = allItem.find(
    (findItem) => findItem.product_id == item.product_id
  );

  if (filteredItem) {
    return;
  } else {
    allItem.push(item);

    localStorage.setItem(itemName, JSON.stringify(allItem));
  }
}

// remove from local storage
export function removeLocalItem() {
  localStorage.removeItem("cart");
  localStorage.removeItem("favorite");
}

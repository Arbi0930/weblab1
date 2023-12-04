// GET count of orders
export const getOrdersCount = () => {
  return fetch(`http://localhost:8000/orders/count`, {
    method: "GET",
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const getAllOrders = (userId) => {
  return fetch(`http://localhost:8000/user/${userId}/get/orders`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => err);
};

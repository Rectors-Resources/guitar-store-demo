export const allProductsLoader = () => {
    return fetch("../../../public/products.json")
      .then((data) => {
        return data.json();
      })
      .then((cleanData) => cleanData )
      .catch((e) => console.log(e));
}
export const allProductsLoader = () => {
    return fetch("../../../products.json")
      .then((data) => {
        return data.json();
      })
      .then((cleanData) => cleanData )
      .catch((e) => console.log(e));
}
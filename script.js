// let goods = document.getElementById("showProducts");
let goods = document.getElementById("showProducts");
let result = ""; 
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
   
    for (let i = 0; i < data.products.length; i++) {
      const product = data.products[i];
      
      result += `
        <div class="card">
          <div class="im"><img src="${product.images[0]}" alt="${product.brand}"></div>
          <p class="bran"><span>Brand: </span>${product.brand}</p>
          <p class="ta"><span>Tags: </span>${product.tags.join(", ")}</p>
          <p class="des"><span>Description: </span>${product.description}</p>
          <p class="pric"><span>Price: </span>: $${product.price}</p>
        </div>
      `;
    }
    goods.innerHTML = result;
    console.log("result is here:", result);
  });



 
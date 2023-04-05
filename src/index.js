// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  let price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value
  let subtotalValue = price * quantity

  let subtotalDom = product.querySelector('.subtotal span')
  subtotalDom.innerText = subtotalValue
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  //it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let multipleProduct = document.getElementsByClassName ('product')
  for (let i=0; i<multipleProduct.length; i++){
    updateSubtotal(multipleProduct[i])
  }
  // ITERATION 3
  //... your code goes here
  let subtotals = document.querySelectorAll ('.subtotal span')
  
  let totalValue = 0
  for (let i=0; i<subtotals.length; i++){
    totalValue += Number(subtotals[i].innerText)
  }
  
 let totalProductDom = document.querySelector('#total-value span')
 totalProductDom.innerText = totalValue
   
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const targetRow = target.parentNode.parentNode
  const targetTable = targetRow.parentNode
  //console.log(targeRow)
  targetTable.removeChild(targetRow)
}


// ITERATION 5

function createProduct() {
  //... your code goes here
  const parentDom = document.querySelector('tbody')
  //checking the correct target
  //parentDom.style.backgroundColor = 'red'
  const customName = document.querySelector('.create-product input[type=text]').value
  //console.log(customName)
  const customPrice = document.querySelector('.create-product input[type=number]').value
  //console.log(customPrice)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeItem = document.getElementsByClassName('btn-remove');
  for (let i=0; i<removeItem.length; i++){
    removeItem[i].addEventListener('click', removeProduct);
  }

  const createItem = document.getElementById ('create');
  createItem.addEventListener('click', createProduct)
});

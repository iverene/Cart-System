document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.item-card');
    
    // Set initial state - show only burgers
    filterProducts('burgers');
    
    // Add click event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            filterProducts(category);
        });
    });
    
    function filterProducts(category) {
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

// Traversing
const main = document.querySelector('#main');

const section = main.firstElementChild;

const section2 = main.nextElementSibling;

const section3 = main.lastElementChild;

const article = section3.firstElementChild; 

const productslist = article.firstElementChild;
const products = productslist.children;

const product = productslist.firstElementChild;


// HTML Collections to Array
const productArray = Array.from(products);
console.log(productArray);



// Add Event Listener to A Button
productArray.forEach((p) => {
    const addBtn = p.lastElementChild.lastElementChild;
    addBtn.addEventListener('click', () => {

        const name = p.firstElementChild.nextElementSibling.innerText;
        const price = p.lastElementChild.firstElementChild.innerText;

        const cartItem = document.createElement('div');
        cartItem.classList.add('order-item-card');

        cartItem.innerHTML = `
          <div class="order-item-card-header">
            <div class="order-item-card-title">
              <h3 class="order-item-card-name">${name}</h3>
            </div>
            <button class="order-item-card-delete">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>

          <div class="order-item-card-body">
            <div class="order-item-card-price">${price}</div>
            <div class="order-item-card-quantity">
              <button class="quantity-btn quantity-btn-minus">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="quantity-display">1</span>
              <button class="quantity-btn quantity-btn-plus">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        `;

        cart.appendChild(cartItem);


    });
});

// Get Cart
const cart = main
    .lastElementChild
    .lastElementChild
    .firstElementChild
    .nextElementSibling;

console.log(cart);





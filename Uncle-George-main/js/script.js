// ============================================
// Uncle George - Bread & Pastries
// Shared JavaScript (script.js)
// ============================================

// ---------- Product Data ----------
var products = [
  { id: 1, name: "French Baguette", price: 45, img: "images/product-images/frenchBaguette.jpg", cat: "Loaf Breads", desc: "Classic French baguette. Crispy crust, soft inside. 500g.", carousel: ["images/3 sides carousel/french baguette/frenchBaguette-cross.jpeg", "images/3 sides carousel/french baguette/frenchBaguette-lifestyle.jpeg"] },
  { id: 2, name: "Whole Wheat Loaf", price: 110, img: "images/product-images/wholeWheatLoaf.jpg", cat: "Loaf Breads", desc: "Soft and fluffy whole wheat loaf. Perfect for sandwiches. 420g.", carousel: ["images/3 sides carousel/whole wheat loaf/wholeWheatLoaf-cross.jpeg", "images/3 sides carousel/whole wheat loaf/wholeWheatLoaf-lifestyle.jpeg"] },
  { id: 3, name: "Whole Wheat Pandesal", price: 102, img: "images/product-images/wholeWheatPandesal.jpg", cat: "Bread Rolls", desc: "Classic Filipino pandesal. Soft, warm, and affordable. 250g.", carousel: ["images/3 sides carousel/whole wheat pandesal/wholeWheatPandesal-cross.jpeg", "images/3 sides carousel/whole wheat pandesal/wholeWheatPandesal-lifestyle.jpeg"] },
  { id: 4, name: "Sourdough Artisan Bread", price: 120, img: "images/product-images/sourdoughArtisanBread.jpg", cat: "Loaf Breads", desc: "Artisan sourdough with a crispy crust and tangy interior. 450g.", carousel: ["images/3 sides carousel/sourdough artisan bread/sourdoughArtisanBread-cross.jpeg", "images/3 sides carousel/sourdough artisan bread/sourdoughArtisanBread-lifestyle.jpeg"] },
  { id: 5, name: "Cheese Bread", price: 145, img: "images/product-images/cheeseLoafBread.jpg", cat: "Loaf Breads", desc: "Rich cheese-flavored loaf. A family favorite. 600g.", carousel: ["images/3 sides carousel/cheese loaf bread/cheeseLoafBread-cross.png", "images/3 sides carousel/cheese loaf bread/cheeseLoafBread-lifestyle.png"] },
  { id: 6, name: "Ciabatta Cheese", price: 95, img: "images/product-images/ciabattaCheese.jpg", cat: "Bread Rolls", desc: "Chewy ciabatta with real melted cheese. Crispy crust, soft interior.", carousel: ["images/3 sides carousel/ciabatta cheese/ciabattaCheese-cross.png", "images/3 sides carousel/ciabatta cheese/ciabattaCheese-lifestyle.png"] },
  { id: 7, name: "Ube Pandan", price: 130, img: "images/product-images/cheesyUbePandanDelight.jpg", cat: "Bread Rolls", desc: "Purple yam and pandan flavored bread. Filipino classic.", carousel: ["images/3 sides carousel/cheesey ube pandan delight/cheesyUbePandanDelight-cross.png", "images/3 sides carousel/cheesey ube pandan delight/cheesyUbePandanDelight-lifestyle.png"] },
  { id: 8, name: "Chicken Pie", price: 60, img: "images/product-images/chickenPie.jpg", cat: "Pies & Pastries", desc: "Savory chicken-filled pastry. Flaky and delicious.", carousel: ["images/3 sides carousel/chicken pie/chickenPie-cross.png", "images/3 sides carousel/chicken pie/chickenPie-lifestyle.png"] },
  { id: 9, name: "Egg Pie", price: 240, img: "images/product-images/eggPie.jpg", cat: "Pies & Pastries", desc: "Classic Filipino egg pie. Creamy custard filling.", carousel: ["images/3 sides carousel/egg pie/eggPie-cross.jpeg", "images/3 sides carousel/egg pie/eggPie-lifestyle.jpeg"] },
  { id: 10, name: "Walnut Cinnamon Ring", price: 155, img: "images/product-images/cinnamonRolls.jpg", cat: "Bread Rolls", desc: "Sweet bread rolls with cinnamon sugar filling. 520g.", carousel: ["images/3 sides carousel/walnut cinnamon ring/cinnamonRolls-cross.png", "images/3 sides carousel/walnut cinnamon ring/cinnamonRolls-lifestyle.png"] },
  { id: 11, name: "Mamon Rolls", price: 30, img: "images/product-images/mamonRolls.jpg", cat: "Bread Rolls", desc: "Light and fluffy sponge cake rolls. Sweet and airy.", carousel: ["images/3 sides carousel/mamon rolls/mamonRolls-cross.jpeg", "images/3 sides carousel/mamon rolls/mamonRolls-lifestyle.jpeg"] },
  { id: 12, name: "Hamburger Buns", price: 150, img: "images/product-images/hamburgerBuns.jpg", cat: "Loaf Breads", desc: "Soft hamburger buns. Perfect for burgers and sandwiches.", carousel: ["images/3 sides carousel/hamburger buns/hamburgerBuns-cross.jpeg", "images/3 sides carousel/hamburger buns/hamburgerBuns-lifestyle.jpeg"] },
  { id: 13, name: "Caramel Cake", price: 290, img: "images/product-images/caramelCake.jpg", cat: "Cakes", desc: "Moist cake topped with rich, buttery caramel glaze.", carousel: ["images/3 sides carousel/caramel cake/caramelCake-cross.png", "images/3 sides carousel/caramel cake/caramelCake-lifestyle.png"] },
  { id: 14, name: "Raisin Bread", price: 135, img: "images/product-images/raisinBread.jpg", cat: "Loaf Breads", desc: "Sweet bread loaded with raisins. 500g.", carousel: ["images/3 sides carousel/raisin bread/raisinBread-cross.jpeg", "images/3 sides carousel/raisin bread/raisinBread-lifestyle.jpeg"] },
  { id: 15, name: "Chocolate Cake", price: 280, img: "images/product-images/chocolateCake.jpg", cat: "Cakes", desc: "Rich chocolate cake. Decadent and moist.", carousel: ["images/3 sides carousel/chocolate cake/chocolateCake-cross.png", "images/3 sides carousel/chocolate cake/chocolateCake-lifestyle.png"] }
];

// ============================================
// Cart Helpers
// ============================================

// Get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('ug_cart') || '[]');
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('ug_cart', JSON.stringify(cart));
}

// Add a product to cart
function addToCart(id) {
  var product = products.find(function(p) { return p.id === id; });
  if (!product) return;
  var cart = getCart();
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) { cart[i].qty++; found = true; break; }
  }
  if (!found) cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: 1 });
  saveCart(cart);
  updateCartBadge();
  showToast('Added to cart: ' + product.name);
}

// Remove a product from cart
function removeFromCart(id) {
  var cart = getCart();
  cart = cart.filter(function(item) { return item.id !== id; });
  saveCart(cart);
  updateCartBadge();
}

// Change product quantity in cart
function changeQty(id, delta) {
  var cart = getCart();
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].qty += delta;
      if (cart[i].qty <= 0) cart.splice(i, 1);
      break;
    }
  }
  saveCart(cart);
  updateCartBadge();
}

// Clear all items from cart
function clearCart() {
  saveCart([]);
  updateCartBadge();
}

// Get total price of all items
function getCartTotal() {
  var cart = getCart();
  return cart.reduce(function(sum, item) { return sum + item.price * item.qty; }, 0);
}

// Get total item count
function getCartCount() {
  var cart = getCart();
  return cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
}

// ============================================
// Badge & Toast
// ============================================

// Update cart badge count in navbar
function updateCartBadge() {
  var el = document.getElementById('navCartCount');
  if (!el) return;
  var count = getCartCount();
  if (count > 0) {
    el.textContent = count;
    el.classList.add('badge', 'bg-danger');
  } else {
    el.textContent = '';
    el.classList.remove('badge', 'bg-danger');
  }
}

// Show toast notification
function showToast(message) {
  var toastEl = document.getElementById('appToast');
  var toastBody = document.getElementById('appToastBody');
  if (!toastEl || !toastBody) return;
  toastBody.textContent = message;
  var toast = new bootstrap.Toast(toastEl, { delay: 3000 });
  toast.show();
}

// ============================================
// Home Page - Featured Products
// ============================================
function initHomePage() {
  var grid = document.getElementById('featuredGrid');
  if (!grid) return;
  var featured = products.slice(0, 6);
  grid.innerHTML = featured.map(function(p) {
    return '<div class="col-lg-2 col-md-4 col-6 mb-4">' +
      '<div class="card product-card h-100">' +
      '<a href="product-details.html?id=' + p.id + '" class="text-decoration-none">' +
      '<div class="overflow-hidden"><img src="' + p.img + '" class="card-img-top" alt="' + p.name + '"></div></a>' +
      '<div class="card-body pb-3">' +
      '<h6 class="card-title fw-bold mt-1 mb-1" style="font-size:.9rem;">' + p.name + '</h6>' +
      '<p class="fw-bold text-danger mb-2" style="font-size:.95rem;">&#8369;' + p.price + '</p>' +
      '<button class="btn btn-sm btn-brand w-100" onclick="addToCart(' + p.id + ')"><i class="bi bi-cart-plus me-1"></i>Add</button>' +
      '</div></div></div>';
  }).join('');
}

// ============================================
// Products Page - Filter, Render, Pagination
// ============================================
var currentPage = 1;
var perPage = 8;
var currentCategory = 'all';

// Filter products by category
function filterCategory(cat) {
  currentCategory = cat;
  currentPage = 1;
  var btns = document.querySelectorAll('#categoryFilter .btn');
  btns.forEach(function(b) { b.className = 'btn btn-sm btn-outline-secondary'; });
  var idx = { 'all': 0, 'Loaf Breads': 1, 'Bread Rolls': 2, 'Pies & Pastries': 3, 'Cakes': 4 };
  if (idx[cat] !== undefined) btns[idx[cat]].className = 'btn btn-sm btn-brand';
  renderProducts();
  renderPagination();
}

// Get filtered product list
function getFiltered() {
  if (currentCategory === 'all') return products;
  return products.filter(function(p) { return p.cat === currentCategory; });
}

// Render product cards on products page
function renderProducts() {
  var grid = document.getElementById('productsGrid');
  if (!grid) return;
  var filtered = getFiltered();
  var start = (currentPage - 1) * perPage;
  var page = filtered.slice(start, start + perPage);
  grid.innerHTML = page.map(function(p) {
    return '<div class="col-lg-3 col-md-4 col-6 mb-4">' +
      '<div class="card product-card h-100">' +
      '<a href="product-details.html?id=' + p.id + '" class="text-decoration-none">' +
      '<div class="overflow-hidden"><img src="' + p.img + '" class="card-img-top" alt="' + p.name + '"></div></a>' +
      '<div class="card-body">' +
      '<span class="badge bg-secondary-subtle text-secondary mb-1 small">' + p.cat + '</span>' +
      '<h6 class="card-title fw-bold mt-1">' + p.name + '</h6>' +
      '<p class="text-muted small mb-1" style="font-size:.8rem;">' + p.desc + '</p>' +
      '<p class="fw-bold text-danger mb-2">&#8369;' + p.price + '</p>' +
      '<div class="d-flex gap-2 mt-auto">' +
      '<a href="product-details.html?id=' + p.id + '" class="btn btn-sm btn-outline-secondary flex-grow-1"><i class="bi bi-eye me-1"></i>Details</a>' +
      '<button class="btn btn-sm btn-brand" onclick="addToCart(' + p.id + ')"><i class="bi bi-cart-plus"></i></button>' +
      '</div></div></div></div>';
  }).join('');
}

// Render pagination controls
function renderPagination() {
  var filtered = getFiltered();
  var pages = Math.ceil(filtered.length / perPage);
  var pag = document.getElementById('pagination');
  if (!pag) return;
  var html = '<li class="page-item ' + (currentPage === 1 ? 'disabled' : '') + '">' +
    '<a class="page-link" href="#" onclick="goPage(' + (currentPage - 1) + ');return false;"><i class="bi bi-chevron-left"></i></a></li>';
  for (var i = 1; i <= pages; i++) {
    html += '<li class="page-item ' + (currentPage === i ? 'active' : '') + '">' +
      '<a class="page-link" href="#" onclick="goPage(' + i + ');return false;">' + i + '</a></li>';
  }
  html += '<li class="page-item ' + (currentPage === pages ? 'disabled' : '') + '">' +
    '<a class="page-link" href="#" onclick="goPage(' + (currentPage + 1) + ');return false;"><i class="bi bi-chevron-right"></i></a></li>';
  pag.innerHTML = html;
}

// Navigate to a specific page
function goPage(p) {
  var maxPage = Math.ceil(getFiltered().length / perPage);
  if (p < 1 || p > maxPage) return;
  currentPage = p;
  renderProducts();
  renderPagination();
  window.scrollTo({ top: 200, behavior: 'smooth' });
}

// Initialize products page from URL category param
function initProductsPage() {
  if (!document.getElementById('productsGrid')) return;
  var params = new URLSearchParams(window.location.search);
  var cat = params.get('cat');
  if (cat) {
    filterCategory(cat);
  } else {
    renderProducts();
    renderPagination();
  }
}

// ============================================
// Product Details Page - Carousel & Info
// ============================================

// Navigate carousel to a specific slide
function goToSlide(index) {
  var carousel = bootstrap.Carousel.getInstance(document.getElementById('productCarousel'));
  if (carousel) carousel.to(index);
  var thumbs = document.querySelectorAll('#carouselThumbs img');
  thumbs.forEach(function(t, i) { t.style.borderColor = i === index ? '#D2691E' : 'transparent'; });
}

// Initialize product details page
function initProductDetailsPage() {
  var carouselEl = document.getElementById('productCarousel');
  if (!carouselEl) return;

  var params = new URLSearchParams(window.location.search);
  var productId = parseInt(params.get('id'));
  var product = products.find(function(p) { return p.id === productId; });

  if (!product) {
    document.getElementById('productName').textContent = 'Product not found';
    document.getElementById('productDesc').textContent = 'The product you are looking for does not exist.';
    return;
  }

  // Build carousel: original image + cross + lifestyle images
  var slides = [product];
  if (product.carousel) {
    slides = [product].concat(product.carousel.map(function(img, i) {
      return { id: product.id, name: product.name, img: img };
    }));
  }
  var inner = document.getElementById('carouselInner');
  var thumbs = document.getElementById('carouselThumbs');
  inner.innerHTML = slides.map(function(p, i) {
    return '<div class="carousel-item' + (i === 0 ? ' active' : '') + '">' +
      '<img src="' + p.img + '" class="d-block w-100" alt="' + p.name + '" style="height:500px;object-fit:cover;">' +
      '</div>';
  }).join('');
  thumbs.innerHTML = slides.map(function(p, i) {
    return '<img src="' + p.img + '" class="rounded" style="width:70px;height:70px;object-fit:cover;cursor:pointer;border:2px solid ' + (i === 0 ? '#D2691E' : 'transparent') + ';" onclick="goToSlide(' + i + ')" alt="' + p.name + '">';
  }).join('');

  // Fill in product info
  document.getElementById('productCategory').textContent = product.cat;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productPrice').innerHTML = '&#8369;' + product.price;
  document.getElementById('productDesc').textContent = product.desc;
  document.title = product.name + ' - Uncle George';

  // Render specifications table
  document.getElementById('specsTable').innerHTML =
    '<tr><td class="text-muted fw-bold" style="width:40%">Brand</td><td>Uncle George</td></tr>' +
    '<tr><td class="text-muted fw-bold">Type</td><td>' + product.name + '</td></tr>' +
    '<tr><td class="text-muted fw-bold">Category</td><td>' + product.cat + '</td></tr>' +
    '<tr><td class="text-muted fw-bold">Shelf Life</td><td>3-5 days</td></tr>';

  // Fill description
  document.getElementById('descBody').innerHTML = '<p>' + product.desc + '</p>';

  // Add to Cart button handler
  document.getElementById('addToCartBtn').onclick = function() {
    addToCart(product.id);
  };

  // Update thumbnail highlight on slide change
  carouselEl.addEventListener('slid.bs.carousel', function(e) {
    var thumbs = document.querySelectorAll('#carouselThumbs img');
    thumbs.forEach(function(t, i) { t.style.borderColor = i === e.to ? '#D2691E' : 'transparent'; });
  });
}

// ============================================
// Cart Page - Render, Totals, Checkout
// ============================================

// Render the cart table and totals
function renderCart() {
  var body = document.getElementById('cartBody');
  if (!body) return;
  var cart = getCart();
  var table = document.getElementById('cartTable');
  var empty = document.getElementById('emptyCart');
  var actions = document.getElementById('cartActions');

  if (cart.length === 0) {
    body.innerHTML = '';
    table.classList.add('d-none');
    empty.classList.remove('d-none');
    actions.classList.add('d-none');
    updateTotals();
    return;
  }

  table.classList.remove('d-none');
  empty.classList.add('d-none');
  actions.classList.remove('d-none');

  body.innerHTML = cart.map(function(item) {
    return '<tr>' +
      '<td><div class="d-flex align-items-center">' +
        '<img src="' + item.img + '" class="cart-item-img me-3">' +
        '<span>' + item.name + '</span></div></td>' +
      '<td>&#8369;' + item.price.toFixed(2) + '</td>' +
      '<td><div class="d-flex align-items-center">' +
        '<button class="btn btn-sm btn-outline-secondary" onclick="changeQty(' + item.id + ',-1);renderCart();">-</button>' +
        '<input type="number" class="form-control form-control-sm text-center mx-1" value="' + item.qty + '" readonly style="width:60px;">' +
        '<button class="btn btn-sm btn-outline-secondary" onclick="changeQty(' + item.id + ',1);renderCart();">+</button>' +
      '</div></td>' +
      '<td class="fw-bold">&#8369;' + (item.price * item.qty).toFixed(2) + '</td>' +
      '<td><button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(' + item.id + ');renderCart();"><i class="bi bi-trash"></i></button></td>' +
    '</tr>';
  }).join('');
  updateTotals();
}

// Update subtotal, delivery, tax, and grand total
function updateTotals() {
  var cart = getCart();
  var sub = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
  var delivery = sub >= 200 ? 0 : 50;
  var tax = sub * 0.12;
  var total = sub + delivery + tax;

  document.getElementById('cartTotal').textContent = '\u20B1' + sub.toFixed(2);

  var delEl = document.getElementById('deliveryFee');
  if (delivery === 0) {
    delEl.textContent = 'Free';
    delEl.className = 'text-success';
  } else {
    delEl.textContent = '\u20B1' + delivery.toFixed(2);
    delEl.className = '';
  }

  document.getElementById('taxAmount').textContent = '\u20B1' + tax.toFixed(2);
  document.getElementById('grandTotal').textContent = '\u20B1' + total.toFixed(2);
}

// Checkout demo handler
function checkout() {
  var cart = getCart();
  if (cart.length === 0) {
    showAlert('Your cart is empty!');
    return;
  }
  showAlert('Proceeding to checkout... (Demo)');
}

// Show success alert in cart
function showAlert(msg) {
  var a = document.getElementById('cartAlert');
  if (a) {
    a.classList.remove('d-none');
    a.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>' + msg +
      '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
    setTimeout(function() { a.classList.add('d-none'); }, 3000);
  }
}

// Initialize cart page
function initCartPage() {
  if (!document.getElementById('cartBody')) return;
  renderCart();
}

// ============================================
// Contact Page - Form Handler
// ============================================
function initContactPage() {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value.trim();
    if (!name || !email || !subject || !message) {
      showToast('Please fill in all fields.');
      return;
    }
    showToast('Thank you! Your message has been sent.');
    form.reset();
  });
}

// ============================================
// Init on Page Load
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  updateCartBadge();
  initHomePage();
  initProductsPage();
  initProductDetailsPage();
  initCartPage();
  initContactPage();
});

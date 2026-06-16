// SoleVibe Shoe Retail Web App - Shared Main Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Shopping Cart
  updateCartBadge();

  // 2. Mobile Menu Toggle
  setupMobileNav();

  // 3. Category Page Initialization (if applicable)
  const productGrid = document.getElementById('product-grid');
  if (productGrid) {
    const category = productGrid.dataset.category;
    if (category) {
      renderProducts(category);
    }
  }

  // 4. Product Detail Page Initialization (if applicable)
  if (window.location.pathname.includes('product.html')) {
    initProductDetail();
  }

  // 5. Shopping Cart Page Initialization (if applicable)
  if (window.location.pathname.includes('cart.html')) {
    initCartPage();
  }

  // 6. Contact Form Validation & Animation (if applicable)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    setupContactForm(contactForm);
  }
});

// Shopping Cart Helpers
function getCart() {
  const cart = localStorage.getItem('solevibe_cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('solevibe_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const badges = document.querySelectorAll('.cart-badge');
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  badges.forEach(badge => {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.style.display = 'flex';
      badge.classList.add('pulse');
    } else {
      badge.style.display = 'none';
    }
  });
}

function addToCart(productId, size, color, quantity = 1) {
  if (!size) {
    showNotification('請選擇鞋子尺寸！', 'error');
    return;
  }
  if (!color) {
    showNotification('請選擇鞋子顏色！', 'error');
    return;
  }

  const cart = getCart();
  const existingItemIndex = cart.findIndex(item => 
    item.id === productId && item.size === size && item.color === color
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Find product details
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      color: color,
      quantity: quantity
    });
  }

  saveCart(cart);
  showNotification('商品已成功加入購物車！', 'success');
}

// Mobile Nav Menu Setup
function setupMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
  }
}

// Render Products for Category Pages
function renderProducts(category, sortBy = 'default') {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  let filtered = products;
  if (category !== 'all') {
    filtered = products.filter(p => p.category === category);
  }

  // Sort logic
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-products">此分類目前沒有商品。</div>`;
    return;
  }

  filtered.forEach(p => {
    const originalPriceHTML = p.originalPrice 
      ? `<span class="original-price">NT$ ${p.originalPrice.toLocaleString()}</span>` 
      : '';
    const discountBadgeHTML = p.originalPrice
      ? `<span class="discount-badge">-${Math.round((1 - p.price / p.originalPrice) * 100)}%</span>`
      : '';

    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${discountBadgeHTML}
        <div class="product-overlay">
          <a href="product.html?id=${p.id}" class="btn-quickview">查看詳情</a>
        </div>
      </div>
      <div class="product-info">
        <span class="product-cat">${p.categoryName}</span>
        <h3 class="product-title"><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <div class="product-meta">
          <div class="rating">
            <span class="stars">★</span>
            <span class="score">${p.rating}</span>
          </div>
          <span class="reviews">(${p.reviewsCount} 評價)</span>
        </div>
        <div class="product-price-row">
          <div class="price-box">
            <span class="price">NT$ ${p.price.toLocaleString()}</span>
            ${originalPriceHTML}
          </div>
          <button class="btn-add-cart-quick" onclick="quickAddToCart('${p.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function quickAddToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  // Automatically pick first size and color for quick add
  const size = product.sizes[0];
  const color = product.colors[0].split(' ')[0] || product.colors[0];
  addToCart(productId, size, color, 1);
}

// Initialize Product Detail Page
function initProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || products[0].id;
  const product = products.find(p => p.id === productId);

  if (!product) {
    document.querySelector('.product-detail-container').innerHTML = `
      <div class="error-page text-center py-5">
        <h2>找不到該商品</h2>
        <p>請回到首頁重新瀏覽。</p>
        <a href="index.html" class="btn-primary">回首頁</a>
      </div>
    `;
    return;
  }

  // Update DOM with product info
  document.title = `${product.name} - SoleVibe`;
  
  // Breadcrumb
  const breadcrumbCurrent = document.getElementById('breadcrumb-current');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;

  // Main details
  document.getElementById('detail-img').src = product.image;
  document.getElementById('detail-img').alt = product.name;
  document.getElementById('detail-name').textContent = product.name;
  document.getElementById('detail-cat').textContent = product.categoryName;
  document.getElementById('detail-price').textContent = `NT$ ${product.price.toLocaleString()}`;
  
  const originalPriceEl = document.getElementById('detail-original-price');
  if (originalPriceEl) {
    if (product.originalPrice) {
      originalPriceEl.textContent = `NT$ ${product.originalPrice.toLocaleString()}`;
      originalPriceEl.style.display = 'inline-block';
    } else {
      originalPriceEl.style.display = 'none';
    }
  }

  document.getElementById('detail-rating').textContent = product.rating;
  document.getElementById('detail-reviews').textContent = `(${product.reviewsCount} 則顧客評價)`;
  document.getElementById('detail-desc').textContent = product.description;

  // Render Features list
  const featuresList = document.getElementById('detail-features');
  if (featuresList) {
    featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
  }

  // Sizes selector
  const sizeContainer = document.getElementById('size-selector-container');
  if (sizeContainer) {
    sizeContainer.innerHTML = product.sizes.map(size => `
      <label class="size-option">
        <input type="radio" name="size" value="${size}">
        <span>${size}</span>
      </label>
    `).join('');
  }

  // Colors selector
  const colorContainer = document.getElementById('color-selector-container');
  if (colorContainer) {
    colorContainer.innerHTML = product.colors.map((color, index) => {
      const colorSimple = color.split(' ')[0];
      return `
        <label class="color-option">
          <input type="radio" name="color" value="${color}" ${index === 0 ? 'checked' : ''}>
          <span title="${color}">${color}</span>
        </label>
      `;
    }).join('');
  }

  // Quantity adjusters
  const qtyInput = document.getElementById('qty-input');
  const btnMinus = document.getElementById('qty-minus');
  const btnPlus = document.getElementById('qty-plus');

  if (qtyInput && btnMinus && btnPlus) {
    btnMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value);
      if (val > 1) qtyInput.value = val - 1;
    });
    btnPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value);
      qtyInput.value = val + 1;
    });
  }

  // Add to Cart button listener
  const btnAddToCart = document.getElementById('btn-add-to-cart');
  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', () => {
      const selectedSizeEl = document.querySelector('input[name="size"]:checked');
      const selectedColorEl = document.querySelector('input[name="color"]:checked');
      const quantity = parseInt(qtyInput ? qtyInput.value : 1);

      if (!selectedSizeEl) {
        showNotification('請先選擇您的鞋子尺寸！', 'error');
        return;
      }
      
      const size = selectedSizeEl.value;
      const color = selectedColorEl ? selectedColorEl.value : product.colors[0];

      addToCart(product.id, size, color, quantity);
    });
  }

  // Render related products (from same category)
  renderRelatedProducts(product.id, product.category);
}

function renderRelatedProducts(currentId, category) {
  const container = document.getElementById('related-products-grid');
  if (!container) return;

  const related = products
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, 4);

  container.innerHTML = '';
  if (related.length === 0) {
    container.parentElement.style.display = 'none';
    return;
  }

  related.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${p.image}" alt="${p.name}">
        <div class="product-overlay">
          <a href="product.html?id=${p.id}" class="btn-quickview">查看詳情</a>
        </div>
      </div>
      <div class="product-info">
        <h4 class="product-title"><a href="product.html?id=${p.id}">${p.name}</a></h4>
        <div class="product-price-row">
          <span class="price">NT$ ${p.price.toLocaleString()}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Initialize Shopping Cart Page
function initCartPage() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const taxEl = document.getElementById('cart-tax'); // Shipping fee
  const totalEl = document.getElementById('cart-total');
  
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    document.querySelector('.cart-wrapper').innerHTML = `
      <div class="cart-empty text-center py-5">
        <div class="empty-icon">🛒</div>
        <h2>您的購物車是空的</h2>
        <p>快去選購您心儀的時尚鞋款吧！</p>
        <a href="index.html" class="btn-primary">回到首頁去逛逛</a>
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h3 class="cart-item-title"><a href="product.html?id=${item.id}">${item.name}</a></h3>
        <p class="cart-item-meta">規格: <span>${item.color}</span> / <span>尺寸: ${item.size}</span></p>
        <div class="cart-item-price-mobile">NT$ ${item.price.toLocaleString()}</div>
      </div>
      <div class="cart-item-price font-semibold">NT$ ${item.price.toLocaleString()}</div>
      <div class="cart-item-qty">
        <div class="qty-adjuster-small">
          <button onclick="adjustCartQty(${index}, -1)">-</button>
          <input type="text" value="${item.quantity}" readonly>
          <button onclick="adjustCartQty(${index}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-total font-semibold text-primary">NT$ ${itemTotal.toLocaleString()}</div>
      <button class="cart-item-remove" onclick="removeCartItem(${index})" title="移除商品">×</button>
    `;
    container.appendChild(row);
  });

  // Calculate totals
  const shipping = subtotal > 3000 ? 0 : 150; // free shipping over 3000
  const total = subtotal + shipping;

  if (subtotalEl) subtotalEl.textContent = `NT$ ${subtotal.toLocaleString()}`;
  if (taxEl) taxEl.textContent = shipping === 0 ? '免費 (滿NT$3,000免運)' : `NT$ ${shipping.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `NT$ ${total.toLocaleString()}`;

  // Checkout button
  const btnCheckout = document.getElementById('btn-checkout');
  if (btnCheckout) {
    btnCheckout.addEventListener('click', () => {
      // Show mock checkout modal or animation
      const modal = document.createElement('div');
      modal.className = 'modal-checkout';
      modal.innerHTML = `
        <div class="modal-content text-center scale-in">
          <div class="success-checkmark">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div>
          <h2>感謝您的訂購！</h2>
          <p>訂單已成功送出。我們將盡快安排出貨！</p>
          <p class="order-id">訂單編號: SV-${Math.floor(100000 + Math.random() * 900000)}</p>
          <button class="btn-primary mt-4" onclick="clearCartAndHome()">回到首頁</button>
        </div>
      `;
      document.body.appendChild(modal);
    });
  }
}

function adjustCartQty(index, change) {
  const cart = getCart();
  if (index < 0 || index >= cart.length) return;

  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  initCartPage();
}

function removeCartItem(index) {
  const cart = getCart();
  if (index < 0 || index >= cart.length) return;

  cart.splice(index, 1);
  saveCart(cart);
  initCartPage();
  showNotification('商品已從購物車中移除。', 'info');
}

function clearCartAndHome() {
  localStorage.removeItem('solevibe_cart');
  window.location.href = 'index.html';
}

// Contact Form Setup
function setupContactForm(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Quick validation
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      showNotification('請填寫所有必填欄位！', 'error');
      return;
    }

    // Success response
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '傳送中...';

    setTimeout(() => {
      submitBtn.textContent = '傳送成功！✓';
      showNotification('您的訊息已成功送出，我們將盡快與您聯繫！', 'success');
      form.reset();
      
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 3000);
    }, 1500);
  });
}

// Notification Toast Utility
function showNotification(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast-notification ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
    <span class="toast-message">${message}</span>
  `;
  document.body.appendChild(toast);

  // Trigger animations
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

const model = {
  cart: {
    count: 0,
  },
  product: {
    img: 'https://images.dog.ceo/breeds/puggle/IMG_071023.jpg',
    description: 'Dog 1',
  }
};

const bt = document.querySelector('my-buy-tools');
const header = document.querySelector('my-header')
const productImage = document.querySelector('my-product-image');
const productDescription = document.querySelector('my-product-description');

header.count = model.cart.count;
bt.addEventListener('addToCart', () => {
  model.cart.count += 1;
  header.count = model.cart.count;
});

productImage.src = model.product.img;
productDescription.description = model.product.description;
bt.addEventListener('selectDog', ({ detail: { description, img }}) => {
  model.product.img = img;
  model.product.description = description;

  productImage.src = model.product.img;
  productDescription.description = model.product.description;
});

const bookList = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2019.png",
    name: "Eloquent JavaScript",
    overview: "Lorem, ipsum dolor sit amet",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2020.png",
    name: "O'REILLY Learning React",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2021.png",
    name: "The Road To React",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2022.png",
    name: "C Programming Language",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non",
  },
  {
    id: 5,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2023.png",
    name: "Effective Typescript",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 6,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2025.png",
    name: "JavaScript Everywhere",
    overview: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

const wishlistItems = [];
const cart = [];

const getWishlistItems = () => {
  //console.log(bookList)
  //console.log(wishlistItems)
  return bookList.filter((book) => wishlistItems.includes(book.id.toString()));  //wishlisItems a value gula string a set hoisey tai book.id jehoto number tai taader string convert korey neye then book id ki wishList array tey include kina dekha hocchey
};

const getCartItems = () => {
  console.log(cart)
  return bookList.filter((book) => cart.includes(book.id));
};

//ek page thekey onno page a jawar ekta system
const switchTab = (id) => {
  if (id === "container") {
    document.getElementById("container").style.display = "grid";
    document.getElementById("wishlist").style.display = "none";
    document.getElementById("cart").style.display = "none";
  } else if (id === "wishlist") {
    document.getElementById("wishlist").style.display = "grid";
    document.getElementById("container").style.display = "none";
    document.getElementById("cart").style.display = "none";

    displayWishlist();
  } else {
    document.getElementById("cart").style.display = "grid";
    document.getElementById("container").style.display = "none";
    document.getElementById("wishlist").style.display = "none";

    displayCart();
  }
};

//main default page(container)
const showBooks = (books) => {
  const bookContainer = document.getElementById("container");

  books.forEach((book) => {
    const div = createCard(book);
    bookContainer.appendChild(div);
  });
};

const createCard = (book) => {
  const div = document.createElement("div");
  div.classList.add("card");

  let overview=book.overview
  

  div.innerHTML = `
  <div class="image-container">
    <img
      src="${book.image}"       
      alt=""
    />
    <div class="button-container">
      <button onclick="addToWishlist('${book.id}')" class="button"><i class="fa-solid fa-heart"></i></button>
      <button onclick="addToCart(${book.id})" class="button">Add To Cart</button>
    </div>
  </div>
  <div class="info-container">
    <h1>${book.name}</h1>
    <p>
      ${overview.length>100? overview.slice(0,100)+'...': `${overview}`}      
    </p>
  </div>

`;

  return div;
};

showBooks(bookList);

const addToCart = (id) => {
  cart.push(id);
};

const addToWishlist = (id) => {
  if (wishlistItems.indexOf(id) === -1) {
    wishlistItems.push(id);
  }

};

const displayCart = () => {
  document.getElementById("cart").innerHTML=""

  const cart = getCartItems();
  console.log(cart);

  cart.forEach((book) => {
    const div = createCard(book);
    document.getElementById("cart").appendChild(div);
  });
};

const displayWishlist = () => {
  //clearing previous record
  document.getElementById("wishlist").innerHTML=""

  const wishlist = getWishlistItems();
  console.log(wishlist);

  wishlist.forEach((book) => {
    const div = createCard(book);
    document.getElementById("wishlist").appendChild(div);
  });
};

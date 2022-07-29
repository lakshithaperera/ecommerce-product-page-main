
  


const cartIcon = document.getElementById("cart-icon");
const cart = document.getElementById("cart");
let cartToggle = true;

cartIcon.addEventListener('click', function cartHanddle(){
  if(cartToggle){
    cart.style.display = "block";
    cartToggle = false;
  }
  else{
    cart.style.display = "none";
    cartToggle = true;
  }
  
})


const decreasing = document.querySelector(".decreasing");


const increasing = document.querySelector(".increasing");

let value = document.querySelector(".value");
let valueNumber = 0;

increasing.addEventListener('click', function increaseFunc(){
     valueNumber++;
     value.innerHTML = valueNumber;
     
});

decreasing.addEventListener('click', function decreaseFunc(){
    if(0<valueNumber){
      valueNumber--;
      value.innerHTML = valueNumber;
    }
});


const cartBodySection = document.querySelector(".cart-body-section");

const addToCartBtn = document.getElementById("add-to-cart-btn");
const cartEmptyText = document.getElementById("cart-empty-text");

const priceMultify = document.getElementById("price-multify");
const totalPrice = document.getElementById("total-price");




addToCartBtn.addEventListener('click', function addToCartFunc(){
  if(0<valueNumber){
    priceMultify.innerHTML = valueNumber;
    totalPrice.innerHTML = "$" + valueNumber * 125 + ".00";
    cartBodySection.style.display = "block";
    cartEmptyText.style.display = "none";
  }
});

const cartDelete = document.getElementById("cart-delete");

cartDelete.addEventListener('click', function cardDelfunc(){
  cartBodySection.style.display = "none";
  cartEmptyText.style.display = "block";
})

const imgPopUp = document.querySelector(".img-popup");

const clickForPopUp  = document.getElementById("big-img-id");
const getBody = document.body;
const getMainContainer = document.querySelector(".main-container");
const NavBar = document.getElementById("nav");
const actualImgSection = document.querySelector(".left-main");
const rightSection = document.querySelector(".main-right");

clickForPopUp.addEventListener('click', clickForPopupFunc );
function clickForPopupFunc(){
  imgPopUp.style.display = "block";
  getBody.style.background = "#404040"
  NavBar.style.opacity = "0.3";
  actualImgSection.style.opacity = "0.3";
  rightSection.style.opacity = "0.3";
}
const popUpClose = document.querySelector(".close-btn");

popUpClose.addEventListener('click',closePopUpFunc );

function closePopUpFunc(){
  imgPopUp.style.display = "none";
  getBody.style.background = "hsl(0, 0%, 100%)";
  NavBar.style.opacity = "1";
  actualImgSection.style.opacity = "1";
  rightSection.style.opacity = "1";
}

const focusImage = Array.from(document.getElementsByClassName("img-colored"));

const mainImg1 = document.getElementById("main-img1");
const mainImg2 = document.getElementById("main-img2");
const mainImg3 = document.getElementById("main-img3");
const mainImg4 = document.getElementById("main-img4");


focusImage.forEach(el => {

   

    el.addEventListener("mouseenter", mouseEnter);

    function mouseEnter() {
      el.classList.add("img-colored1");
      
    }
    
    el.addEventListener("mouseleave", mouseLeave);
    
    function mouseLeave() {
      el.classList.remove("img-colored1");

    }

    
    
    el.addEventListener('click', hoverImageClick);

    function hoverImageClick(){
      const imgId = el.id;
      if(imgId == "img-clr1"){
        mainImg1.style.display = "block";
        mainImg2.style.display = "none";
        mainImg3.style.display = "none";
        mainImg4.style.display = "none";
      }else if(imgId == "img-clr2"){
        mainImg1.style.display = "none";
        mainImg2.style.display = "block";
        mainImg3.style.display = "none";
        mainImg4.style.display = "none";
      }else if(imgId == "img-clr3"){
        mainImg1.style.display = "none";
        mainImg2.style.display = "none";
        mainImg3.style.display = "block";
        mainImg4.style.display = "none";
      }else if(imgId == "img-clr4"){
        mainImg1.style.display = "none";
        mainImg2.style.display = "none";
        mainImg3.style.display = "none";
        mainImg4.style.display = "block";
      }
      
    }


      });


    const mobileNavMenu = document.querySelector(".mobile-nav-munu");

    const sideBar = document.querySelector(".side-bar");
    const sideBarClose = document.getElementById("side-bar-close");

    mobileNavMenu.addEventListener('click', function showSideBarFunc(){
      sideBar.style.display = "block";
    })

    sideBarClose.addEventListener('click', function closeSideBarFunc(){
      sideBar.style.display = "none";
    } )



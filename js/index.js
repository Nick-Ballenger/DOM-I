const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },

  "mainContent": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },

  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },

  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let aTag = document.querySelectorAll("a");
aTag[0].textContent = siteContent.nav["nav-item-1"];
aTag[1].textContent = siteContent.nav["nav-item-2"];
aTag[2].textContent = siteContent.nav["nav-item-3"];
aTag[3].textContent = siteContent.nav["nav-item-4"];
aTag[4].textContent = siteContent.nav["nav-item-5"];

// const newATag = document.createElement('a');
// const newBR = document.createElement('br');
// const newATag1 = document.createElement('a');

// newATag.textContent ="blog";
// newATag1.textContent = "poop";




let ctaHead = document.querySelector('h1');
ctaHead.textContent = siteContent.cta['h1']; 
let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta['button'];
ctaButton.style.borderRadius = '10px'
ctaButton.style.backgroundColor = 'grey'
let ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['mainContent']['middle-img-src']);

let hTag = document.querySelectorAll('h4');

hTag[0].textContent = siteContent.mainContent["features-h4"]
hTag[1].textContent = siteContent.mainContent["about-h4"]
hTag[2].textContent = siteContent.mainContent["services-h4"]
hTag[3].textContent = siteContent.mainContent["product-h4"]
hTag[4].textContent = siteContent.mainContent["vision-h4"]
hTag[5].textContent = siteContent.contact["contact-h4"]

//selects ptags
let pTag = document.querySelectorAll('p');
//assigns ptags
pTag[0].textContent = siteContent.mainContent ['features-content']
pTag[1].textContent = siteContent.mainContent ['about-content']
pTag[2].textContent = siteContent.mainContent ['services-content']
pTag[3].textContent = siteContent.mainContent ['product-content']
pTag[4].textContent = siteContent.mainContent["vision-content"]
pTag[5].textContent = siteContent.contact["address"]
pTag[6].textContent = siteContent.contact["phone"]
pTag[7].textContent = siteContent.contact["email"]
pTag[8].textContent = siteContent.footer['copyright']



const newATag = document.createElement('a');
const newBR = document.createElement('br');
const newATag1 = document.createElement('a');

newATag.textContent ="Blog";
newATag1.textContent = "Poop";

let newAnchor = document.querySelector('nav');
newAnchor.append(newATag);
newAnchor.prepend(newATag1);


let ctaselector = document.querySelector('.cta');
console.log(ctaselector);

aTag.forEach( function( currentValue ){
  currentValue.style.color = 'green';
});
newATag.style.color = 'green';
newATag1.style.color = 'green';
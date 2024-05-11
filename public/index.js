function toggleMenu() { //functiony patasxanatu e menyui popoxman hamar,  
    const body = document.body; //na stanum e  body, navbar ev open-menu elementnery
    const navbar = document.getElementById('navbar'); 
    const openMenu = document.getElementById('open-menu');
    navbar.classList.toggle('nav-active'); //avelacnum e nav-active classy navbarin ev bodyin
    body.classList.toggle('nav-active');
    if (navbar.classList.contains('nav-active')) { //kaxvac pahanjic na popoxum e openMenu-i opacityn 
        openMenu.style.opacity = '0';
        navbar.style.right = '0'; // ev navbari dirqy
    } else {
        navbar.style.right = '-110%';
        openMenu.style.opacity = '1';
    }
}

window.addEventListener('scroll', function() { // ays functiony ogtagorcum enq scroll anelis 
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
        header.classList.add('fixed-header'); //avelacnum enq class ete scrolla exel
    } else {
        header.classList.remove('fixed-header'); // jnjum enq classy ete scrolly amena verevi masum e
    }
});


// slider
const SHOWING_CLASS = "showing";
const SLIDER_CONTENT = "slider__content";
const BTN_HOVER = "btnHover";
const sliders = document.querySelectorAll(".slider__content");
const firstSlide = sliders[0];
const lastSlide = sliders[sliders.length - 1];
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

function init() { // ays functiony slayderi hamar e texadrum e arajin slaydy vorpes aktiv
  const currentSlider = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlider) {
    currentSlider.classList.remove(SHOWING_CLASS);
    firstSlide.classList.add(SHOWING_CLASS);
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

function slide(e) { //ays functiony patasxanatu e slayderi aj kam dzax gnalu hamar 
                    //ayn jnjum e showing classy aktiv slaydic ev avelacnum e ayn 
                    // aj kam dzax gtnvox slayin kaxvac vor koxm enq poxum
  const target = e.currentTarget;
  const currentSlider = document.querySelector(`.${SHOWING_CLASS}`);
  currentSlider.classList.remove(SHOWING_CLASS);
  if (target === leftBtn) {
    if (currentSlider.previousElementSibling) {
      currentSlider.previousElementSibling.classList.add(SHOWING_CLASS);
    } else {
      lastSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    if (currentSlider.nextElementSibling.className === SLIDER_CONTENT) {
      currentSlider.nextElementSibling.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  }
}

function btnHover(e) { //ays functiony avelacnum kam jnjum e btnHover classy cursory knopkin paheluc kam heracneluc
  const btn = e.target;
  btn.classList.toggle("btnHover");
}

// Event
leftBtn.addEventListener("click", slide);
leftBtn.addEventListener("mouseenter", btnHover);
leftBtn.addEventListener("mouseleave", btnHover);
rightBtn.addEventListener("click", slide);
rightBtn.addEventListener("mouseenter", btnHover);
rightBtn.addEventListener("mouseleave", btnHover);

// Execute()
init();

// full screen foto 
function openFullscreen(src) { //ays functiony patasxanatu e nkarnery mec cuyc tali hamar
                            //ayn stanum e nkari src-in heto texadrum e ayd src-in 
                            //fullscreen-img id-ov tegin
  // cuyc tal nkary fullscreen
  const fullscreenImg = document.getElementById('fullscreen-img');
  fullscreenImg.src = src;
  document.querySelector('.fullscreen').style.display = 'flex';
}

//ays functiony pagum e nkari full screen linely uxaki taqcnelov konteynery
function closeFullscreen() {  document.querySelector('.fullscreen').style.display = 'none'}

function searchText() { //ays functiony voronum e kayqum gtnvox hxumnerov
                        // slzbum ayn stanum searchInput-um e grvac teqsty 
                        //apa hamematum e ayn kayqum gtnvox bolor hxumneri het 
                        //stacvac hamynknumy texadrum e searchResult-um
  var searchText = document.getElementById("searchInput").value.toLowerCase(); // poqratar enq sarqum hamematelu hamar
  var allLinks = document.querySelectorAll("a");
  var searchResult = document.getElementById("searchResult");
  searchResult.innerHTML = "";
  var found = false;
  var uniqueLinks = new Set(); // ogtagorcum enq set unikal link gtnelu hamar

  if (searchText.trim() === "") { // stugum enq inputy datark e te voch
      searchResult.style = "display:none";
      return; // ete inputy datark e dataracnel functiony
  } else{
    searchResult.style = "display:flex"
    console.log(searchText);
  }

  for (var i = 0; i < allLinks.length; i++) {
      var linkText = allLinks[i].textContent.toLowerCase(); // poqratar enq sarqum hamematelu hamar
      var href = allLinks[i].href.toLowerCase(); // poqratar enq sarqum hamematelu hamar
      if (linkText.includes(searchText) || href.includes(searchText)) {
          // stugum enq avelacvel e ardyoq linky
          if (!uniqueLinks.has(href)) { // ete unikal linky gtnvac e 
              var linkElement = document.createElement("a"); //stexcel nor a teg
              linkElement.textContent = allLinks[i].textContent; //texadrel linkElementum allLink[i]-i texty
              linkElement.setAttribute("href", allLinks[i].href); //texadrel allLink[i]-i hxumy linkElementi src-um
              linkElement.setAttribute("target", "_blank"); //bacel nor ejum
              linkElement.classList.add("found-link"); //tal nor class styleri hamar
              searchResult.appendChild(linkElement); //texadrel linkElement-y searchResult-um
              uniqueLinks.add(href); // texadrum enq hxumy Set
              found = true; // found-y darcnum enq true vorpesi cuyc tanq vor gtnvel e gone mek hamynknum
          }
      }
  }

}

document.getElementById("searchInput").addEventListener("input", searchText);

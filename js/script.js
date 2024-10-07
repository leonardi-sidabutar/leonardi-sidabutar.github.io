// Typing Animation
var typed = new Typed('.typing',{
    strings:["Web Developer","Front-End Web Developer","Back-End Web Developer","Dev-Ops"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// Aside
const   nav = document.querySelector('.nav'),
        navlist = nav.querySelectorAll('li'),
        totalNavList = navlist.length;
        allSelection = document.querySelectorAll(".section"),
        totalSelection = allSelection.length;

for(let i=0; i<totalNavList ; i++)
{
    const a=navlist[i].querySelector('a')
    a.addEventListener('click', function()
    {
        removeBackSection()
        for(let j=0; j<totalNavList; j++)
        {
            if(navlist[j].querySelector('a').classList.contains('active'))
            {
                addBackSection(j);
                // allSelection[j].classList.add('back-section');
            }
            navlist[j].querySelector('a').classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection()
{
    for(let i=0; i<totalNavList; i++)
    {
        allSelection[i].classList.remove('back-section');   
    }
}

function addBackSection(num)
{
    allSelection[num].classList.add('back-section');   
}

function showSection(element)
{
    for(let i=0; i<totalSelection; i++)
    {
        allSelection[i].classList.remove('active')
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector("#"+target).classList.add("active")
}

function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navlist[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if(target === navlist[i].querySelector('a').getAttribute("href").split('#')[1])
        {
            navlist[i].querySelector('a').classList.add('active');
        }
    }
}

document.querySelector('.hire-me').addEventListener('click', function()
{
    const sectionIndex = this.getAttribute('data-section-index');
    // console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
        
navTogglerBtn.addEventListener("click", ()=>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSelection;i++)
    {
        allSelection[i].classList.toggle("open");
    }
}

// Tahun Lahir
const date = new Date();
const year = date.getFullYear();
const thn = 2000
const umur = year - thn;
const usia = document.getElementById('umur').textContent = umur;
const tahun = document.getElementById('thn').textContent = thn;


// Function to open the modal
function openModal(imageSrc, description, linkURL) {
  var modal = document.getElementById("portfolioModal");
  var modalImg = document.getElementById("modalImg");
  var modalDescription = document.getElementById("modalDescription");
  var modalLink = document.getElementById("modalLink");

  // Set the image, description, and link in the modal
  modalImg.src = imageSrc;
  modalDescription.innerHTML = description;
  modalLink.href = linkURL;

  // Show the modal
  modal.style.display = "flex";
}

// Function to close the modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
  var modal = document.getElementById("portfolioModal");
  modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  var modal = document.getElementById("portfolioModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

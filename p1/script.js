const tabs = document.querySelector(".sap_tabs");
const tabButton = document.querySelectorAll(".resp-tab-item");
const contents = document.querySelectorAll(".resp-accordion");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    console.log(id)
    if(id){
        tabButton.forEach(btn =>{
            btn.classList.remove("resp-tab-active");
        });
        e.target.classList.add("resp-tab-active");

        contents.forEach(content => {
            content.classList.remove("resp-tab-active")
        })
        const element = document.getElementById(id);
        element.classList.add("resp-tab-active");
    } 
}

function openMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  mybutton = document.getElementById("toTop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
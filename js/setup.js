$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


function startModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('show');
    modal.addEventListener('click', (e) => {
if(e.target.id == modalID || e.target.className == 'close') {
    modal.classList.remove('show');
}
    });
}
const movies = document.querySelector('.btn');
movies.addEventListener('click', function() {
    startModal('modal-box');
})


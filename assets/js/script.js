const backToMain = (event) => {
    
  event.preventDefault;

  const titleContainer = document.getElementsByClassName('title-container')[0];

  console.log(titleContainer)
}

const transformProject = (event) => {

  event.preventDefault;

  // container
  const titleContainer = document.getElementsByClassName('title-container')[0];
  console.log(titleContainer)
  // projeto
  const projectContainer = document.getElementsByClassName('project-container')[0];
  console.log(projectContainer)
  // arrow
  const arrow = document.getElementsByClassName('arrow')[0];
  console.log(arrow)

  const elements = document.getElementsByClassName('transformProject');

  anime({
    targets: elements,
    translateX: [0, 600],
    opacity: [1, 0],
    easing: 'easeInOutSine',
    duration: 400
  });

  setTimeout(() => {
    titleContainer.style.display = 'none';
    projectContainer.classList.remove('hide');
    arrow.classList.remove("hide");
    
  }, 800);

  
}

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', parallaxEffect);

function parallaxEffect() {
  let scroll = window.scrollY;

  cards.forEach(card => {
    let speed = card.getAttribute('data-speed');
    card.style.transform = `translateY(${scroll * speed}px)`;
  });
}


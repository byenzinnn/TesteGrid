const backToMain = (event) => {
    
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
    targets: projectContainer,
    opacity: [1, 0],
    translateX: -1000,
    easing: 'easeInOutSine',
    duration: 200
  });

  anime({
    targets: elements,
    translateX: [600, 0],
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 300
  });

  setTimeout(() => {
    titleContainer.style.display = 'flex';
    titleContainer.style.opacity = '1';
    anime({
      targets: elements,
      translateX: [600, 0],
      opacity: [0, 1],
      easing: 'easeInOutSine',
      duration: 600
    });

    
    projectContainer.classList.add('hide');
  }, 800);
}

//////////////////////////////////////////////////////////////////

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
    duration: 300
  });

  setTimeout(() => {
    titleContainer.style.display = 'none';
    
    anime({
      targets: projectContainer,
      opacity: [0, 1],
      translateX: [-600, 0],
      easing: 'easeInOutSine',
      duration: 150
    })
    projectContainer.classList.remove('hide');
  }, 600);
}

///////////////////////////////////////////////

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', parallaxEffect);

function parallaxEffect() {
  let scroll = window.scrollY;

  cards.forEach(card => {
    let speed = card.getAttribute('data-speed');
    card.style.transform = `translateY(${scroll * speed}px)`;
  });
}


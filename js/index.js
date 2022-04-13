const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');
const navItems = document.querySelectorAll('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});
const speakerCard = document.querySelector('.grid1');

const speakers = [
  {
    Photo: './img/speaker_01.jpg',
    name: 'Bjarne Stroustrup',
    studies:
      'Distinguished Research Professor and holds the College of Engineering Chair in Computer Science at Texas A&M University',
    achievements:
      'most notable for the creation and development of the widely used C++ programming language.',
  },
  {
    Photo: './img/speaker_02.jpg',
    name: 'James Gosling',
    studies: 'M.A. and PH.D. from Carnegie Mellon University in computer science',
    achievements:
      'Known as father of the Java programming lenguage. Due to his extra-ordinary achievements Gosling was elected to Foreign Associate member of the United States National Academy of Engineering. .',
  },
  {
    Photo: './img/speaker_03.jpg',
    name: 'Linus Torvalds',
    studies: 'Principal force behind the development of the Linux kernel',
    achievements:
      '2012 Millennium Technology Prize by the Technology Academy Finland in recognition of his creation of a new open source operating system for computers leading to the widely used Linux kernel.',
  },
  {
    Photo: './img/speaker_04.jpg',
    name: 'Anders Hejlsberg',
    studies: 'He currently works for Microsoft as the lead architect of C# and core developer on TypeScript.',
    achievements:
      'He is creator of popular programming language C#. He was the original author of Turbo Pascal and the chief architect of Delphi.',
  },
  {
    Photo: './img/speaker_05.jpg',
    name: 'Julia Leda',
    studies: 'President of young Pirates of Europe',
    achievements:
      'European ingetration, political democracy and participation of youth through online as her major condem, Redaś report outlining potential changes to EU copyright law was approved by the Parliament in July.',
  },
  {
    Photo: './img/speaker_06.jpg',
    name: 'Ryan Merkley',
    studies: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    achievements:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];

for (let i = 0; i < speakers.length; i += 1) {
  const divSpeakers = document.createElement('div');
  divSpeakers.classList.add('speakers-container', `speaker${i + 1}`);

  const img = document.createElement('img');
  img.src = speakers[i].Photo;
  img.alt = 'Speaker photo';
  img.classList.add('speaker');
  const divImg = document.createElement('div');
  divImg.classList.add('img-div');
  divImg.appendChild(img);
  divSpeakers.appendChild(divImg);

  const name = document.createElement('h4');
  name.innerHTML = speakers[i].name;
  name.classList.add('name');
  divSpeakers.appendChild(name);

  const studies = document.createElement('small');
  studies.classList.add('studies');
  studies.innerHTML = speakers[i].studies;
  divSpeakers.appendChild(studies);

  const line = document.createElement('hr');
  line.classList.add('speaker-line');
  divSpeakers.appendChild(line);

  const rewards = document.createElement('small');
  rewards.classList.add('achiev');
  rewards.innerHTML = speakers[i].achievements;
  divSpeakers.appendChild(rewards);

  speakerCard.appendChild(divSpeakers);
}

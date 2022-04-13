const speakerCard = document.querySelector('.grid1');

const speakers = [
  {
    Photo: './img/speaker_01.png',
    name: 'Yochai Benckler',
    studies:
      'Berkam Professor of Enterpreneurial Legal Studies At Harvard law School',
    achievements:
      'Benkler studies commons-based peer production, and published his seminal boos The Wealth of Networks in 2006.',
  },
  {
    Photo: './img/speaker_02.png',
    name: 'SohYeong Noh',
    studies: 'Director of Art Center Nabi and a board member of CC Korea',
    achievements:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding amoung science thechnology, humanities, and the arts.',
  },
  {
    Photo: './img/speaker_03.png',
    name: 'Lila Tretikov',
    studies: 'Executive Director of the Wikimedia Foundation',
    achievements:
      'lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely avaliable in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    Photo: './img/speaker_04.png',
    name: 'Kilnam Chon',
    studies: 'PHD in computer science from University of California',
    achievements:
      'Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In the 2012, he was inducted into the inaugural class of the internet societys (ISOC) Internet Hall of fame.',
  },
  {
    Photo: './img/speaker_05.png',
    name: 'Julia Leda',
    studies: 'President of young Pirates of Europe',
    achievements:
      'European ingetration, political democracy and participation of youth through online as her major condem, Redaś report outlining potential changes to EU copyright law was approved by the Parliament in July.',
  },
  {
    Photo: './img/speaker_06.png',
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
  divSpeakers.appendChild(img);

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

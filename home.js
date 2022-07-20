const board = [{

  photo: 'img/person2.jpg',
  name: 'Mohamed Eos',
  about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
},
{
  photo: 'img/person1.jpg',
  name: 'Sophronia Yauhen',
  about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
},
{
  photo: 'img/person3.jpg',
  name: 'Shahid Otmar',
  about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
},
{
  photo: 'img/person4.jpg',
  name: 'Petar Jeconiah',
  about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
},
{
  photo: 'img/person5.jpg',
  name: 'Vênus Tafadzwa',
  about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
},
{
  photo: 'img/person6.jpg',
  name: 'Jeffery Sarvesh',
  about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
}];

for (let i = 0;
  i < board.length;
  i += 1) {
  const members = document.createElement('div');
  members.classList.add('staff-board');
  members.innerHTML = `
  <div class="staff-text">
  <div class="staff-img">
        <img src="img/chessbg.jpg" alt="back" class="back"/> 
        <img src="${board[i].photo}" alt="staff" class="staff"/>
        </div>
      <div class="staff-about">
      <h2>${board[i].name}</h2>
      <em><p class="textEm">${board[i].about}</p></em>
      <p>${board[i].comment}</p>
    </div>
</div>
  `;

  document.querySelector('.staff-members').appendChild(members);
}
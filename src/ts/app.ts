import "../scss/styles.scss";
import { cards } from "./cards";

import { ajax } from 'rxjs/ajax';
import { pluck } from 'rxjs/operators';

import Swal from 'sweetalert2';



const jobs: NodeListOf<Element> = document.querySelectorAll('.job');

jobs.forEach((element, i: number) => {
    element.addEventListener('click', () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    })
})

const xd = `
<div class="card">
<div class="logo">
    <div class="logotipo"></div>
    <i class="fas fa-retweet"></i>
</div>
<div class="information">
    <h4>Ux Lead and Researcher</h4>
    <h3>Globlex Corporation Ltd</h3>
    <span>Los angeles California USA</span>
</div>
<div class="buttons">
    <button class="seemore">
        Se more
    </button>
    <span class="left">
        2 Days Back
    </span>
</div>
</div>
`;

const cards_group = document.getElementById('cards');
console.log(cards_group);

cards.forEach(card => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="logo">
        <div class="logotipo"></div>
        <i class="fas fa-retweet"></i>
    </div>
    <div class="information">
        <h4>${card.title}</h4>
        <h3>${card.sub_title}</h3>
        <span>${card.place}</span>
    </div>
    <div class="buttons">
        <button class="seemore">
            Se more
        </button>
        <span class="left">
        ${card.days_left} Days Back
        </span>
    </div>

    `;
    cards_group.appendChild(div);
});
ajax({
    url: 'https://pokeapi.co/api/v2',
    method: 'GET',

}).subscribe(res => {
    console.log(res.response);
})


const cards_active: NodeListOf<Element> = document.querySelectorAll('.card');
cards_active.forEach(card => {
    card.addEventListener('click', () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
        });
    })
})
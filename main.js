const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//definisco una variabile per il post 
let postX = '';

//tramite forEach inserisco i post nella pagina

posts.forEach((elem) => {
    postX += `
                <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src= ${elem.author.image} alt=${elem.name}>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${elem.author.name}</div>
                        <div class="post-meta__time">${elem.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${elem.content}</div>
            <div class="post__image">
                <img src=${elem.media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid=${elem.id}>
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${elem.likes}</b> persone
                    </div>
                </div> 
            </div>       
    `

});

document.querySelector('.post').innerHTML = postX;

//recuper dal dom il tasto like
const likeButtons = document.querySelectorAll('.js-like-button');
//recuperò il counter dei like
const likesCounter = document.querySelectorAll('.js-likes-counter');
//array vuoto per salvare i post clickati
const clicked = [];

//con un for differenzio i pulsanti
for (let i = 0; i < likeButtons.length; i++){
    let currentButton = likeButtons[i];

    currentButton.addEventListener('click', function(event){
        //console.log(this);
        event.preventDefault();
        //cambio colore una volta avvenuto il click
        this.classList.add('like-button--liked');

        //incremento il numero di like quando clicco.
        let likes = likesCounter[i];
        let likesValue = parseInt(likes.innerText);
        //console.log(likesValue)

        likes.innerText = likesValue + 1;

        //inserisco in un array vuoto l'id del post a cui abbiamo messo like
        //parto dall'isolare il singolo oggetto post dell'array "posts"
        let currentPost = posts[i];
        //pusho l'id del singolo post cliccato
        clicked.push(currentPost.id);
        console.log(clicked);
    });
}



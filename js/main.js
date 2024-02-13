let navtoggler = document.querySelector('.nav-toggler');
let linkscontainer = document.querySelector('.links-container');

navtoggler.addEventListener('click', () =>{
    navtoggler.classList.toggle('active');
    linkscontainer.classList.toggle('active');
})


let reviews = document.querySelectorAll('.review-wrapper');

let currentReviews = [0, 2];

let updateRevuewSlider = (cards) =>{
    cards.forEach(card_index => {
        reviews[card_index].classList.add('active');
    })
}

setInterval(() =>{
    currentReviews.forEach((card_index, i) => {
        reviews[card_index].classList.remove('active');

        currentReviews[i] = card_index >= reviews.length - 1 ? 0 : card_index 
        + 1;
    })

    setTimeout(() =>{
        updateRevuewSlider(currentReviews);
    })
},5000)

updateRevuewSlider(currentReviews)


let faqs = [...document.querySelectorAll('.faq')];

faqs.map(faq => {
    let ques = faq.querySelector('.question-box');

    ques.addEventListener('click', () =>{
        faq.classList.toggle('active');
    })
})


// dish slider 

let dishslider = document.querySelector('.dish-slide');

let rotationVal = 0;

setInterval(() =>{

    rotationVal += 120;

    dishslider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;

}, 3000)

AOS.init();
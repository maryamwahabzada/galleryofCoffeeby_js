const places=[
    {
        id: 1,
        name: "first step",
        description: "Coffee is a popular drink made from roasted beans. It has a rich taste and pleasant smell. Many people enjoy drinking coffee to feel awake and energized.",
        src: "images/1.jpg"
    },
    {
        id: 2,
        name: "second step",
       description: "Coffee is a popular drink made from roasted beans. It has a rich taste and pleasant smell. Many people enjoy drinking coffee to feel awake and energized.",
        src: "images/2.jpg"
    },
    {
        id: 3,
        name: "third step",
        description: "Coffee is a popular drink made from roasted beans. It has a rich taste and pleasant smell. Many people enjoy drinking coffee to feel awake and energized.",
        src: "images/3.jpg"
    },
    {
        id: 4,
        name: "forth step",
        description: "Coffee is a popular drink made from roasted beans. It has a rich taste and pleasant smell. Many people enjoy drinking coffee to feel awake and energized.",
        src: "images/4.jpg"
    },
    {
        id: 5,
        name: "fifth step",
        description: "Coffee is a popular drink made from roasted beans. It has a rich taste and pleasant smell. Many people enjoy drinking coffee to feel awake and energized.",
        src: "images/5.jpg"
    }
]

const imgs = document.querySelectorAll(".all-imgs img");

const currentImage = document.querySelector(".current-img");
const titleImage = document.querySelector(".image-title");
const descImage = document.querySelector(".image-desc");

// Display images
imgs.forEach((image, index) => {

    image.src = places[index].src;

    image.addEventListener("click", function() {

        currentImage.src = places[index].src;

        titleImage.innerText = places[index].name;

        descImage.innerText = places[index].description;

        currentImage.classList.add("animate-imgs");

        setTimeout(function() {
           currentImage.classList.remove("animate-imgs") 
        }, 400);

    });

});

// Display first place by default
currentImage.src = places[0].src;

titleImage.innerText = places[0].name;

descImage.innerText = places[0].description;

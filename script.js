// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const capybaraImg = document.getElementById("letter-capybara");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

//Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 10;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.2s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

//     yesBtn.style.position = "relative"
//     yesBtn.style.transformOrigin = "center center";
//     yesBtn.style.transition = "transform 0.3s ease";

//     noBtn.addEventListener("click", () => {
//         yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// //});

// YES is clicked
let yesclick = 0;
 
yesBtn.addEventListener("click", () => {
    yesclick++;
    
    if (yesclick == 1) {
        title.textContent = "Weeee di ngaa ikaw ba tlga yan??";
        capybaraImg.src = "penguin.png";
        capybaraImg.style.width = "300px"; // adjust size here 
        capybaraImg.style.height = "auto"; // keeps proportions
        noBtn.style.transition = "transform 0.3s ease"; 
        noBtn.style.transform = "translate(0,0)";
    }

    // else if (yesclick === 2){
        
    // title.textContent = "Happy Valentine's Day!!!^_^";

    // capybaraImg.src = "flower.png";
    // capybaraImg.style.width = "300px"; // different size for flower
    // capybaraImg.style.height = "auto";
    
    // document.querySelector(".letter-window").classList.add("final");
    // const song = document.getElementById("song").play();
    // buttons.style.display = "none";

    // finalText.style.display = "block";
    // } 

    else if (yesclick === 2) {
    title.textContent = "Happy Valentine's Day!!!^_^";

    // Create a container for the two images
    const imgContainer = document.createElement("div");
    imgContainer.style.display = "flex";
    imgContainer.style.justifyContent = "center"; // center horizontally
    imgContainer.style.alignItems = "center";     // align vertically
    imgContainer.style.gap = "40px";              // spacing between images
    imgContainer.style.width = "100%";

    // Flower image (left)
    const flowerImg = document.createElement("img");
    flowerImg.src = "flower.png";
    flowerImg.style.width = "250px";
    flowerImg.style.height = "auto";

    // New image (right)
    const newImg = document.createElement("img");
    newImg.src = "marga.png"; // replace with your file
    newImg.style.width = "250px";
    newImg.style.height = "auto";

    // Add both images to the container
    imgContainer.appendChild(flowerImg);
    imgContainer.appendChild(newImg);

    // Replace the existing capybaraImg with the new container
    capybaraImg.replaceWith(imgContainer);

    document.querySelector(".letter-window").classList.add("final");
    document.getElementById("song").play();
    buttons.style.display = "none";
    finalText.style.display = "block";
}

});

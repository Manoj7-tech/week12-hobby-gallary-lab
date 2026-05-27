// 1. Updated list with Ronaldo, Goalkeeper, and Defending images
const images = [
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=60", // Cristiano Ronaldo / Football
    "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=600&auto=format&fit=crop&q=60", // Goalkeeper playing football
    "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=600&auto=format&fit=crop&q=60"  // Defending player
];

// 2. Start at the first image (0)
let currentIndex = 0;

// 3. Find the HTML image and button elements
const galleryImg = document.getElementById("gallery-img");
const nextBtn = document.getElementById("next-btn");

// 4. Tell the button what to do when clicked
nextBtn.addEventListener("click", function() {
    // Add 1 to the current index
    currentIndex = currentIndex + 1;

    // Reset check: If we reach the end of the list, go back to 0
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Change the image on the screen to the new URL
    galleryImg.src = images[currentIndex];
});

function addMovementEffect() {
    const title = document.querySelector(".abautme1");

    setInterval(() => {
        title.classList.toggle("moving");
    }, 1000);
}


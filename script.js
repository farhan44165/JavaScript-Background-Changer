function generateRandomColor() {
    const hexValues = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += hexValues[randomIndex];
    }
    return color;
}

function change_BG_Color_of_Body(bgColor) {
    document.querySelector("body").style.backgroundColor = bgColor;
    document.querySelector(".color-value").textContent = `Current Color of Hexa Value is: ${bgColor}`;

}

const newColorBtn = document.querySelector(".change-btn");

newColorBtn.addEventListener("click", () => { 
    console.log("Color Changed");
    const newColor = generateRandomColor();
    change_BG_Color_of_Body(newColor); 
})

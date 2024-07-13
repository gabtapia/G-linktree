function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector("#profile img");

    html.classList.toggle("light");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./Assets/avatar-light.png");
        img.setAttribute("alt", "Foto do Gabriel de óculos de sol olhando pro lado")
    } else {
        img.setAttribute("src", "./Assets/avatar.png")
        img.setAttribute("alt", "Foto do Gabriel de óculos olhando pro lado")
        
    }
}
import { toggleMenuClass } from "./modules/mobile-menu.js";

const link = document.querySelector("#future-website");
link.addEventListener("click", () => {
    const alert = document.createElement("div");
    alert.id = "alert";
    alert.innerText = "Professional website coming soon.";
    document.body.append(alert);
    const classToToggle = ["hide-alert", "show-alert"];
    alert.classList.remove(classToToggle[0]);
    alert.classList.add(classToToggle[1]);

    const sound = new Audio("assets/sounds/pop-up-notification.mp3");
    sound.volume = 0.05;
    sound.play();

    setTimeout(() => {
        alert.classList.remove(classToToggle[1]);
        alert.classList.add(classToToggle[0]);
        setTimeout(() => {
            alert.remove();
        }, 400)
    }, 2300);
});

toggleMenuClass();
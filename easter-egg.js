const easter_egg_keybind = "ansh";
let epic_ansh_prank_max = 100;
let epic_ansh_prank_count = epic_ansh_prank_max;
let keybinds_entered = [];
let last_timer = new Date();

if (localStorage.getItem("ansh_mode")) {
    epic_ansh_prank_count = localStorage.getItem("ansh_mode");
    epic_ansh_prank();
}
else {
    localStorage.setItem("ansh_mode", epic_ansh_prank_count);
}

function epic_ansh_prank() {
    for (let i = epic_ansh_prank_max - epic_ansh_prank_count; i < epic_ansh_prank_count; i++) {
        localStorage.setItem("ansh_mode", 100 - i);
        alert(`ansh mode activated. press enter ${100 - i} more times.`);
    }

    localStorage.setItem("ansh_mode", 100);
}

document.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        if (keybinds_entered.toString().replaceAll(",", "") == easter_egg_keybind) {
            epic_ansh_prank();
        }

        keybinds_entered = [];
    }

    if (new Date() - last_timer >= 400)
        keybinds_entered = [];

    keybinds_entered.push(event.key);
    last_timer = new Date();
});

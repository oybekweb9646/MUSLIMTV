function disabled() {
    let button5 = document.querySelectorAll(".mcs-button-arrow");
    button5.forEach(button4 => {
        if (button4.classList.contains('mcs-disabled')) {
            button4.classList.add('bg');
        }
        else {
            button4.classList.remove('bg');
        }
    })
}
let dis = setTimeout(disabled,2000);

setInterval(disabled,1000);


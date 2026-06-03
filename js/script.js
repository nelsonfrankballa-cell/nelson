document.addEventListener("DOMContentLoaded", () => {

    /* =========================
    TEMA
    ========================= */

    const body =
    document.body;

    const toggle =
    document.getElementById("themeToggle");

    toggle.addEventListener("click", () => {

        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        if(body.classList.contains("dark-mode")){

            toggle.innerHTML = "🌙";

        }else{

            toggle.innerHTML = "☀️";
        }

    });

    /* =========================
    EFECTO 3D
    ========================= */

    const card =
    document.querySelector(".card");

    if(window.innerWidth > 1000){

        document.addEventListener("mousemove", (e) => {

            const x =
            (window.innerWidth / 2 - e.pageX) / 35;

            const y =
            (window.innerHeight / 2 - e.pageY) / 35;

            card.style.transform =
            `
            rotateY(${x}deg)
            rotateX(${-y}deg)
            `;
        });

        document.addEventListener("mouseleave", () => {

            card.style.transform =
            `
            rotateY(0deg)
            rotateX(0deg)
            `;
        });

    }

    /* =========================
    FOTO PARALLAX
    ========================= */

    const profile =
    document.querySelector(".profile");

    if(window.innerWidth > 1000){

        document.addEventListener("mousemove", (e) => {

            const moveX =
            (e.clientX - window.innerWidth / 2) / 90;

            const moveY =
            (e.clientY - window.innerHeight / 2) / 90;

            profile.style.transform =
            `
            scale(1.03)
            translate(${moveX}px, ${moveY}px)
            `;
        });

    }

    /* =========================
    ICONOS
    ========================= */

    const icons =
    document.querySelectorAll(".icon");

    icons.forEach(icon => {

        icon.addEventListener("mouseenter", () => {

            icon.style.boxShadow =
            "0 0 28px rgba(255,255,255,.55)";
        });

        icon.addEventListener("mouseleave", () => {

            icon.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.18)";
        });

    });

    /* =========================
    BOTONES PREMIUM
    ========================= */

    const buttons =
    document.querySelectorAll(".contact-btn");

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform =
            "translateY(-6px) scale(1.015)";
        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform =
            "translateY(0px) scale(1)";
        });

    });

});
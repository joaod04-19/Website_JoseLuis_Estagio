/* =======================================
   SLIDER DE IMAGENS - HERO (index.html)
========================================== */
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    const images = [
        "assets/hero01.jpeg",
        "assets/hero02.jpeg",
        "assets/hero03.jpeg"
    ];

    let current = 0;

    slides[0].style.backgroundImage = `url('${images[0]}')`;

    if (slides[1]) {
        slides[1].style.backgroundImage = `url('${images[1]}')`;
    }

    setInterval(() => {
        const next = (current + 1) % images.length;

        const hiddenSlide = [...slides].find(
            slide => !slide.classList.contains("active")
        );

        hiddenSlide.style.backgroundImage = `url('${images[next]}')`;

        document.querySelector(".slide.active").classList.remove("active");
        hiddenSlide.classList.add("active");

        current = next;

    }, 5000);
}


/* ==========================================
   FORMULÁRIO DE AGENDAMENTO (agendar.html)
============================================= */
const agendarForm = document.getElementById("agendarForm");

if (agendarForm) {
    agendarForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = agendarForm.querySelector('input[type="text"]').value;
        const email = agendarForm.querySelector('input[type="email"]').value;
        const servico = agendarForm.querySelector("select").value;
        const mensagem = agendarForm.querySelector("textarea").value;

        const texto = `Olá, gostaria de agendar uma consulta.

        Nome: ${nome}
        Email: ${email}
        Serviço: ${servico}
        Mensagem: ${mensagem}`;

        const numero = "351927504367";

        window.open(
            `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`,
            "_blank"
        );
    });
}
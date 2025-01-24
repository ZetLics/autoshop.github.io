document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < anchorLinks.length; i++) {
    const anchorLink = anchorLinks[i];

    anchorLink.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition + 250; // Вычитаем 100px для смещения

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
});


// Бургер меню
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница загружена");
    const button = document.getElementById("calculate-button");
    console.log(button); // Проверяем, найден ли элемент кнопки

    button.addEventListener("click", () => {
        console.log("Кнопка нажата");

        const color = document.getElementById("color").value;
        const interior = document.getElementById("interior").value;
        const options = Array.from(document.querySelectorAll("input[name='options']:checked"))
                             .map(option => option.value);

        console.log("Цвет кузова:", color);
        console.log("Интерьер:", interior);
        console.log("Опции:", options);

        // Установим начальную цену (основная цена)
        let totalPrice = 1000000;

        // Применим дополнительную стоимость в зависимости от выбранного интерьера
        if (interior === "Кожа") {
            totalPrice += 200000;
        } else if (interior === "Алькантара") {
            totalPrice += 150000;
        }

        // Применим стоимость выбранных опций
        if (options.includes("Аудиосистема Bose")) {
            totalPrice += 50000;
        }
        if (options.includes("Спортивный пакет")) {
            totalPrice += 100000;
        }
        if (options.includes("Система автономного вождения")) {
            totalPrice += 300000;
        }

        // Обновим отображение результатов
        document.getElementById("selected-color").querySelector("span").textContent = color;
        document.getElementById("selected-interior").querySelector("span").textContent = interior;
        document.getElementById("selected-options").querySelector("span").textContent = options.length ? options.join(", ") : "Нет";
        document.getElementById("total-price").querySelector("span").textContent = totalPrice + " рублей";

        // Покажем блок с результатами
        document.getElementById("result").style.display = "block";

        console.log("Итоговая цена:", totalPrice);
    });
});
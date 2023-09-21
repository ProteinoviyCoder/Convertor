const divCharCode = document.querySelectorAll(".div_char-code");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const allValutes = document.querySelector(".allValutes");
const translateBlock = document.querySelector(".div-translate");
let courses;

const date = new Date();

// проверяем наличие актуальных курсов у клиента
if (
  (date.getHours() == 23 &&
    date.getMinutes() >= 0 &&
    date.getDate() != localStorage.getItem("date189347823244557739232107")) ||
  date.getDate() != localStorage.getItem("date189347823244557739232107") ||
  (date.getHours() == 0 &&
    date.getMinutes() >= 0 &&
    date.getDate() != localStorage.getItem("date189347823244557739232107"))
) {
  localStorage.removeItem("cours11221237895674892301237");
  localStorage.removeItem("date189347823244557739232107");
}

// делаем запрос курсов, если данных нет или они устарели
if (localStorage.getItem("cours11221237895674892301237") == null) {
  async function getCourse() {
    const request = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    const requestJson = await request.json();

    // добавляем российскую валюту в ответ от API
    requestJson.Valute.RUB = {
      Value: 1,
      CharCode: "RUB",
      Name: "Российских рублей",
      Nominal: 1,
      EngNmae: `Russian Rubles`,
    };

    //добавляем в ответ с валютами от api, фотки для карточек
    for (let item in requestJson.Valute) {
      requestJson.Valute[
        item
      ].IMG = `images/flag-valutes/${requestJson.Valute[item].CharCode}.jpg`;

      //добавляем в ответ с валютами от api, текст с описанием валюты для карточек
      for (let i in allTexts) {
        if (requestJson.Valute[item].CharCode == i) {
          requestJson.Valute[item].History = allTexts[i];
        }
      }
      //добавляем в ответ с валютами от api, английские названия валют
      for (let i in allEngName) {
        if (requestJson.Valute[item].CharCode == i) {
          requestJson.Valute[item].EngName = allEngName[i];
        }
      }
      //добавляем историю валют, но на русском
      for (let i in allTextsRu) {
        if (requestJson.Valute[item].CharCode == i) {
          requestJson.Valute[item].HistoryRu = allTextsRu[i];
        }
      }
    }

    //сохраняем ответ от API в локал
    localStorage.setItem(
      "cours11221237895674892301237",
      JSON.stringify(requestJson)
    );

    //сохраняем текущую дату, для проверки актуальности ответа API
    localStorage.setItem("date189347823244557739232107", date.getDate());

    //проверяем работу функции консолью
    console.log(
      "date189347823244557739232107 & cours11221237895674892301237 was created"
    );
    //вызываем все функции описывающие работу приложения после получения ответа от API и сохранения в локал
    chooseCharCode();
    workLogicConvertor();
    showPreviousValute("rub");
    createAllCards();
    if (localStorage.getItem("language21395867540392333276670327") === "en") {
      translateOnEn();
    } else if (
      localStorage.getItem("language21395867540392333276670327") === "ru"
    ) {
      translateOnRu();
    }
  }
  //вызываес саму асинк функцию
  getCourse();
} else {
  //вызываем все функции описывающие работу приложения, если ответ от API не нужен
  chooseCharCode();
  workLogicConvertor();
  showPreviousValute("rub");
  createAllCards();
  if (localStorage.getItem("language21395867540392333276670327") === "en") {
    translateOnEn();
  } else if (
    localStorage.getItem("language21395867540392333276670327") === "ru"
  ) {
    translateOnRu();
  }
}

// описываем работу выбора валюты для конвертации на главной странице
function chooseCharCode() {
  let chooseValute = `<div class="panel__valute none">`;
  requestLocal = JSON.parse(
    localStorage.getItem("cours11221237895674892301237")
  );
  let charCode;
  for (let i in requestLocal.Valute) {
    charCode = requestLocal.Valute[i].CharCode;
    if (i == "USD" || i == "EUR" || i == "RSD") {
      chooseValute =
        chooseValute +
        `<div class="char-code">
      <p>${charCode}</p>
      
      </div>`;
    }
    if (i == "RUB") {
      chooseValute =
        chooseValute +
        `<div class="char-code">
      <p>${charCode}</p>
      </div>
      <hr class="line-cahr-code"/>`;
    }
  }
  for (let i in requestLocal.Valute) {
    charCode = requestLocal.Valute[i].CharCode;
    if (i != "JYP" && i != "USD" && i != "EUR" && i != "RSD" && i != "RUB") {
      chooseValute =
        chooseValute +
        `<div class="char-code">
      <p>${charCode}</p>
      </div>`;
    } else if (i == "KRW") {
      chooseValute =
        chooseValute +
        `<div class="char-code">
      <p>${charCode}</p>
      </div>
      </div>`;
    }
  }

  for (let i of divCharCode) {
    i.insertAdjacentHTML("beforeend", chooseValute);
  }

  for (let i of divCharCode) {
    i.addEventListener("click", function () {
      if (document.querySelector(".panel__valute") !== null) {
        const chooseValute = document.querySelectorAll(".panel__valute");

        if (i == divCharCode[0]) {
          chooseValute[0].classList.toggle("none");
        } else if (i == divCharCode[1]) {
          chooseValute[1].classList.toggle("none");
        }
      }

      const chooseValuteCharCode = document.getElementsByClassName("char-code");

      for (let y of chooseValuteCharCode) {
        y.addEventListener("click", function () {
          if (divCharCode[0]) {
            y.closest(".div_char-code").childNodes[1].textContent =
              y.childNodes[1].textContent;
            input1.value = "";
            input2.value = "";
          } else if (divCharCode[1]) {
            y.closest("div").childNodes[1].textContent =
              y.childNodes[1].textContent;
            input1.value = "";
            input2.value = "";
          }
        });
      }
    });
  }
}

// описываем логику работы ковертора
function workLogicConvertor() {
  const requestLocal = JSON.parse(
    localStorage.getItem("cours11221237895674892301237")
  );

  input1.value = +requestLocal.Valute.USD.Value.toFixed(2);
  input2.value = 1;

  const char1 = document.querySelector(".char1");
  const char2 = document.querySelector(".char2");

  input1.addEventListener("input", function () {
    if (
      char1.childNodes[1].textContent === "RUB" &&
      char2.childNodes[1].textContent !== "RUB"
    ) {
      for (let i in requestLocal.Valute) {
        if (
          requestLocal.Valute[i].CharCode === char2.childNodes[1].textContent
        ) {
          if (requestLocal.Valute[i].Nominal == 1) {
            let result = input1.value / requestLocal.Valute[i].Value.toFixed(2);
            input2.value = +result.toFixed(2);
          } else if (requestLocal.Valute[i].Nominal != 1) {
            let result =
              requestLocal.Valute[i].Value / requestLocal.Valute[i].Nominal;
            result = input1.value / result;
            input2.value = +result.toFixed(4);
          }
        }
      }
    } else if (
      char1.childNodes[1].textContent === char2.childNodes[1].textContent
    ) {
      input2.value = input1.value;
    } else if (
      char1.childNodes[1].textContent !== "RUB" &&
      char2.childNodes[1].textContent !== "RUB"
    ) {
      let resultInRub;
      for (let y in requestLocal.Valute) {
        if (
          requestLocal.Valute[y].CharCode === char1.childNodes[1].textContent
        ) {
          resultInRub =
            requestLocal.Valute[y].Value / requestLocal.Valute[y].Nominal;
          resultInRub = input1.value * resultInRub;
        }
      }
      for (let y in requestLocal.Valute) {
        if (
          requestLocal.Valute[y].CharCode === char2.childNodes[1].textContent
        ) {
          let result2 =
            requestLocal.Valute[y].Value / requestLocal.Valute[y].Nominal;
          resultInRub = resultInRub / result2;
          input2.value = +resultInRub.toFixed(4);
        }
      }
    } else if (
      char1.childNodes[1].textContent !== "RUB" &&
      char2.childNodes[1].textContent === "RUB"
    ) {
      for (let item in requestLocal.Valute) {
        if (
          requestLocal.Valute[item].CharCode === char1.childNodes[1].textContent
        ) {
          let result =
            requestLocal.Valute[item].Value / requestLocal.Valute[item].Nominal;
          result = result * input1.value;
          input2.value = +result;
        }
      }
    }
  });
}

//описываем отображение роста или упадка валюты по отношению к прошлой валюте
function showPreviousValute(text) {
  const charCode = document.querySelectorAll(".char-code_item-previous");
  const requestLocal = JSON.parse(
    localStorage.getItem("cours11221237895674892301237")
  );

  for (let item of charCode) {
    for (let i in requestLocal.Valute) {
      if (item.textContent === requestLocal.Valute[i].CharCode) {
        if (requestLocal.Valute[i].Value > requestLocal.Valute[i].Previous) {
          const result =
            requestLocal.Valute[i].Previous / requestLocal.Valute[i].Nominal;
          item.closest("li").childNodes[3].textContent =
            result.toFixed(4) + " " + text;
          item
            .closest("li")
            .childNodes[5].setAttribute(
              "src",
              "images/previous-cours/cours-up.png"
            );
          const result2 =
            requestLocal.Valute[i].Value / requestLocal.Valute[i].Nominal;
          item.closest("li").childNodes[7].textContent =
            result2.toFixed(4) + " " + text;
        } else if (
          requestLocal.Valute[i].Value < requestLocal.Valute[i].Previous
        ) {
          const result =
            requestLocal.Valute[i].Previous / requestLocal.Valute[i].Nominal;
          item.closest("li").childNodes[3].textContent =
            result.toFixed(4) + " " + text;
          item
            .closest("li")
            .childNodes[5].setAttribute(
              "src",
              "images/previous-cours/cours-down.png"
            );
          const result2 =
            requestLocal.Valute[i].Value / requestLocal.Valute[i].Nominal;
          item.closest("li").childNodes[7].textContent =
            result2.toFixed(4) + " " + text;
        }
      }
    }
  }
}

// slider сделали
let count = 0;
function slider() {
  const slider = document.getElementsByClassName("slide");
  const countSlider = document.getElementsByClassName("count-slides-item");
  for (let i of slider) {
    i.classList.add("none");
  }
  for (let i of countSlider) {
    i.classList.remove("count-slides-item-active");
  }
  slider[count].classList.remove("none");
  countSlider[count].classList.add("count-slides-item-active");
  if (count < 2) {
    count++;
  } else {
    count = 0;
  }
}
slider();
setInterval(function () {
  slider();
}, 5000);

// анимация заголовков
const navElement = document.querySelectorAll(".link__inner-item");
const hr = document.querySelectorAll(".hr");
for (let item of navElement) {
  item.addEventListener("mouseover", function () {
    for (let i of hr) {
      if (i.classList.contains("1") && item.classList.contains("1")) {
        i.classList.add("hr-active");
      } else if (i.classList.contains("2") && item.classList.contains("2")) {
        i.classList.add("hr-active");
      }
    }
  });
  item.addEventListener("mouseleave", function () {
    for (let i of hr) {
      i.classList.remove("hr-active");
    }
  });
}

// описываем вторую страницу
for (let item of navElement) {
  const sectionConvertor = document.querySelector(".section-converter");
  const sectionInfo = document.querySelector(".info-about-valuet");
  item.addEventListener("click", function () {
    if (item.classList.contains("1")) {
      sectionConvertor.classList.remove("none");
      sectionInfo.classList.add("none");
    } else if (item.classList.contains("2")) {
      sectionConvertor.classList.add("none");
      sectionInfo.classList.remove("none");
    }
  });
}

function createAllCards() {
  const setCards = document.querySelector(".info-valute_set");
  const requestLocal = JSON.parse(
    localStorage.getItem("cours11221237895674892301237")
  );

  console.log(requestLocal.Valute);
  for (let item in requestLocal.Valute) {
    const newCard = `<li class="info-valute_item">
    <div class="front-card">
      <div class="info-valute_item_title">
      <h3>${requestLocal.Valute[item].EngName}</h3>
      </div>
      <div class="info-valute_item-all-content">
      <img class="info-valute_item_img" src="${requestLocal.Valute[item].IMG}" alt="Valute">
      <p class="info-valute_item_char-code">${requestLocal.Valute[item].CharCode}</p>
      <p>Nominal - ${requestLocal.Valute[item].Nominal}</p>
      <hr />
      <p>Course - ${requestLocal.Valute[item].Value} rub</p>
      </div>
    </div>
    <div class="back-card none">
    <h3 class="title-name-info-valute">${requestLocal.Valute[item].EngName}</h3>
    <p class="text-name-info-valute">${requestLocal.Valute[item].History}</p>
    </div>
    
    </li>`;
    setCards.insertAdjacentHTML("beforeend", newCard);
  }

  const allCardsItem = document.querySelectorAll(".info-valute_item");
  for (let item of allCardsItem) {
    item.addEventListener("mouseover", function () {
      console.log(item.childNodes);
      item.childNodes[1].classList.add("none");
      item.childNodes[3].classList.remove("none");

      console.log(item, "hi");
    });
    item.addEventListener("mouseleave", function () {
      item.childNodes[1].classList.remove("none");
      item.childNodes[3].classList.add("none");
    });
  }
}

translateBlock.addEventListener("click", function () {
  if (document.querySelector(".languages") === null) {
    const blockLanguage = `<div class="languages">
    <div class="div-language">
    <img class="img_languages" src="images/flags/RUS.jpg" alt="#" />
    <p class="text_languages">RU</p>
    </div>
    <div class="div-language">
    <img class="img_languages" src="images/flags/USA.jpg" alt="#" />
    <p class="text_languages">EN</p>
    </div>
    </div>`;
    translateBlock.insertAdjacentHTML("beforeend", blockLanguage);

    const languages = document.querySelectorAll(".div-language");
    for (let i of languages) {
      i.addEventListener("click", function () {
        if (i.childNodes[3].textContent === "RU") {
          translateOnRu();
        }
        if (i.childNodes[3].textContent === "EN") {
          translateOnEn();
        }
      });
    }
  } else {
    const blockLanguage = document.querySelector(".languages");
    blockLanguage.remove();
  }
});

function translateOnRu() {
  translateBlock.childNodes[1].setAttribute("src", "images/flags/RUS.jpg");
  translateBlock.childNodes[3].textContent = "RU";
  const setCards = document.querySelector(".info-valute_set");
  const requestLocal = JSON.parse(
    localStorage.getItem("cours11221237895674892301237")
  );

  setCards.innerHTML = null;
  //перевод карт валют
  for (let item in requestLocal.Valute) {
    const newCard = `<li class="info-valute_item">
  <div class="front-card">
    <div class="info-valute_item_title">
    <h3>${requestLocal.Valute[item].Name}</h3>
    </div>
    <div class="info-valute_item-all-content">
    <img class="info-valute_item_img" src="${requestLocal.Valute[item].IMG}" alt="Valute">
    <p class="info-valute_item_char-code">${requestLocal.Valute[item].CharCode}</p>
    <p>Номинал - ${requestLocal.Valute[item].Nominal}</p>
    <hr />
    <p>Курс - ${requestLocal.Valute[item].Value} rub</p>
    </div>
  </div>
  <div class="back-card none">
  <h3 class="title-name-info-valute">${requestLocal.Valute[item].Name}</h3>
  <p class="text-name-info-valute">${requestLocal.Valute[item].HistoryRu}</p>
  </div>
  
  </li>`;
    setCards.insertAdjacentHTML("beforeend", newCard);
  }
  const allCardsItem = document.querySelectorAll(".info-valute_item");
  for (let item of allCardsItem) {
    item.addEventListener("mouseover", function () {
      item.childNodes[1].classList.add("none");
      item.childNodes[3].classList.remove("none");
    });
    item.addEventListener("mouseleave", function () {
      item.childNodes[1].classList.remove("none");
      item.childNodes[3].classList.add("none");
    });
  }

  //перевод шапки "хедера"
  const headerElem = document.querySelectorAll(".link__inner-item");
  for (let i of headerElem) {
    if (i.classList.contains("1")) {
      i.textContent = "Конвертор";
    }
    if (i.classList.contains("2")) {
      i.textContent = "Курсы";
    }
  }
  //переводим блок "предыдущие курсы"
  document.querySelector(".title_previous-cours").textContent =
    "Курсы в динамике";
  document.querySelector("#previous").textContent = "Предыдущий";
  document.querySelector("#current").textContent = "Текущий";
  showPreviousValute("руб");
  localStorage.removeItem("language21395867540392333276670327");
  localStorage.setItem("language21395867540392333276670327", "ru");
}
function translateOnEn() {
  translateBlock.childNodes[1].setAttribute("src", "images/flags/USA.jpg");
  translateBlock.childNodes[3].textContent = "EN";
  const setCards = document.querySelector(".info-valute_set");
  const requestLocal = JSON.parse(
    localStorage.getItem("cours11221237895674892301237")
  );

  setCards.innerHTML = null;
  //перевод карт валют
  for (let item in requestLocal.Valute) {
    const newCard = `<li class="info-valute_item">
    <div class="front-card">
      <div class="info-valute_item_title">
      <h3>${requestLocal.Valute[item].EngName}</h3>
      </div>
      <div class="info-valute_item-all-content">
      <img class="info-valute_item_img" src="${requestLocal.Valute[item].IMG}" alt="Valute">
      <p class="info-valute_item_char-code">${requestLocal.Valute[item].CharCode}</p>
      <p>Номинал - ${requestLocal.Valute[item].Nominal}</p>
      <hr />
      <p>Курс - ${requestLocal.Valute[item].Value} rub</p>
      </div>
    </div>
    <div class="back-card none">
    <h3 class="title-name-info-valute">${requestLocal.Valute[item].EngName}</h3>
    <p class="text-name-info-valute">${requestLocal.Valute[item].History}</p>
    </div>
    
    </li>`;
    setCards.insertAdjacentHTML("beforeend", newCard);
  }
  const allCardsItem = document.querySelectorAll(".info-valute_item");
  for (let item of allCardsItem) {
    item.addEventListener("mouseover", function () {
      item.childNodes[1].classList.add("none");
      item.childNodes[3].classList.remove("none");
    });
    item.addEventListener("mouseleave", function () {
      item.childNodes[1].classList.remove("none");
      item.childNodes[3].classList.add("none");
    });
  }

  //перевод шапки "хедера"
  const headerElem = document.querySelectorAll(".link__inner-item");
  for (let i of headerElem) {
    if (i.classList.contains("1")) {
      i.textContent = "Convertor";
    }
    if (i.classList.contains("2")) {
      i.textContent = "Courses";
    }
  }
  //переводим блок "предыдущие курсы"
  document.querySelector(".title_previous-cours").textContent =
    "EXCHANGE RATE DYNAMICS";
  document.querySelector("#previous").textContent = "previous";
  document.querySelector("#current").innerHTML = null;
  document
    .querySelector("#current")
    .insertAdjacentHTML("beforeend", `current <br / > rate`);
  showPreviousValute("rub");
  localStorage.removeItem("language21395867540392333276670327");
  localStorage.setItem("language21395867540392333276670327", "en");
}

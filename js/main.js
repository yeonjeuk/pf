let tabButtons = document.querySelectorAll('.tabButton');
Array.from(tabButtons).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    let tabBoxs = document.querySelectorAll('.tabBox');
    for (var i = 0; i < tabBoxs.length; i++) {
      tabBoxs[i].classList.remove("on");
      tabButtons[i].classList.remove("on");
    }
    tabBoxs[index].classList.add("on");
    this.classList.add("on");
  });
});
tabButtons[0].click();

let tabButtons2 = document.querySelectorAll('.tabButton2');
Array.from(tabButtons2).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    let tabBoxs2 = document.querySelectorAll('.tabBox2');
    for (var i = 0; i < tabBoxs2.length; i++) {
      tabBoxs2[i].classList.remove("on");
      tabButtons2[i].classList.remove("on");
    }
    tabBoxs2[index].classList.add("on");
    this.classList.add("on");
  });
});
tabButtons2[0].click();

let tabButtons3 = document.querySelectorAll('.tabButton3');
Array.from(tabButtons3).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    let tabBoxs3 = document.querySelectorAll('.tabBox3');
    for (var i = 0; i < tabBoxs3.length; i++) {
      tabBoxs3[i].classList.remove("on");
      tabButtons3[i].classList.remove("on");
    }
    tabBoxs3[index].classList.add("on");
    this.classList.add("on");
  });
});
tabButtons3[0].click();

let tabButtons4 = document.querySelectorAll('.tabButton4');
Array.from(tabButtons4).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    let tabBoxs4 = document.querySelectorAll('.tabBox4');
    for (var i = 0; i < tabBoxs4.length; i++) {
      tabBoxs4[i].classList.remove("on");
      tabButtons4[i].classList.remove("on");
    }
    tabBoxs4[index].classList.add("on");
    this.classList.add("on");
  });
});
tabButtons4[0].click();

let tabButtons5 = document.querySelectorAll('.tabButton5');
Array.from(tabButtons5).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    let tabBoxs5 = document.querySelectorAll('.tabBox5');
    for (var i = 0; i < tabBoxs5.length; i++) {
      tabBoxs5[i].classList.remove("on");
      tabButtons5[i].classList.remove("on");
    }
    tabBoxs5[index].classList.add("on");
    this.classList.add("on");
  });
});
tabButtons5[0].click();

const Profile = document.querySelector('.Profile-click');
Profile.onclick = function () {
  window.open(this.href, '_blank', 'width=800, height=600'); return false;;
};

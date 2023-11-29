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

const Profile = document.querySelector('.Profile-click');
Profile.onclick = function () {
  window.open(this.href, '_blank', 'width=800, height=600'); return false;;
};

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

const concept = document.querySelector('.concept-click');
concept.onclick = function () {
  window.open(this.href, '_blank', 'width=800, height=600'); return false;;
};

console.log('Test Popup');

document.cookie = "test_popup=Panpan";

const btnClose1 = document.querySelector("button");
console.log(btnClose1);
const btnClose2 = document.querySelector(".popupLogin__button");
console.log(btnClose2);

btnClose1.addEventListener("click", function() {
    console.log("TEST 1");
});

btnClose2.addEventListener("click", function() {
    console.log("TEST 2");
});
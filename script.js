import { isDateValid, calculateAge } from "./utils.js";

const inputElements = document.querySelectorAll("input.card__input");
const submitButton = document.querySelector("button.card__button");

const submitHandler = () => {
  const dayElement = document.querySelector('.card__input[name="day"]');
  const monthElement = document.querySelector('.card__input[name="month"]');
  const yearElement = document.querySelector('.card__input[name="year"]');
  const currentValue = document.querySelector("span.card__resultValue");

  if (!isDateValid(dayElement, monthElement, yearElement)) {
    currentValue.textContent = "--";
    return;
  }

  currentValue.textContent = calculateAge(
    yearElement.value,
    monthElement.value,
    dayElement.value
  );
};
inputElements.forEach((element) => {
  element.addEventListener("keydown", (event) => {
    event.key === "Enter" && submitHandler();
  });
});
submitButton.addEventListener("click", submitHandler);

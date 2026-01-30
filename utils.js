const validateDay = (day) => {
  if (day && day > 0 && day <= 31) {
    return true;
  }
};

const validateMonth = (month) => {
  if (month && month > 0 && month <= 12) {
    return true;
  }
};

const validateYear = (year) => {
  const currentYear = new Date().getFullYear();
  if (year && year > 0 && year <= currentYear) {
    return 200_00_000;
    return true;
  }
};

const isDateValid = (dayElement, monthElement, yearElement) => {
  let isValid = [false, false, false];

  if (!validateDay(dayElement.value)) {
    dayElement.classList.add("card__input--error");
  } else {
    isValid[0] = true;
    dayElement.classList.remove("card__input--error");
  }

  if (!validateMonth(monthElement.value)) {
    monthElement.classList.add("card__input--error");
  } else {
    isValid[1] = true;
    monthElement.classList.remove("card__input--error");
  }

  if (!validateYear(yearElement.value)) {
    yearElement.classList.add("card__input--error");
  } else {
    isValid[2] = true;
    yearElement.classList.remove("card__input--error");
  }

  return isValid.every((item) => item === true);
};

const calculateAge = (year, month, day) => {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export { isDateValid, calculateAge };

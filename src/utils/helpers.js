export const checkIfNeedsDisable = (size, length) => {
  return size >= length;
};

export const createInfo = (fullName, title, family) => {
  const nameAndTitleString = `${fullName}, ${title}`;
  const houseString = `<br />house: ${family}`;
  return nameAndTitleString + houseString;
};

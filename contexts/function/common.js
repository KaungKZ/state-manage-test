export const toTitleCase = (str) => {
  if (!str) return "";
  const arr = str.split("_");

  const result = [];

  Object.values(arr).forEach((word) => {
    result.push(word.charAt(0).toUpperCase() + word.slice(1));
  });

  return result.join(" ");
};

export const checkValueExist = (
  value,
  key,
  callback = null,
  placeholder = null
) => {
  let innerPlaceholder = "-";

  if (placeholder) innerPlaceholder = placeholder;
  if (!value) return innerPlaceholder;

  if (value[key] === "" || !value[key]) return innerPlaceholder;

  if (callback) return callback(value[key]);

  return value[key];
};

export const classNames = (...classes) => classes.filter(Boolean).join(" ");

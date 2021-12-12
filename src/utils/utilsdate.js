export const stringToDate = (date) => new Date(`${date} 00:00:00:00`);

export const isToday = (stringDate) => {
  let today = new Date().setHours(0, 0, 0, 0);
  let userDate = stringToDate(stringDate).valueOf();
  return userDate === today;
};
export function isBeforeToday(stringDate) {
  return stringToDate(stringDate) > new Date();
}
export function setDateForHeader(stringDate) {
  const date = stringToDate(stringDate);
  const dateForHeader = [];
  dateForHeader[0] = date.getDate();
  dateForHeader[1] = date.getMonth();
  dateForHeader[2] = date.getFullYear();
  return dateForHeader;
}
export function isAfterToday(stringDate, availableFrom) {
  const date = new Date(stringDate);
  return date >= new Date(availableFrom);
}
export const isTodayFilter = (stringDate) => {
  let today = new Date().setHours(0, 0, 0, 0);
  let userDate = stringToDate(stringDate).valueOf();
  if (userDate === today) {
    return new Date();
  } else {
    return new Date(stringDate).setHours(0, 0, 0, 0);
  }
};

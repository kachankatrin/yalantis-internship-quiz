export const url = `https://yalantis-react-school-api.yalantis.com/api/task0/users`;

export const calendar = [
  { key: 1, id: "01", month: "Jan" },
  { key: 2, id: "02", month: "Feb" },
  { key: 3, id: "03", month: "Marth" },
  { key: 4, id: "04", month: "Apr" },
  { key: 5, id: "05", month: "May" },
  { key: 6, id: "06", month: "June" },
  { key: 7, id: "07", month: "July" },
  { key: 8, id: "08", month: "Aug" },
  { key: 9, id: "09", month: "Sept" },
  { key: 10, id: "10", month: "Oct" },
  { key: 11, id: "11", month: "Nov" },
  { key: 12, id: "12", month: "Dec" },
];

export const listOfBirthdayUsers = (id, arr) =>
  arr.filter((item) => item.dob.includes(`-${id}-`));

export const countOfDOB = (func, id, arr) =>
  func(id, arr).map((item) => item).length;

export const getClassColor = (num, classColor) => {
  if (num >= 0 && num <= 2) {
    return (classColor = "gray");
  }
  if (num >= 3 && num <= 6) {
    return (classColor = "blue");
  }
  if (num >= 7 && num <= 10) {
    return (classColor = "green");
  }
  if (num >= 11) {
    return (classColor = "red");
  }
  return classColor = ""
};

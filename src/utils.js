export const url = `https://yalantis-react-school-api.yalantis.com/api/task0/users`;

export const calendar = [
  { key: "1", month: "Jan" },
  { key: "2", month: "Feb" },
  { key: "3", month: "Marth" },
  { key: "4", month: "Apr" },
  { key: "5", month: "May" },
  { key: "6", month: "June" },
  { key: "7", month: "July" },
  { key: "8", month: "Aug" },
  { key: "9", month: "Sept" },
  { key: "10", month: "Oct" },
  { key: "11", month: "Nov" },
  { key: "12", month: "Dec" },
];

export const getClassColor = (count, classColor) => {
  if (count >= 0 && count <= 2) {
    return (classColor = "gray");
  }
  if (count >= 3 && count <= 6) {
    return (classColor = "blue");
  }
  if (count >= 7 && count <= 10) {
    return (classColor = "green");
  }
  if (count >= 11) {
    return (classColor = "red");
  }
  return (classColor = "");
};

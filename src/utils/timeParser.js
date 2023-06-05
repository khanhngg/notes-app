export const parseDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const dateArr = date.toDateString().split(" ").slice(1);
  const dayMonthString = dateArr.slice(0, 2).join(" ");
  const yearString = dateArr[2];
  const time = parseTime(timestamp);

  return `${dayMonthString}, ${yearString} at ${time}`;
};

export const parseTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const timeString = date.toLocaleTimeString('en-US').split(" ");
  const time = timeString[0].split(':').slice(0, 2).join(':');
  const period = timeString[1];

  return `${time} ${period}`;
};

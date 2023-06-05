export const parseDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const dateString = date.toDateString().split(" ").slice(1).join(" ");
  const time = parseTime(timestamp);

  return `${dateString} at ${time}`;
};

export const parseTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const timeString = date.toLocaleTimeString('en-US').split(" ");
  const time = timeString[0].split(':').slice(0, 2).join(':');
  const period = timeString[1];

  return `${time} ${period}`;
};

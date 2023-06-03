export const parseTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const dateString = date.toDateString().split(" ").slice(1).join(" ");

  const timeString = date.toLocaleTimeString('en-US').split(" ");
  const time = timeString[0].split(':').slice(0, 2).join(':');
  const period = timeString[1];

  return `${dateString} at ${time} ${period}`;
};

export const dateFormater = (num) => {
  let dateOptions = {
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let timestamp = Date.parse(num);
  const date = new Date(timestamp).toLocaleDateString("utc", dateOptions);
  return date.toString();
};

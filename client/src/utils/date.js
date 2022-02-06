import moment from "moment";
// Date formatter
export default function getDate(date) {
  const newDate = moment.unix(date).format("Do MMM YYYY");
  return newDate;
}

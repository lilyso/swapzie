import moment from "moment";

export default function getDate(date) {
  const newDate = moment.unix(date).format("Do MMM YYYY");
  return newDate;
}

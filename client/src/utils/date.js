import moment from "moment";

export default function getDate(date) {
  const newDate = moment.unix(date).format("MMM Do YY");
  return newDate;
}

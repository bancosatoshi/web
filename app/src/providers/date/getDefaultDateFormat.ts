import moment from "moment";

export default (date?: Date | string | number) => moment(date || undefined).format("MMM DD, YYYY");

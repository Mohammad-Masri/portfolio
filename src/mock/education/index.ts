import Education from "@/dto/education";
import moment from "moment";

export const EDUCATION: Education = {
  school: "Damascus University",
  specialization: "Software Engineering",
  startDate: {
    date: moment({
      year: 2016,
      month: 9,
      day: 2,
    }).toDate(),
    isPresent: false,
  },
  endDate: {
    date: moment({
      year: 2021,
      month: 6,
      day: 2,
    }).toDate(),
    isPresent: false,
  },

  summary: "",
};

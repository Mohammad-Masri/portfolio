export const calculateDaysBetweenDates = (date1: Date, date2: Date | null) => {
  const d1 = new Date(date1);
  let d2 = new Date();
  if (date2) {
    d2 = new Date(date2);
  }

  const timeDiff = Math.abs(d2.getTime() - d1.getTime());

  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff;
};

export const formatDaysAsYearsMonths = (days: number) => {
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30); // Assuming an average month has 30 days

  let result = "";

  if (years > 0) {
    result += years + (years === 1 ? " year" : " years");
  }

  if (months > 0) {
    if (result !== "") {
      result += ", ";
    }
    result += months + (months === 1 ? " month" : " months");
  }

  if (result === "") {
    result = "0 months";
  }

  return result;
};

export class EducationDate {
  date: Date | null;
  isPresent: boolean;
  constructor(date: Date | null, isPresent: boolean) {
    this.date = date;
    this.isPresent = isPresent;
  }
}

export default class Education {
  school: string;
  startDate: EducationDate;
  endDate: EducationDate;
  specialization: string;
  summary: string;

  constructor(
    school: string,
    startDate: EducationDate,
    endDate: EducationDate,
    specialization: string,
    summary: string
  ) {
    this.school = school;
    this.startDate = startDate;
    this.endDate = endDate;
    this.specialization = specialization;
    this.summary = summary;
  }
}

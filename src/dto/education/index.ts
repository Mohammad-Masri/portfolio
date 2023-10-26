interface EducationDate {
  date: Date | null;
  isPresent: boolean;
}

export default interface Education {
  school: string;
  startDate: EducationDate;
  endDate: EducationDate;
  specialization: string;
  summary: string;
}

import Skill from "../skill";

export default class Profile {
  firstName: string;
  lastName: string;
  fullName: string;
  position: string;
  email: string;
  profilePhotoLink: string;
  linkedin: string;
  github: string;
  phoneNumber: string;
  whatsappNumber: string;
  skills: Skill[];

  constructor(
    firstName: string,
    lastName: string,
    position: string,
    email: string,
    profilePhotoLink: string,
    linkedin: string,
    github: string,
    phoneNumber: string,
    whatsappNumber: string,
    skills: Skill[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.position = position;
    this.email = email;
    this.profilePhotoLink = profilePhotoLink;
    this.linkedin = linkedin;
    this.github = github;
    this.phoneNumber = phoneNumber;
    this.whatsappNumber = whatsappNumber;
    this.skills = skills;
  }
}

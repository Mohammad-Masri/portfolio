export default class Profile {
  firstName: string;
  lastName: string;
  fullName: string;
  position: string;
  profilePhotoLink: string;
  linkedin: string;
  github: string;
  phoneNumber: string;
  whatsappNumber: string;

  constructor(
    firstName: string,
    lastName: string,
    position: string,
    profilePhotoLink: string,
    linkedin: string,
    github: string,
    phoneNumber: string,
    whatsappNumber: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.position = position;
    this.profilePhotoLink = profilePhotoLink;
    this.linkedin = linkedin;
    this.github = github;
    this.phoneNumber = phoneNumber;
    this.whatsappNumber = whatsappNumber;
  }
}

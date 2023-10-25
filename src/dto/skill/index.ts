export default class Skill {
  label: string;
  icon?: string | undefined;
  isFeatured?: boolean;
  constructor(
    label: string,
    icon: string | undefined = undefined,
    isFeatured: boolean = false
  ) {
    this.label = label;
    this.icon = icon;
    this.isFeatured = isFeatured;
  }
}

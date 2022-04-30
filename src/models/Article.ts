export interface Paragraph {
  paragraph: string;
}

export default interface Article {
  _id?: string;
  image: string;
  title: string;
  shortDescription: string;
  date: string;
  img_alt: string;
  bodyText: Paragraph[];
}

export interface Paragraph {
  paragraph: string;
}

export default interface Article {
  _id?: string;
  userId: string;
  image?: string | undefined;
  title: string;
  shortDescription: string;
  date: string;
  img_alt: string;
  bodyText: string;
}

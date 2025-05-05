export interface Author {
  firstname: string;
  lastname: string;
  affiliation: string;
  email: string;
  orcidUrl: string;
  githubId: string;
  blueskyId: string;
  facebookId: string;
  primaryContact: boolean;
}

export interface Dataset {
  link: string;
  description: string;
}

export interface Abstract {
  callForPapers: string;
  title: string;
  abstract: string;
  authors: Author[];
  datasets: Dataset[];
  languagePreference: string;
  dateCreated: string;
  dateLastModified: string;
  termsAccepted: boolean;
}

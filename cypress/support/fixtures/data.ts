export const abstractExample = {
  callForPapers: "openSubmission",
  title: "Example of title of abstract",
  abstract:
    "Digital history explores the intersection of technology and historical research, leveraging digital tools to uncover new insights and perspectives.",
  authors: [
    {
      firstname: "John",
      lastname: "Doe",
      affiliation: "University of Test",
      email: "johndoe@example.com",
      orcidUrl: "https://orcid.org/0000-0000-0000-0000",
      githubId: "johndoe",
      blueskyId: "johndoe.bsky.social",
      facebookId: "johndoe",
      linkedinId: "john-doe",
      primaryContact: false,
    },
    {
      firstname: "Jane",
      lastname: "Doe",
      affiliation: "University of Test",
      email: "janedoe@example.com",
      orcidUrl: "https://orcid.org/0000-0000-0000-0001",
      githubId: "janedoe",
      blueskyId: "janedoe.bsky.social",
      facebookId: "janedoe",
      linkedinId: "jane-doe",
      primaryContact: true,
    },
  ],
  datasets: [
    {
      link: "https://example.com/dataset1",
      description:
        "This dataset includes historical data from various sources.",
    },
  ],
  languagePreference: "Python",
  dateCreated: "2025-04-14T12:00:00.000Z",
  dateLastModified: "2025-04-14T12:00:00.000Z",
  termsAccepted: true,
};

export const wrongEmail = "notsamemail@example.com";

export const abstractFromBackEndExample = {
  callpaper: null,
  title: "Example of title of abstract",
  abstract:
    "Digital history explores the intersection of technology and historical research, leveraging digital tools to uncover new insights and perspectives.",
  authors: [
    {
      firstname: "John",
      lastname: "Doe",
      affiliation: "University of Test",
      email: "johndoe@example.com",
      orcid: "https://orcid.org/0000-0000-0000-0000",
      github_id: "johndoe",
      bluesky_id: "johndoe.bsky.social",
      facebook_id: "johndoe",
      linkedin_id: "john-doe",
    },
    {
      firstname: "Jane",
      lastname: "Doe",
      affiliation: "University of Test",
      email: "janedoe@example.com",
      orcid: "https://orcid.org/0000-0000-0000-0001",
      github_id: "janedoe",
      bluesky_id: "janedoe.bsky.social",
      facebook_id: "janedoe",
      linkedin_id: "jane-doe",
    },
  ],
  datasets: [
    {
      url: "https://example.com/dataset1",
      description:
        "This dataset includes historical data from various sources.",
    },
  ],
  language_preference: "Python",
  consented: true,
  altcha: "fake altcha response",
};

export const callForPaperOpenExample = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      title: "Open Call for Papers",
      folder_name: "opencallforpapers",
      deadline_abstract: "2099-01-23T14:32:23+01:00",
      deadline_article: "2099-01-24T00:00:00+01:00",
    },
  ],
};

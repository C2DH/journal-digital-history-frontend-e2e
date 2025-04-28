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

export const wrongEmail = "notsamemail@example.com"
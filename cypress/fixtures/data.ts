export const abstractExample = {
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
  contact: [
    {
      firstname: "Jane",
      lastname: "Doe",
      affiliation: "University of Data Science",
      email: "jane.doe@example.com",
      confirmEmail: "jane.doe@example.com",
    },
  ],
  languagePreference: "Python",
  dateCreated: "2025-04-14T12:00:00.000Z",
  dateLastModified: "2025-04-14T12:00:00.000Z",
  termsAccepted: true,
};

export const wrongEmail = "notsamemail@example.com"
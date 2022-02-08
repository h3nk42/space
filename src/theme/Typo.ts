export const TYPONAME = {
  hero: "hero",
  body: "body",
  header1: "header1",
  header2: "header2",
  header3: "header3",
} as const;

export type TypoName = keyof typeof TYPONAME;

export const TypoNames = Object.keys(TYPONAME);

export const TYPO = {
  [TYPONAME.hero]: {
    fontFamily: "Outfit",
    fontSize: 34,
    fontWeight: 900,
  },
  [TYPONAME.body]: {
    fontFamily: "Outfit",
    fontSize: 16,
    fontWeight: 900,
  },
  [TYPONAME.header1]: {
    fontFamily: "Outfit",
    fontSize: 16,
    fontWeight: 900,
  },
  [TYPONAME.header2]: {
    fontFamily: "Outfit",
    fontSize: 16,
    fontWeight: 900,
  },
  [TYPONAME.header3]: {
    fontFamily: "Outfit",
    fontSize: 16,
    fontWeight: 900,
  },
} as const;

export type Typo = keyof typeof TYPO;
export const Typos = Object.keys(TYPO);

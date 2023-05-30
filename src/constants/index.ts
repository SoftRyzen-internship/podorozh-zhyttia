export const DATO_CMS_QUERY = `query assistants($_locale: SiteLocale, $_first: IntType, $_skip: IntType) {
  allPsychologicalAssistants(locale: $_locale, first: $_first, skip: $_skip) {
    id
    nameAuthor
    description
    authorPhoto {
      alt
      url
    }
  }
  allBanners (locale: $_locale, first: $_first, skip: $_skip) {
    id
    title
    photo {
      url
      alt
    }
  }
}`;

export const DATO_CMS_QUERY = `query PSYCHOLOGIST($_locale: SiteLocale, $_first: IntType, $_skip: IntType) {
  allPsychologists(locale: $_locale, first: $_first, skip: $_skip) {
    id
    name
    description
    psychologistPhoto {
      url
      alt
      width
      height
    }
  }
  allBanners(locale: $_locale) {
    id
    title
    photo {
      url
      alt
      width
      height
    }
  }
}`;

import languages from './languages'

export default {
  country: 'SE',
  name: 'Sweden',
  state: null,
  stateName: '',
  eu: true,
  shipTo: true,
  market: 88,
  pricelist: 31,
  language: languages.find((l) => l.language === 'en'),
}

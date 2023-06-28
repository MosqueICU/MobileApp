export const ReciterLanguagesData = [
  {
    id: '1',
    title: 'English',
    uri: require('./assets/images/EnglishFlag.png'),
    // route: 'Hadith',
  },
  {
    id: '2',
    title: 'French',
    // route: 'Charity',
    uri: require('./assets/images/FranceFlag.png'),
  },
  {
    id: '3',
    title: 'Russian',
    // route: 'Charity',
    uri: require('./assets/images/RussiaFlag.png'),
  },
  {
    id: '4',
    title: 'Chinese',
    // route: 'Charity',
    uri: require('./assets/images/ChinaFlag.png'),
  },
  {
    id: '5',
    title: 'Arabic',
    // route: 'Charity',
    uri: require('./assets/images/SaudiFlag.png'),
  },
];

export const SurahMetadata = {
  // https://islamic1articles.home.blog/2019/01/19/quran-and-arabic-learning-qaidah-booklet-for-kids-pdf/
  1: {
    pdfQuran: [
      {
        name: 'Arabic',
        uri: 'https://islamic1articleshome.files.wordpress.com/2020/08/quran-chapter-1-surah-al-fatiha-pdf.pdf',
      },
      {
        name: `Arabic (Tajwidi)`,
        uri: 'https://mudahamatanhome.files.wordpress.com/2021/01/13-line-quran-surah-1-al-fatihah-with-tajweed.pdf',
      },
    ],
    description: [
      'This chapter has an essential role in Salah (prayers); Muslims recite the Surah Al-Fatiha forty eight times a day in Farz (Compulsory) Salah, at the start of each unit of prayer.',
    ],
  },
};

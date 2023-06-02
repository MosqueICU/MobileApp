export function getReciterColor() {
  const icons = [
    {
      name: 'bolt',
      bg: 'amber.600',
    },
    {
      name: 'build',
      bg: 'emerald.600',
    },
    {
      name: 'cloud',
      bg: 'blue.600',
    },
    {
      name: 'delivery-dining',
      bg: 'orange.600',
    },
    {
      name: 'favorite',
      bg: 'rose.600',
    },
    {
      name: 'music-note',
      bg: 'violet.600',
    },
    {
      name: 'invert-colors-on',
      bg: 'lime.600',
    },
    {
      name: 'navigation',
      bg: 'indigo.600',
    },
    {
      name: 'settings',
      bg: 'pink.600',
    },
    {
      name: 'sports-esports',
      bg: 'coolGray.600',
    },
    {
      name: 'shield',
      bg: 'darkBlue.600',
    },
    {
      name: 'photo-camera',
      bg: 'fuchsia.600',
    },
    {
      name: 'network-wifi',
      bg: 'amber.500',
    },
    {
      name: 'nightlight-round',
      bg: 'violet.800',
    },
    {
      name: 'flight',
      bg: 'blue.800',
    },
    {
      name: 'extension',
      bg: 'indigo.600',
    },
    {
      name: 'duo',
      bg: 'orange.600',
    },
    {
      name: 'album',
      bg: 'rose.600',
    },
    {
      name: 'access-alarm',
      bg: 'emerald.600',
    },
    {
      name: 'forum',
      bg: 'indigo.600',
    },
  ];
  return icons[Math.floor(Math.random() * 19)].bg;
}

export function getReciterLanguageFromCode(language) {
  switch (language) {
    case 'ar':
      return 'Arabic';
      break;
    case 'en':
      return 'English';
      break;
    case 'ru':
      return 'Russian';
      break;
    case 'zh':
      return 'Mandarin';
      break;
    case 'fr':
      return 'French';
      break;
    case 'fa':
      return 'Farsi';
      break;
    case 'ur':
      return 'Urdu';
      break;

    default:
      return language;
      break;
  }
}

export function nameFilter(name) {
  switch (name) {
    case 'Elmir Kuliev by 1MuslimApp':
      return 'Elmir Kuliev';
      break;

    default:
      return name;
      break;
  }
}

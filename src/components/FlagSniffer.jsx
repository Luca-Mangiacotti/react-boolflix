export default function FlagSniffer(elm) {
  let url = "";

  if (elm.original_language === "en") {
    url = `https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`;
  } else if (elm.original_language === "ja") {
    url = `https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg`;
  } else if (elm.original_language === "ko") {
    url = `https://purecatamphetamine.github.io/country-flag-icons/3x2/KR.svg`;
  } else {
    url = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${elm.original_language.toUpperCase()}.svg`;
  }

  return url;
}

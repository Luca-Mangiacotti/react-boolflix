export default function FlagSniffer(elm) {
  let url = "";
  console.log(elm);
  if (elm.original_language === "en") {
    url = `https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`;
  } else {
    url = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${elm.original_language.toUpperCase()}.svg`;
  }

  return url;
}

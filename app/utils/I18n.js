import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import en from "./locales/en";
import fr from "./locales/fr";
import hi from "./locales/hi";

I18n.translations = {
    en, fr, hi
};

I18n.fallbacks = true;
const locales = RNLocalize.getLocales();
const currencies = RNLocalize.getCurrencies();
if (Array.isArray(locales)) {
    I18n.locale = locales[0].languageTag;
    console.log(currencies);
}

export default I18n;
import i18n from "i18next";

export function toPersianDigits(entrie) {

    console.log('lang =>' , i18n.language);
    

    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    if (i18n.language === 'fa') {
        return String(entrie).replace(/\d/g, (d) => persianDigits[d]);
    }
    return entrie
}
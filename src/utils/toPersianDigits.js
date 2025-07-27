import i18n from "i18next";

export function toPersianDigits(entrie) {

    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    if (i18n.language === 'fa') {
        return String(entrie).replace(/\d/g, (d) => persianDigits[d]);
    }
    return entrie
}
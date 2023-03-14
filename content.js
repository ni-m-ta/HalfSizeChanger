// For the copy btn
const copyBtn = document.getElementById('copy-btn');
let memo = document.getElementById('memo');

// A function to copy the texts
function copyToClipboard(text) {
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text);
    } else {
        memo.select();
        document.execCommand('copy');
        console.log('Copied to clipboard');
    }
}

// When clicking on the copy button, copy the text to the clipboard
copyBtn.addEventListener('click', () => {
    const memoValue = memo.value;
    copyToClipboard(memoValue);
})

// For the half size and copy btn
const halfBtn = document.getElementById('halfsize-copy-btn');

// A function to make texts half size
function halfSizeChanger(text) {
    var kanaMap = {
        "ガ": "ｶﾞ", "ギ": "ｷﾞ", "グ": "ｸﾞ", "ゲ": "ｹﾞ", "ゴ": "ｺﾞ",
        "ザ": "ｻﾞ", "ジ": "ｼﾞ", "ズ": "ｽﾞ", "ゼ": "ｾﾞ", "ゾ": "ｿﾞ",
        "ダ": "ﾀﾞ", "ヂ": "ﾁﾞ", "ヅ": "ﾂﾞ", "デ": "ﾃﾞ", "ド": "ﾄﾞ",
        "バ": "ﾊﾞ", "ビ": "ﾋﾞ", "ブ": "ﾌﾞ", "ベ": "ﾍﾞ", "ボ": "ﾎﾞ",
        "パ": "ﾊﾟ", "ピ": "ﾋﾟ", "プ": "ﾌﾟ", "ペ": "ﾍﾟ", "ポ": "ﾎﾟ",
        "ヴ": "ｳﾞ", "ヷ": "ﾜﾞ", "ヺ": "ｦﾞ",
        "ア": "ｱ", "イ": "ｲ", "ウ": "ｳ", "エ": "ｴ", "オ": "ｵ",
        "カ": "ｶ", "キ": "ｷ", "ク": "ｸ", "ケ": "ｹ", "コ": "ｺ",
        "サ": "ｻ", "シ": "ｼ", "ス": "ｽ", "セ": "ｾ", "ソ": "ｿ",
        "タ": "ﾀ", "チ": "ﾁ", "ツ": "ﾂ", "テ": "ﾃ", "ト": "ﾄ",
        "ナ": "ﾅ", "ニ": "ﾆ", "ヌ": "ﾇ", "ネ": "ﾈ", "ノ": "ﾉ",
        "ハ": "ﾊ", "ヒ": "ﾋ", "フ": "ﾌ", "ヘ": "ﾍ", "ホ": "ﾎ",
        "マ": "ﾏ", "ミ": "ﾐ", "ム": "ﾑ", "メ": "ﾒ", "モ": "ﾓ",
        "ヤ": "ﾔ", "ユ": "ﾕ", "ヨ": "ﾖ",
        "ラ": "ﾗ", "リ": "ﾘ", "ル": "ﾙ", "レ": "ﾚ", "ロ": "ﾛ",
        "ワ": "ﾜ", "ヲ": "ｦ", "ン": "ﾝ",
        "ァ": "ｧ", "ィ": "ｨ", "ゥ": "ｩ", "ェ": "ｪ", "ォ": "ｫ",
        "ッ": "ｯ", "ャ": "ｬ", "ュ": "ｭ", "ョ": "ｮ",
        "。": "｡", "、": "､", "ー": "ｰ", "「": "｢", "」": "｣", "・": "･"
    }
    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return text
        .replace(reg, function (match) {
            return kanaMap[match];
        })
        .replace(/゛/g, 'ﾞ')
        .replace(/゜/g, 'ﾟ');
}

// When clicling the halfsize copy btn, make texts half size and copy them to the clipboard
halfBtn.addEventListener('click', () => {
    const memoValue = memo.value;
    halfSizeTexts =  halfSizeChanger(memoValue);
    copyToClipboard(halfSizeTexts);
});
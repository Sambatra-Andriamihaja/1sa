function _1sa(num) {
    let words = '';
    const units = ['', 'iray', 'roa', 'telo', 'efatra', 'dimy', 'enina', 'fito', 'valo', 'sivy'];
    const tens = ['', 'folo', 'roapolo', 'telopolo', 'efapolo', 'dimampolo', 'enimpolo', 'fitopolo', 'valopolo', 'sivifolo'];
    const hundreds = ['', 'zato', 'roanjato', 'telonjato', 'efajato', 'dimanjato', 'eninjato', 'fitonjato', 'valonjato', 'sivinjato'];

    const translate = (num) => {
        if (num === 0) return 'aotra';
        if (num < 10) return units[num];
        if (num < 100) {
            if (num%10 === 0) return tens[num / 10]
            if (Math.floor(num / 10) === 1) {
                if (num % 10 === 1) return ' iraika ambiny folo ';
                return units[num % 10] + ' ambiny folo ';
            }
            if (num % 10 === 1) return ' iraika amby ' +tens[Math.floor(num / 10)];
            return units[num % 10]+ ' amby ' +tens[Math.floor(num / 10)];
        
        }
        if (num < 1000) {
            if (num % 100 === 0) return hundreds[num / 100];
            if (num % 100 === 1) return ' iraika amby zato ';
            if (Math.floor(num / 100) === 1) return translate(num % 100)+ ' amby zato ';
            return translate(num % 100)+ ' sy ' +hundreds[Math.floor(num / 100)];
        }
        if (num < 10000) {
            if (num % 1000 == 0) {
                if (Math.floor(num / 1000) == 1) return ' arivo ';
                else return units[Math.floor(num / 1000)] +' arivo ';
            }
            if (Math.floor(num / 1000) == 1) return translate(num % 1000)+ ' sy arivo ';
            return translate(num % 1000)+ ' sy ' +units[Math.floor(num / 1000)] +' arivo ';
        }
        if (num < 100000) {
            if (num % 10000 === 0) return units[num / 10000]+ ' alina ';
            return translate(num % 10000)+ ' sy ' +units[Math.floor(num / 10000)]+ ' alina ';
        }
        if (num < 1000000) {
            if (num % 100000 === 0) return units[num / 100000]+ ' hetsy ';
            return translate(num % 100000)+ ' sy ' +units[Math.floor(num / 100000)]+ ' hetsy ';
        }
        if (num < 1000000000) {
            if (num % 1000000 === 0) return translate[num / 1000000]+ ' tapitrisa ';
            return translate(num % 1000000)+ ' sy ' +translate(Math.floor(num / 1000000))+ ' tapitrisa ';
        }
        if (num < 1000000000000) {
            if (num % 1000000000 === 0) return translate[num / 1000000000]+ ' lavitrisa ';
            return translate(num % 1000000000)+ ' sy ' +translate(Math.floor(num / 1000000000))+ ' lavitrisa ';
        }
        return '';
    };

    words = translate(num);
    words = buildSpace(words);
    return words;
}

function buildSpace(text){
    return text.replace(/  +/g, ' ');
}

function isa(num){
    let words = '';
    if (Number.isInteger(num)) {
        // the number is an integer
        words = _1sa(num);
    } else {
        // the number is a decimal
        const [integerPart, decimalPart] = num.toString().split('.');
        words = _1sa(integerPart)+ ' faingo ' +_1sa(decimalPart);
    }
    words = buildSpace(words);
    return words;
}
  
module.exports = {
    isa
};
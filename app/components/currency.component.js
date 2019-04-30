import React from 'react';
import {View, Text} from 'react-native';
import I18n from "../utils/I18n";
import getSymbolFromCurrency from 'currency-symbol-map'

// In all cases where the currency does not have a symbol, it is appended with its ISO code;
// this is also the case where the symbol is not standardized.
const currencySuffixed = [];

class Currency extends React.Component {
    render() {

        let {
            precision,
            separator,
            delimiter,
            format,
            strip_insignificant_zeros,
            sign_first,
            currency_code,
            value,
            unit
        } = this.props;

        if (currency_code)
            unit = getSymbolFromCurrency(currency_code);

        if (currencySuffixed.indexOf(currency_code) > -1)
            sign_first = false;
        else
            sign_first = true;

        let currencyValue = I18n.toCurrency(value, {
            precision,
            separator,
            delimiter,
            format,
            strip_insignificant_zeros,
            sign_first,
            unit
        });

        return (
            <Text>{currencyValue}</Text>
        );
    }

}

export default Currency;
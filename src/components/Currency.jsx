import React, { useState } from "react";

function Currency(props) {
  const data = [
    { label: "AED, United Arab Emirates Dirham", value: "aed" },
    { label: "ARS, Argentine Peso", value: "ars" },
    { label: "AUD, Australian Dollar", value: "aud" },
    { label: "BDT, Bangladeshi Taka", value: "bdt" },
    { label: "BGN, Bulgarian Lev", value: "bgn" },
    { label: "BHD, Bahraini Dinar", value: "bhd" },
    { label: "BND, Brunei Dollar", value: "bnd" },
    { label: "BOB, Bolivian Boliviano", value: "bob" },
    { label: "BRL, Brazilian Real", value: "brl" },
    { label: "BWP, Botswanan Pula", value: "bwp" },
    { label: "BYN, Belarusian Ruble", value: "byn" },
    { label: "CAD, Canadian Dollar", value: "cad" },
    { label: "CHF, Swiss Franc", value: "chf" },
    { label: "CLP, Chilean Peso", value: "clp" },
    { label: "CNY, Chinese Yuan", value: "cny" },
    { label: "COP, Colombian Peso", value: "cop" },
    { label: "CRC, Costa Rican Colón", value: "crc" },
    { label: "CZK, Czech Koruna", value: "czk" },
    { label: "DKK, Danish Krone", value: "dkk" },
    { label: "DOP, Dominican Peso", value: "dop" },
    { label: "DZD, Algerian Dinar", value: "dzd" },
    { label: "EGP, Egyptian Pound", value: "egp" },
    { label: "EUR, Euro", value: "eur" },
    { label: "FJD, Fijian Dollar", value: "fjd" },
    { label: "GBP, British Pound Sterling", value: "gbp" },
    { label: "GEL, Georgian Lari", value: "gel" },
    { label: "GHS, Ghanaian Cedi", value: "ghs" },
    { label: "HKD, Hong Kong Dollar", value: "hkd" },
    { label: "HRK, Croatian Kuna", value: "hrk" },
    { label: "HUF, Hungarian Forint", value: "huf" },
    { label: "IDR, Indonesian Rupiah", value: "idr" },
    { label: "ILS, Israeli New Sheqel", value: "ils" },
    { label: "INR, Indian Rupee", value: "inr" },
    { label: "IQD, Iraqi Dinar", value: "iqd" },
    { label: "JOD, Jordanian Dinar", value: "jod" },
    { label: "JPY, Japanese Yen", value: "jpy" },
    { label: "KES, Kenyan Shilling", value: "kes" },
    { label: "KRW, South Korean Won", value: "krw" },
    { label: "KWD, Kuwaiti Dinar", value: "kwd" },
    { label: "KZT, Kazakhstani Tenge", value: "kzt" },
    { label: "LBP, Lebanese Pound", value: "lbp" },
    { label: "LKR, Sri Lankan Rupee", value: "lkr" },
    { label: "LTL, Lithuanian Litas", value: "ltl" },
    { label: "MAD, Moroccan Dirham", value: "mad" },
    { label: "MMK, Myanma Kyat", value: "mmk" },
    { label: "MOP, Macanese Pataca", value: "mop" },
    { label: "MUR, Mauritian Rupee", value: "mur" },
    { label: "MXN, Mexican Peso", value: "mxn" },
    { label: "MYR, Malaysian Ringgit", value: "myr" },
    { label: "NAD, Namibian Dollar", value: "nad" },
    { label: "NGN, Nigerian Naira", value: "ngn" },
    { label: "NIO, Nicaraguan Córdoba", value: "nio" },
    { label: "NOK, Norwegian Krone", value: "nok" },
    { label: "NPR, Nepalese Rupee", value: "npr" },
    { label: "NZD, New Zealand Dollar", value: "nzd" },
    { label: "OMR, Omani Rial", value: "omr" },
    { label: "PEN, Peruvian Nuevo Sol", value: "pen" },
    { label: "PHP, Philippine Peso", value: "php" },
    { label: "PKR, Pakistani Rupee", value: "pkr" },
    { label: "PLN, Polish Zloty", value: "pln" },
    { label: "PYG, Paraguayan Guarani", value: "pyg" },
    { label: "QAR, Qatari Rial", value: "qar" },
    { label: "RON, Romanian Leu", value: "ron" },
    { label: "RSD, Serbian Dinar", value: "rsd" },
    { label: "RUB, Russian Ruble", value: "rub" },
    { label: "SAR, Saudi Riyal", value: "sar" },
    { label: "SEK, Swedish Krona", value: "sek" },
    { label: "SGD, Singapore Dollar", value: "sgd" },
    { label: "SVC, Salvadoran Colón", value: "svc" },
    { label: "THB, Thai Baht", value: "thb" },
    { label: "TND, Tunisian Dinar", value: "tnd" },
    { label: "TRY, Turkish Lira", value: "try" },
    { label: "TWD, New Taiwan Dollar", value: "twd" },
    { label: "TZS, Tanzanian Shilling", value: "tzs" },
    { label: "UAH, Ukrainian Hryvnia", value: "uah" },
    { label: "UGX, Ugandan Shilling", value: "ugx" },
    { label: "USD, US Dollar", value: "usd" },
    { label: "UYU, Uruguayan Peso", value: "uyu" },
    { label: "UZS, Uzbekistan Som", value: "uzs" },
    { label: "VEF, Venezuelan Bolívar (2008-2018)", value: "vef" },
    { label: "VES, Venezuelan Bolívar", value: "ves" },
    { label: "VND, Vietnamese Dong", value: "vnd" },
    { label: "XOF, CFA Franc BCEAO", value: "xof" },
    { label: "ZAR, South African Rand", value: "zar" }
  ];

  const [value, setValue] = useState("myr");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="tleft">
        
        <select className="box-style" value={value} onChange={handleChange}>
            {data.map((data) => (
            <option value={data.value}>{data.label}</option>
            ))}
        </select>
    </div>
  );
}

export default Currency;

type countrySearch = (event) => void

export interface CountryList {
countries : Array<Country>,
countrySearch : countrySearch
};

export interface CountryDetail {
    capital: string;
    currencies: Array<any>;
    languages: Array<any>;
    population:number
};


export type Country = {
    alpha2Code: string
    alpha3Code: string
    altSpellings: Array<string>
    area: number
    borders: Array<string>
    callingCodes: Array<number>
    capital: string
    cioc: string
    currencies: Array<any>
    demonym: string
    flag: string
    gini: number
    languages: Array<any>
    latlng: Array<number>
    name: string
    nativeName: string
    numericCode: number
    population: number
    region: string
    regionalBlocs: Array<any>
    subregion: string
    timezones: Array<string>
    topLevelDomain: Array<string>
    translations: any
    };
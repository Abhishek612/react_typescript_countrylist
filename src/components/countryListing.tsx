import React from "react";
import { CountryList } from '../types'
import '../App.css'

const CountryListing:React.FC<CountryList> = ({countries,countrySearch})=>{  
  return (
    <div className="col-md-6 pr-0">
    <div className="countries-box"><h2>Countries List</h2>
      <div className="list-group overflow-auto country-list" id="style-1">
        { 
          Object.keys(countries).map((key,value)=>{
            return <a key={value} className="list-group-item list-group-item-action" onClick={countrySearch} data-country={countries[value].alpha2Code} href="#" role="tab" aria-controls="home">{countries[value].name}</a>
          })
        }
      </div>
    </div>
    </div>
  );
}

export default CountryListing

import React from "react";
import { CountryDetail } from '../types';
import './countryInfo.css';

const CountryInfo:React.FC<CountryDetail> = ({ capital, currencies,languages,population }: CountryDetail)=>{
  return (
  <div className="col-md-6 pl-0"> 
  <div className="countries-box country-box">
      <h2>Country Details</h2>
        
        { 
(capital === undefined)?<div className="detail-info">
<p>Select country from the list.</p>  
</div> : 
        <div className="detail-list">
            <div className="detail-1">
              <h3>Capital :</h3>
              <ul><li className='capital'>{(capital)?capital:''}</li></ul> 
            </div>
            <div className="detail-1">
              <h3>Population :</h3> 
              <ul><li>{(population)?population:''}</li></ul>
            </div>
            <div className="detail-1">
              <h3>Currencies :</h3> 
              <ul>{ (currencies) ? Object.keys(currencies).map((key,val)=>{
                return <li key={val}>{currencies[val].name}</li>
            }):''
          
          }</ul>
          </div>

            <div className="detail-1"><h3>Languages :</h3> <ul className='languages'>{ (languages) ? Object.keys(languages).map((key,val)=>{
                return <li key={val}>{languages[val].name}</li>
            }):''
          
          }</ul></div></div>
             
        }  
   </div> </div> 
  );
}

export default CountryInfo

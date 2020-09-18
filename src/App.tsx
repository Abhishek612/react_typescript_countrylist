import React,{ useEffect,useState } from "react";
import "./App.css";
import CountryInfo  from './components/countryInfo';
import CountryListing from './components/countryListing';
import { Config } from './config'
import {InitialCountryValue } from './Initialstate'

interface country {
  capital : string,
  languages : Array<any>,
  currencies : Array<any>
}

const App:React.FC = ({})=>{
  const [countryList , setCountryList] = useState<any>([InitialCountryValue])
  const [sortvalue , setsorvalue] = useState<any>('')
  const [currentSelectedCountry , setselectedvalue] = useState<any>([InitialCountryValue])

  useEffect(()=>{
      fetch(Config.getAllCountries)
      .then((res)=> res.json())
      .then((res)=>{ 
        setCountryList(res)
        localStorage.setItem("countryList",JSON.stringify(res));
      })
  },[sortvalue])

function sortValue(key:any, order = 'asc') {
    return function innerSort(a:string, b:string) {
      
    const varA = a[key];
    const varB = b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

const setInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setselectedvalue([InitialCountryValue])
    let res:any = localStorage.getItem("countryList");  
    let response:any = JSON.parse(res)
      if(newValue === '' || undefined){
        setsorvalue(Math.random())
      }
      var filteredData = Object.keys(response).filter((key,value)=>{
            var cname = response[value].name.toLowerCase()
            return cname.includes(newValue.toLowerCase()) || response[value].alpha2Code.toLowerCase() === newValue.toLowerCase()
      })
      let finalData:any = filteredData.map((key)=>{
        return response[key]
      })
      setCountryList(finalData)
}

const countrySearch  = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault()
  let code = event.currentTarget.attributes.getNamedItem('data-country')?.value
  fetch(`${Config.basehost}alpha/${code}`)
    .then(response => response.json())
    .then(res => setselectedvalue(res))
    .catch(err => console.log('something went wrong .',err))
}

const sortValues = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    let option = event.currentTarget.attributes.getNamedItem('data-opt')
    let val = option?.value
    let newList = countryList.sort(sortValue('population',val))
    setCountryList([...newList])
}

  return (
      <div className="container">
      <nav className="navbar navbar-light bg-light nav">
        <form className="form-inline nav-form">
        <input className="form-control mr-sm-2" 
          type="search" 
          placeholder="Filter by Name or Code" 
          onChange={ setInputValue } 
          aria-label="Search" />
          <div className="btn-group">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort by Population</button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#" data-opt="asc" onClick = {sortValues}>Asc</a>
              <a className="dropdown-item" href="#" data-opt="desc" onClick = {sortValues}>Desc</a>
            </div>
          </div>
        </form>
      </nav>
      <div className="wrapper ">
    <div className="row">
      <CountryListing countries={countryList} countrySearch={countrySearch} />
      <CountryInfo capital={currentSelectedCountry.capital} population={currentSelectedCountry.population} currencies={currentSelectedCountry.currencies} languages={currentSelectedCountry.languages} />
    </div></div></div>);
}

export default App
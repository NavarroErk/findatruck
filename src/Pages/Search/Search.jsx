import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css"
import Results from "../../Components/Results/Results";


function Search(){
    const [searchOption, setSearchOption] = useState("");
    const handleFilterChange = (e) => {
      setSearchOption(e.target.value)
    }
    const [textboxValue, setTextboxValue] = useState("");
    const handleTextboxChange = (e) => {
      setTextboxValue(e.target.value)
    }
    const [renderResults, setRenderResults] = useState(false)
    const [jsonData, setJsonData] = useState([]);
  
    function submitClicked() {
      let url
  
      if (textboxValue === "") {
          alert("Please Enter a Search Value and Try Again")
        } else {
          if (searchOption === "usdot") {
          console.log("searchOption: " + searchOption);
          url = `https://73.237.65.141:7103/USDOTSearch?USDOT=${textboxValue}`;
          makeApiCall(url);
        } else if (searchOption === "name") {
          url = `https://73.237.65.141:7103/NameSearch?Name=${textboxValue}`;
          makeApiCall(url);
        } else if (searchOption === "phone") {
          alert("not ready yet, try another search option")
          return
        } else if (searchOption === "physicaladdress") {
          url = `https://73.237.65.141:7103/PhysicalAddressSearch?PhysicalAddress=${textboxValue}`
          makeApiCall(url);
        } else if (searchOption === "mcmxff") {
          url = `https://73.237.65.141:7103/MCMXFFSearch?MCMXFF=${textboxValue}`
          makeApiCall(url);
        }
        }
  
    function makeApiCall(){
      fetch(url) 
      .then(response => {
        if (!response.ok) {
          alert("Search Failed.")
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then(data => {
      setJsonData(data)
      setRenderResults(true);
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
  
    
  // apikey: "eb5822ae9eff49c1b6cd06df947a4ac7"
  // example dotnumber: "3727535"
  
    return(
      <section id="searchContent">
        {/* <h1 id="searchTitle">FIND A TRUCK</h1> */}
        <h1 id="searchTitle" className={renderResults ? 'changeSearchMarginTop' : ''}>
  FIND A TRUCK
</h1>
        <div id="searchDiv">
          <input id='searchTextbox' type="text" placeholder='Enter Value' onChange={handleTextboxChange} />
          <select name="searchSelect" id="searchSelect" value={searchOption} onChange={handleFilterChange}>
            <option value="usdot">USDOT</option>
            <option value="name">Name</option>
            <option value="phone">Phone</option>
            <option value="physicaladdress">Physical Address</option>
            <option value="mcmxff">MC/MX/FF</option>
          </select>
          <button id='searchSubmitBtn' type='button' onClick={submitClicked}>Submit</button>
        </div>
        <div id="resultsContent">
            {renderResults && <Results jsonData={jsonData}/>}
        </div>
      </section>
    );
}

export default Search
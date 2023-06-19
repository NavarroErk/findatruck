import './App.css';
import React, {useState} from 'react';

function App() {

  const [searchOption, setSearchOption] = useState("");
  const handleFilterChange = (e) => {
    setSearchOption(e.target.value)
  }
  const [textboxValue, setTextboxValue] = useState("");
  const handleTextboxChange = (e) => {
    setTextboxValue(e.target.value)
  }

  let usDotNumber
  function submitClicked() {
    let url
    let resultsPara = document.querySelector(".results")
    if (searchOption === "") {
      alert("Please select a search option and try again.")
      return
    } else if (searchOption === "name") {
      url = `https://73.237.65.141:7103/NameSearch?Name=${textboxValue}`;
      makeApiCall(url);
    } else if (searchOption === "phone") {
      alert("not ready yet, try another search option")
      return
    } else if (searchOption === "usdot") {
      console.log("searchOption: " + searchOption);
      url = `https://73.237.65.141:7103/USDOTSearch?USDOT=${textboxValue}`;
      makeApiCall(url);
    } else if (searchOption === "physicaladdress") {
      url = `https://73.237.65.141:7103/PhysicalAddressSearch?PhysicalAddress=${textboxValue}`
      makeApiCall(url);
    } else if (searchOption === "mcmxff") {
      url = `https://73.237.65.141:7103/MCMXFFSearch?MCMXFF=${textboxValue}`
      makeApiCall(url);
    }
    // console.log(`usDotNumber: ${usDotNumber}`);
    // let url = `https://saferwebapi.com/v2/usdot/snapshot/${usDotNumber}`;
    /* #region options (only needed for saferwebapi) */
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'x-api-key': "eb5822ae9eff49c1b6cd06df947a4ac7"
    //   }
    // };
    /* #endregion options */
    function makeApiCall(){
      // fetch(url, options) options only needed for saferwebapi
      fetch(url) 
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then(data => {
        let jsonData = JSON.stringify(data)
        resultsPara.textContent += jsonData
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
    }
    
  }
  
// apikey: "eb5822ae9eff49c1b6cd06df947a4ac7"
// example dotnumber: "3727535"

  let select = document.querySelector("#searchSelect")
  // let selectOption = select.value

  return (
    <div className="App">
      <div className="content" style={{"marginTop": "40vh", "textAlign": "center"}}>
        <h1>Find A Truck</h1>
        <input id='usdotNum' type="text" placeholder='Enter Value' onChange={handleTextboxChange} />
        <select name="searchSelect" id="searchSelect" value={searchOption} onChange={handleFilterChange}>
          <option value="usdot">USDOT</option>
          <option value="name">Name</option>
          <option value="phone">Phone</option>
          <option value="physicaladdress">Physical Address</option>
          <option value="mcmxff">MC/MX/FF</option>
        </select>
        <button id='submitBtn' type='button' onClick={submitClicked}>Submit</button>
      </div>
      <div className="resultsDiv">
        <p className="results"></p>
      </div>
    </div>
  );
}

export default App;

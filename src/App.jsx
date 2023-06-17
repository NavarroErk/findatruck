import './App.css';

function App() {

  
  let usDotNumber

  function onchange(e) {
    usDotNumber = e.target.value
  }


  function submitClicked() {
    console.log(`usDotNumber: ${usDotNumber}`);

    const url = `https://saferwebapi.com/v2/usdot/snapshot/${usDotNumber}`;
    const options = {
      method: 'GET',
      headers: {
        'x-api-key': "eb5822ae9eff49c1b6cd06df947a4ac7"
      }
    };

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
// apikey: "eb5822ae9eff49c1b6cd06df947a4ac7"
// example dotnumber: "3727535"




  return (
    <div className="App">
      <div className="content">
        <h1 style={{"marginTop": "40vh"}}>Find A Truck</h1>
        <input id='usdotNum' type="text" placeholder='Enter USDOT Number' onChange={onchange} />
        <br />
        <br />
        <button id='submitBtn' type='button' onClick={submitClicked}>Submit</button>
      </div>
      <p>Right click on this page, click inspect at the bottom of the popup menu, then click console to view data if USDOT number that was entered is valid</p>
    </div>
  );
}

export default App;

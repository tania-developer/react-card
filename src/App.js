
import './App.css';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import PersonCard from './Components/personCard/PersonCard';
import { useEffect, useState } from 'react';
import DetailCard from './Components/DetailCard/DetailCard';
import { Spinner } from 'react-bootstrap';

const axios = require('axios');

function App() {
  const [persons, setPersons] = useState([]);
  const [detail, setDetail] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
      .then(response => {
        setPersons(response.data.results)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const personDetail = (person) => {
    setShow(true);
    const details = {
      city: person.location.city,
      country: person.location.country,
      postcode: person.location.postcode,
      state: person.location.state,
      street: person.location.street.name,
      streetNo: person.location.street.number,
      pic: person.picture.medium,
      title: person.name.title,
      first: person.name.first,
      last: person.name.last,
      gender: person.gender,
      offset: person.location.timezone.offset,
      description: person.location.timezone.description
    }
    setDetail(details)

  }

  return (
    <main>
      <HeaderNav></HeaderNav>
      {show && <div className='detail-container'>
        <DetailCard detail={detail} ></DetailCard>
      </div>}
      <div className="App container">
        {
          persons.length === 0 && <Spinner animation="border" variant="primary" />
        }
        {
          persons.map(person => <PersonCard person={person} key={person.email} personDetail={personDetail}></PersonCard>)
        }
      </div>
    </main>
  );
}

export default App;

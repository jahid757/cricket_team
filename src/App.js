import { useEffect, useState } from 'react';
import './App.css';
import Players from './components/Players/Players';
import playerData from './data/data.json';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddedPlayer from './components/AddedPlayer/AddedPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [player,setPlayer] = useState([]);
  const [addPlayer,setAddPlayer] = useState([]);
  const addPlayerHandel = (addedPlayer) =>{
    const newAddedPlayer = [...addPlayer,addedPlayer];
    setAddPlayer(newAddedPlayer);
  }

  useEffect( () =>{
    setPlayer(playerData)
  },[])


  return (
    <div>
      <Container>
        <Row>
            <Col xs={9}>
              <h1>Players List <span className="icon"><FontAwesomeIcon icon={faUsers} /></span> </h1>
              {
                player.map( player => <Players player={player} key={player.id} addPlayerHandel={addPlayerHandel}></Players>)
              }
            </Col>
            <Col>
              <h3>Added player: {addPlayer.length}</h3>
              <AddedPlayer player = {addPlayer}></AddedPlayer>
            </Col>
        </Row>
        </Container>
    </div>
  );
}

export default App;

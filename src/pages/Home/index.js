import { React, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

import People from '../../assets/people.svg'

import Arrow from '../../assets/arrow.svg'

import H1 from '../../components/Title'
import ContainerItems from '../../components/ContainerItems';
import Button from '../../components/Button';

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

const App = () => {

  const [users, setUsers] = useState([])
  const userName = useRef()
  const userAge = useRef()

  const navigate = useNavigate()

  const addNewUser = async () => {

    const { data: newUser } = await axios.post("http://localhost:3001/users", 
                                                { name: userName.current.value, 
                                                  age: userAge.current.value })

    setUsers([...users, newUser])

    navigate("/usuarios")
  }


  return (
    <Container>
      <Image alt="logo-cadastro-usuarios" src={People} />
      <ContainerItems>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome' ref={userName}></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' ref={userAge}></Input>

        <Button onClick={addNewUser}>Cadastrar<img alt='arrow' src={Arrow} /></Button>


      </ContainerItems>
    </Container>
  );
}

export default App;

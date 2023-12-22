import React from 'react';

import People from '../../assets/people.svg'

import Arrow from '../../assets/arrow.svg'

import Trash from '../../assets/trash.svg'

import { Container, 
         Image, 
         ContainerItems, 
         H1, 
         InputLabel, 
         Input, 
         Button,
         User } from "./styles";

const App = () => {
  
  const users = [{id: Math.random(), name:"Jefferson", age:"26"},
                {id: Math.random(), name:"Jean", age:"34"}]
  
  return (
    <Container>
      <Image alt="logo-cadastro-usuarios" src={People} />
      <ContainerItems>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome'></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade'></Input>

        <Button>Cadastrar<img alt='arrow' src={Arrow} /></Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              
                <p>{user.name}</p> <p>{user.age}</p>
                <button><img alt='trash-can' src={Trash} /></button>
              
            </User>
          ))
          }
        </ul>

      </ContainerItems>
    </Container>
  );
}

export default App;

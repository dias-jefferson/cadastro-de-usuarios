import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

import Avatar from '../../assets/avatar.svg'

import Arrow from '../../assets/arrow.svg'

import Trash from '../../assets/trash.svg'

import H1 from '../../components/Title'
import ContainerItems from '../../components/ContainerItems';
import Button from '../../components/Button';

import {
  Container,
  Image,
  User
} from "./styles";

const App = () => {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: newUser } = await axios.get("http://localhost:3001/users")

      setUsers(newUser)
    }

    fetchUsers()
  }, [])

  const deleteUser = async (userId) => {

    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  const goBackPage = () => navigate("/")

  return (
    <Container>
      <Image alt="logo-cadastro-usuarios" src={Avatar} />
      <ContainerItems isBlur={true}>

        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>

              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img alt='trash-can' src={Trash} /></button>

            </User>
          ))
          }
        </ul>

        <Button onClick={goBackPage} isBack={true}><img alt='arrow' src={Arrow} />Voltar</Button>

      </ContainerItems>
    </Container>
  );
}

export default App;

import { useContext } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import Button from '../Button'
import List from './List'
import { Container, HeaderContainer } from './style'
import { ClientContext } from '../../contexts/ClientsContext'

const ClientContainer = () => {

  const { openModal } = useContext(ClientContext)

  return (
    <Container>
        <HeaderContainer>
          <h3>Clientes</h3>
          <Button variant={'AddButton'} onClick={openModal}>
          <AiOutlinePlus/>
          </Button>
        </HeaderContainer>
        <List/>          
    </Container>
  )
}

export default ClientContainer
import { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { UserContext } from '../../../../contexts/UserContext'
import { ClientContext } from '../../../../contexts/ClientsContext'
import { Card } from './style'
import Empty from '../EmptyCard'

const Cards = () => {
    
    const { clients } = useContext(UserContext)
    const { deleteClient } = useContext(ClientContext) 

    return (
        <>{clients? (
        clients.map(client => 
        <Card key={client.id}>
            <h3>{client.fullname}</h3>
            <div>
            <p>{client.email}</p>
            <p>{client.telefone}</p>
            <button onClick={() => deleteClient(client.id)}><FaTrashAlt/></button>
            </div>
        </Card>
    )):(
        <Empty/>
    )}    
    </>
    )
}

export default Cards
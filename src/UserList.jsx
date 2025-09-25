import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./redux/features/userSlice"

const UserList = () => {
    const dispatch = useDispatch()

    const { list, loading, error } = useSelector( state => state.users)

    useEffect(()=> {
        dispatch(fetchUsers())
    },[])
  
  return (
    <div>
      <h1>UserList</h1>
   <ul className="list-group">
        {Array.isArray(list) && list.map(user => (
            <li key={user.id} className="list-group-item">
            {user.name}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default UserList

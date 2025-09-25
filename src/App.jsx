import './App.css'
import UserForm from './UserForm'
import UserList from './UserList'


function App() {

  return (
    <>

    {/* //new app */}
    <div className='container mt-5'>
   <h1>Crud-Api</h1>
   <UserList></UserList>
   <UserForm></UserForm>
   </div>
    </>
  )
}

export default App

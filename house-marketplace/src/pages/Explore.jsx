import { getAuth } from 'firebase/auth'
import { useAuthStatus } from '../hooks/useAuthStatus'



const Explore = ({logout}) => {
  
  const { loggedIn, checkingStatus } = useAuthStatus()
  console.log(checkingStatus)
  if(loggedIn && !logout){  
    const auth=getAuth()
    const name=auth.currentUser.displayName  
    return (<h1>Logged in as {name}</h1>)
  } else{
    return (<h1>Logged out</h1>)
  }
    
  // return loggedIn ? <h1>{user.displayName}</h1> : <h1>Not logged in</h1>
}

export default Explore
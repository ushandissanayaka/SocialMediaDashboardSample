import { Routes,Route} from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard';
import Comment  from '../../Pages/Comment';
import Like from '../../Pages/Like';
import Post from '../../Pages/Post';
function AppRoutes(){
  return(
    
    <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/Comments' element={<Comment/>}></Route>
        <Route path='/Likes' element={<Like/>}></Route>
        <Route path='/Post' element={<Post/>}></Route>
    </Routes>
   
  )
}
export default AppRoutes;
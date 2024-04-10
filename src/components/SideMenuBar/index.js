 import {Menu} from "antd"
 import {AppstoreOutlined,PictureOutlined,CommentOutlined,LikeOutlined} from '@ant-design/icons'
 import {useLocation,useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react"
 function SideMenuBar(){

  const location = useLocation()
  const [selectedKeys,setSelectedKeys] = useState('/')
  useEffect(()=>{
const pathName = location.pathname
setSelectedKeys(pathName)
  },[location.pathname])

const navigate = useNavigate()

    return <div className="SideMenu">
       
   < Menu
   div className="SideMenuVertical"
   mode="vertical"
    onClick={(item)=>{
        //item.key
          navigate(item.key)
    }}
    selectedKeys={[selectedKeys]}
   
   items={[
    {
    label:"Dashboard",
    icon:<AppstoreOutlined /*these are icons there are get ant icons *//>,
    key:"/",
   },
   {
    label:"Post",
    icon:<PictureOutlined />,
    key:"/Post",
   },
   {
    label:"Comments",
    icon:<CommentOutlined />,
    key:"/Comments",
   },
   {
    label:"Likes",
    icon:<LikeOutlined />,
    key:"/Likes",
   },
   ]}>

   </Menu>
    </div>
   
   }
   export default SideMenuBar;
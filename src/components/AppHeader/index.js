import {Image,Typography,Space,Badge,Drawer,List} from 'antd'
import {MailOutlined,BellFilled} from '@ant-design/icons'
import { useEffect, useState } from 'react';
import { getComment, getComments, getUsers } from '../../API';
function AppHeader(){
    const [comment,setComment] = useState([])
    const [users,setUsers] = useState([])
    const [CommentOpen, setCommentOpen] = useState(false)
    const [notificationOpen, setNotificationOpen] = useState(false)
useEffect(()=>{
getComment().then(res =>{
setComment(res.comments)
});
getUsers().then(res =>{
    setUsers(res.users)
    });
},[])

    return <div className="AppHeader">
<Image width={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKEuQoPEDQaUVYvnepQyN89vG525-YbjCiDGwVUzXpw&s'></Image>
<Typography.Title>FaceBook Dashboard</Typography.Title>
<Space>
    <Badge count={comment.lenth} dot /*Mail badge count and mail badge */>
    <MailOutlined style={{fontSize:24}} onClick={()=>{
setCommentOpen(true);
    }}/>
    </Badge>
    <Badge count={users.lenth} /*Bell icon and it's count*/>
    <BellFilled style={{fontSize:24}} onClick={()=>{
setNotificationOpen(true);
    }}/>
    </Badge>
</Space>
<Drawer title="Comments" open={CommentOpen} onClose={()=>{setCommentOpen(false)}} maskClosable>
<List dataSource={comment} renderItem={(item)=>{
    return <List.Item>{item.body}</List.Item>
}}></List>
</Drawer>
<Drawer title="Notifications" open={notificationOpen} onClose={()=>{setNotificationOpen(false)}} maskClosable>
<List dataSource={users} renderItem={(item)=>{
    return <List.Item>{item.title} has been ordered</List.Item>
}}></List>
</Drawer>
    </div>

   
   }
   export default AppHeader;
import{Typography,Table,Space,Avatar} from 'antd'
import { useEffect, useState } from 'react';
import { getUsers } from '../../API';

function Like(){
  const [Loading , setLoading] = useState(false)
  const [dataSource, setDataSource] =useState([])
  useEffect(() =>{
    setLoading(true)
    getUsers().then(res => {
      setDataSource(res.users);
      setLoading(false);
    })
  },[])
 return(
 <Space size={20} direction='vertical'>
   <Typography.Title level={4}>Likes</Typography.Title>
   <Table
   loading={Loading}
   columns={[
    
    {
      title:"Photo",
      dataIndex:"image",
      render:(link) =>{
        return <Avatar src={link}/>;
      },
     },
   {
    title:"Id",
    dataIndex:"id",
   },
   {
    title:"FirstName",
    dataIndex:"firstName",
   },
   {
    title:"Gender",
    dataIndex:"gender",
   },
   {
    title:"Email",
    dataIndex:"email",
   },
   {
    title:"Username",
    dataIndex:"username",
   },
  ]}
  dataSource={dataSource}
  pagination={{
    pageSize: 7,
  }}
   ></Table>
 </Space>
 )
}
export default Like;
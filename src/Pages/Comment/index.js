import{Typography,Table,Space} from 'antd'
import { useEffect, useState } from 'react';
import { getComments } from '../../API';

function Profile(){
  const [Loading , setLoading] = useState(false)
  const [dataSource, setDataSource] =useState([])

  useEffect(() =>{
    setLoading(true)
    getComments().then(res => {
      setDataSource(res.comments);
      setLoading(false);
    })
  },[])
 return(
 <Space size={20} direction='vertical'>
   <Typography.Title level={4}>Profiles</Typography.Title>
   <Table
   loading={Loading}
   columns={[
    
 
   {
    title:"Body",
    dataIndex:"body",
   },
   {
    title:"PostId",
    dataIndex:"postId",
   },
   {
    title:"Id",
    dataIndex:"id",
   },
  
   
   
   
   
   
  ]}
  dataSource={dataSource}
  pagination={{
    pageSize: 8,
  }}
   ></Table>
 </Space>
 )
}
export default Profile;
import{Typography,Table,Space} from 'antd'
import { useEffect, useState } from 'react';
import { getPosts } from '../../API';

function Post(){
  const [Loading , setLoading] = useState(false)
  const [dataSource, setDataSource] =useState([])
  useEffect(() =>{
    setLoading(true)
    getPosts().then(res => {
      setDataSource(res.posts);
      setLoading(false);
    })
  },[])
 return(
 <Space size={20} direction='vertical'>
   <Typography.Title level={4}>Posts</Typography.Title>
   <Table
   loading={Loading}
   columns={[
    
    {
    title:"title",
    dataIndex:"title",
    
   },
   {
    title:"body",
    dataIndex:"body",
   },
   {
    title:"reactions",
    dataIndex:"reactions",
   },
   {
    title:"tags",
    dataIndex:"tags",
   },
  ]}
  dataSource={dataSource}
  pagination={{
    pageSize: 5,
  }}
   ></Table>
 </Space>
 )
}
export default Post;
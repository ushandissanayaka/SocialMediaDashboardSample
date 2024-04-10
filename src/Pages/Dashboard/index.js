import { Typography, Card, Space, Statistic,Table,Avatar } from 'antd'
import { UserOutlined, CommentOutlined, LikeOutlined, PictureOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { getProfile } from '../../API'
import { getComments } from '../../API'

import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
 } from 'chart.js';
  
 import { Bar } from 'react-chartjs-2';

 ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
 );



function Dashboard() {
  

   return <Space size={20} direction='vertical'>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction='horizontal'>
         <DashboardCard icon={<UserOutlined style={{color:"green", backgroundColor:"rgba(0,255,0,0.25)" ,borderRadius:20,fontSize:24,padding:8,}}/>} title={"Profiles"} value={158675} />
         <DashboardCard icon={<CommentOutlined style={{color:"purple", backgroundColor:"rgba(0,255,255,0.25)" ,borderRadius:20,fontSize:24,padding:8,}}/>} title={"Comments"} value={6248724} />
         <DashboardCard icon={<LikeOutlined style={{color:"red", backgroundColor:"rgba(255,0,0,0.25)" ,borderRadius:20,fontSize:24,padding:8,}}/>} title={"Likes"} value={1432455} />
         <DashboardCard icon={<PictureOutlined style={{color:"blue", backgroundColor:"rgba(0,0,255,0.25)" ,borderRadius:20,fontSize:24,padding:8,}}/>} title={"Posts"} value={89915} />
      </Space>
      <br></br>
      <Space>
         <RecentProfiles/>
         <DashboardChart/>
      </Space>
   </Space>
}

function DashboardCard({ title, value, icon }) {
   return (
      <Card>
         <Space direction='horizontal'>
            {icon}
            <Statistic title={title} value={value} />
         </Space>
      </Card>
   )
}

function RecentProfiles() {
   const [dataSource,setDataSource] = useState([])
   const [loading,setLoading] =useState(false)
   useEffect(() =>{
      setLoading(true)
      getProfile().then(res=>{
      setDataSource(res.users.splice(0, 5));
      setLoading(false);
     });
   },[])

   return (
   <>
   <Typography.Text>Recent Profiles</Typography.Text>
   <Table
   
       columns={[
        {
          title:"Photo",
          dataIndex:"image",
          render:(link) =>{
            return <Avatar src={link}/>;
          },
         },
         {
         title:"FirstName",
         dataIndex:"firstName",
        },
        {
         title:"LastName",
         dataIndex:"lastName",
        },
        {
          title:"Age",
          dataIndex:"age",
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
          title:"Telephone Number",
          dataIndex:"phone",
         },
      ]}
      loading={loading}
   dataSource={dataSource}
   pagination={false}
   ></Table>
   </>
   )
}

function DashboardChart() {

  const [ commentData,setCommentData] = useState({
       labels:[],
       datasets:[]
  })

  useEffect(() =>{
    getComments().then(res =>{
      const labels = res.comments.map(comment=>{
        return `user-${comment.postId}`
      });
      const data = res.comments.map(comment=>{
        return comment.total
      });
      
      const dataSource ={
        labels,
        datasets: [
          {
            label: 'comments',
            data: data,
            backgroundColor: 'rgba(255, 0, 0, 10)',
          },
          
        ],
      };
      setCommentData(dataSource)

    })

   
  },[])


    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom' ,
        },
        title: {
          display: true,
          text: 'Number of Profiles',
        },
      },
    };

    
   return( 
    <Card style={{width:500 , height: 350}}>
      
   <Bar options={options} data={commentData} />
   </Card>
  );
}
export default Dashboard;
import {Typography} from 'antd'
function AppFooter(){
 return <div className="AppFooter">
    <Typography.Link href='tel:+704548662'>+704548662</Typography.Link>
    <Typography.Link href='https://www.google.com' target={'_blank'}>privacy policy</Typography.Link>
    <Typography.Link href='https://www.google.com' target={'_blank'}>Terms of use</Typography.Link>
 </div>
 
}
export default AppFooter;
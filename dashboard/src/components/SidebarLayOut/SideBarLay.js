import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar/sidebar'

const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);
export default SidebarLayout;
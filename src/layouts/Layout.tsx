import AdminSidebar from "../components/AdminSidebar"

type PropsType = {
    children: React.ReactNode
}

const Layout = ({ children }: PropsType) => {
  return (
    <div className='admin-container'>
      <AdminSidebar />
      {children}
    </div>
  )
}

export default Layout
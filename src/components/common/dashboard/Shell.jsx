import { Topbar } from "./TopBar";
import Sidebar from "./Sidebar";
const Shell = ({children}) => {
  return(
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Topbar />
      <main className="ml-64 pt-20 px-8 py-8">
        {children}
      </main>
    </div>
  )
};


export default Shell

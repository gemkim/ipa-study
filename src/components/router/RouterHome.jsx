import { Outlet, useLocation, useNavigate } from "react-router-dom";
import RouterTotal from "./pages/RouterTotal";
import { useEffect } from "react";


function RouterHome(){
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.substring(1);
  useEffect(() => {
    document.title = path === '' ? 'REACT T.M.S STUDY🚀' : path.toUpperCase();
    }, [ path ])
  return (
    <div className="wrap">
      <div className="btns">
        <button type="button" onClick={()=> navigate('/')}>Home</button>
        <button type="button" onClick={()=> navigate('/test')}>Test</button>
        <button type="button" onClick={()=> navigate('/taehoon')}>TaeHoon</button>
        <button type="button" onClick={()=> navigate('/minjeong')}>MinJeong</button>
        <button type="button" onClick={()=> navigate('/sojin')}>SoJin</button>
      </div>
      <h2>Todo Lists</h2>
      { window.location.pathname === '/' ? <RouterTotal /> : <Outlet /> }
    </div>
  )
}
export default RouterHome;
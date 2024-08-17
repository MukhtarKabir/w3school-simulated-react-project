
import Mynavbar from "../../component/navbar/navbar"
import './html.css'
import { Link, Outlet } from "react-router-dom"
import Htmldif from "./htmldif"
function Html(){
    return(
        <>
        <Mynavbar />
        <div className="distance"></div>
        <div className="html-container">
            {/* titles of html part */}
            <div className="col-4">
                <button >
                    <Link to={'htmldif'}>HTML defination</Link>
                </button>        
                <button>
                    <Link to={'htmltable'}>tables</Link>
                </button>      
                <button>
                    <Link to={'htmlcanvas'}>canvas</Link>
                </button>            
                <button>text-align</button>     
                <button >font-size</button>        
                <button>font width</button>        
                <button >meta</button>
                <button >font-size</button>        
                <button>font width</button>        
                <button >meta</button>
                <button >font-size</button>        
                <button>font width</button>        
                <button >meta</button>
                <button >font-size</button>        
                <button>font width</button>        
                <button >meta</button>        
            </div>
            {/* content of html  */}
            <div className="col-8">
                <div className="distance"></div>
                <hr />
                <Outlet />                
            </div>
        </div>
        </>
    )
}
export default Html
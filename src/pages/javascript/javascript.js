import Mynavbar from "../../component/navbar/navbar"
import './javascript.css'
import { Link, Outlet } from "react-router-dom"

function Javascript(){
    return(
        <>
        <Mynavbar />
        <div className="distance"></div>
        <div className="javascript-container">
            {/* titles of javascript part */}
            <div className="col-4">
            <button >
                <Link to={'jsdom'}>javascript dom</Link>
            </button>        
            <button>
                <Link to={'jseventhandler'}>javascript eventhandler</Link>
            </button>      
            <button>
                <Link to={'jsfunction'}>javascript function</Link>
            </button>        
            <button>head</button>     
            <button>text-align</button>     
            <button >font-size</button>        
            <button >font width</button>        
            <button >meta</button>
            <button >font-size</button>        
            <button >font width</button>        
            <button >meta</button>
            <button >font-size</button>        
            <button >font width</button>        
            <button >meta</button>
            <button >font-size</button>        
            <button >font width</button>        
            <button >meta</button>        
            </div>
            {/* content of javascript  */}
            <div className="col-8">
                <div className="distance"></div>
                <hr />
                    <Outlet />
                <hr />
            </div>
        </div>
        </>
    )
}
export default Javascript
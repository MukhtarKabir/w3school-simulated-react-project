
import Mynavbar from "../../component/navbar/navbar"
import './css.css'
import { Link, Outlet } from "react-router-dom"

function Css(){
    return(
        <>
        <Mynavbar />
        <div className="distance"></div>
        <div className="css-container">
            {/* titles of css part */}
            <div className="col-4">
            <button >
                <Link to={'cssanimation'}>css animations</Link>
            </button>        
            <button>
                <Link to={'cssbackground'}>Css Background</Link>
            </button>      
            <button>
                <Link to={'csstransform'}>css Transform</Link>
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
            {/* content of css  */}
            <div className="col-8">
                <hr />
                <Outlet />
                <hr />
            </div>
        </div>
        </>
    )
}
export default Css
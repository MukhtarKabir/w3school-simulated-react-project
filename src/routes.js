import Home from "./pages/home/home";
import Html from "./pages/html/html";
import Htmldif from "./pages/html/htmldif";
import HtmlTable from "./pages/html/htmltables";
import HtmlCanvas from "./pages/html/htmlcanvas";
import Css from "./pages/css/css";
import CssAnimation from "./pages/css/animation";
import CssBackground from "./pages/css/cssbackground";
import CsTransform from "./pages/css/transform";
import Javascript from "./pages/javascript/javascript";
import JsDom from "./pages/javascript/javascriptdom";
import JsEventhandler from "./pages/javascript/javascripteventhandler";
import JsFunction from "./pages/javascript/javascriptfunction";
import About from "./pages/about/about";
import Slidebar from "./component/sidebar/sidebar";

let routes =[
    {path:"/",element:<Home />},
    {path:"/html/*",element:<Html />,children:[
        {path:"htmldif",element:<Htmldif />},
        {path:"htmltable",element:<HtmlTable/>},
        {path:"htmlcanvas",element:<HtmlCanvas />},
    ]},
    {path:"/css/*",element:<Css />,children:[
        {path:"cssanimation",element:<CssAnimation />},
        {path:"csstransform",element:<CsTransform />},
        {path:"cssbackground",element:<CssBackground/>},

    ]},
    {path:"/javascript/*",element:<Javascript />,children:[
        {path:"jsdom",element:<JsDom />},
        {path:"jseventhandler",element:<JsEventhandler/>},
        {path:"jsfunction",element:<JsFunction />},
    ]},
    {path:"/about",element:<About />},
    {path:"/slidebar",element:<Slidebar />},
]

export default routes

import Mynavbar from "../../component/navbar/navbar";
import './home.css'
import Course from "../../component/courses/course";
function Home(){
    let courseData =[
        {
            id:1,
            bgColor:'black',
            courseName:"HTML",
            courseInfo:"Html means Hyper text markup language",
            courseExample:`<head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app"/>
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                `
        },
        {
            id:2,
            bgColor:'gold',
            courseName:"CSS",
            courseInfo:"CSS cascading style sheet",
            courseExample:`<head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app"/>
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                `
        },
        {
            id:3,
            bgColor:'lightgreen',
            courseName:"JAVASCRIPT",
            courseInfo:"JAVASCRIPT frontend and backend language",
            courseExample:`<head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app"/>
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                `
        },
        {
            id:4,
            bgColor:'black',
            courseName:"Python",
            courseInfo:"Python full of thing that programming languages do it do",
            courseExample:`<head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app"/>
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                `
        },
        {
            id:5,
            bgColor:'lightgreen',
            courseName:"SQL",
            courseInfo:"SQL structure query language",
            courseExample:`<head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app"/>
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                `
        }
    ]
    return(
        <>
            <Mynavbar />
            <div className="distance"></div>
            {
                courseData.map(courseitem=>(
                    <div className={`${courseitem.bgColor}`} key={courseitem.id}><Course {...courseitem} /></div>
                ))
            }
            
        </>
    )
}

export default Home
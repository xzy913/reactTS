import App from "@/App"
import React,{lazy} from "react"
import Home from "@/views/Home"
import User from "@/views/User"
// import About from "@/views/About"
const About =lazy(()=>import("@/views/About"))
const withLoadingComponent=(comp:JSX.Element)=>(
        <React.Suspense fallback={<div>Loading....</div>}>
           {comp}
        </React.Suspense>
)
const routes=[
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:"/user",
                element:withLoadingComponent(<User/>)
            },
            {
                path:"/about",
                element:withLoadingComponent(<About/>)
            }
        ]
    },
]
export default routes
import {Routes, Route, Link} from "react-router-dom";

import {Albums, Comments, PostDetails, Posts, Todos} from "./components";


function App() {


    return (

        <div>
            <ul>
                <li><Link to={'/todos'}>All Todos</Link></li>
                <li><Link to={'/albums'}>All Albums</Link></li>
                <li><Link to={'/comments'}>All Comments</Link></li>
                <li><Link to={'/posts'}>All Posts</Link></li>
            </ul>

            <hr/>

            <Routes>

                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/comments'} element={<Comments/>}/>

                <Route path={'/posts'} element={<Posts/>}>

                    <Route path={':id/comments'} element={<PostDetails/>}/>

                </Route>

            </Routes>


        </div>
    );
}

export default App;

import {Routes, Route} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {Posts, Todos, Users, UsersDetails} from "./components";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={'users/:id'} element={<UsersDetails/>}/>
                    </Route>
                    <Route path={'todos'} element={<Todos/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                </Route>
            </Routes>




        </div>
    );
}

export default App;

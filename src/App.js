import {Routes, Route} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {CommentsDetails, PostsDetails, UsersDetails} from "./components";
import {CommentsPage, PostsPage, TodosPage, UsersPage} from "./pages";



function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UsersDetails/>}/>
                    </Route>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':comments'} element={<PostsDetails/>}/>
                    </Route>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<CommentsDetails/>}/>
                    </Route>
                </Route>
            </Routes>


        </div>
    );
}

export default App;

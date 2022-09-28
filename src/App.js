import {Routes, Route} from "react-router-dom";

import {PostsDetails} from "./components";
import {MainLayout} from "./layout/MainLayout";
import {AlbumPage, CommentPage, PostPage, TodoPage} from "./pages";


function App() {

    return (

        <div>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/todos'} element={<TodoPage/>}/>
                    <Route path={'/albums'} element={<AlbumPage/>}/>
                    <Route path={'/posts'} element={<PostPage/>}>
                        <Route path={':comments'} element={<PostsDetails/>}/>
                    </Route>
                    <Route path={'/comments'} element={<CommentPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;

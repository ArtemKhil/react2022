import {Route, Routes} from "react-router-dom";

import {GenresPage, MoviesPage} from "./pages";
import {GenreDetails} from "./components";
import {MainLayout} from "./layout";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}>
                        <Route path={':id'} element={<GenreDetails/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

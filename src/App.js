import {Route, Routes} from "react-router-dom";

import {GenresPage, MoviesPage, SearchPage} from "./pages";
import {GenreDetails, MovieDetails} from "./components";
import {MainLayout} from "./layout";



function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movie/:id/details'} element={<MovieDetails/>}/>
                    <Route path={'search'} element={<SearchPage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}>
                        <Route path={':id'} element={<GenreDetails/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

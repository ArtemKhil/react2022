import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CharacterPage, EpisodePage, LocationPage} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'characters'} element={<CharacterPage/>}/>
                <Route path={'locations'} element={<LocationPage/>}/>
                <Route path={'episodes'} element={<EpisodePage/>}/>
            </Route>
        </Routes>
    );
}

export default App;

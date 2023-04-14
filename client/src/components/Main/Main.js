import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import InfoCard from '../InfoCard/InfoCard'
const Main =()=>{
    return(
        <div className='main'>
            <BrowserRouter>
            <Routes>
                <Route
                path="/"
                element={<SearchBar/>}
                />
                <Route
                path="/info_card"
                element={<InfoCard/>}
                />
            </Routes>
            </BrowserRouter>
        </div>

    )
}
export default Main
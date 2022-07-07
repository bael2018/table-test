import { useTypedSelector } from './hooks/useTypedSelector';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Main from './pages/Main'
import './styles/style.css'

const App = () => {
    const { isModal } = useTypedSelector((state) => state.tables);

    useEffect(() => {
        if (isModal) {
            window.document.body.style.overflow = "hidden";
        } else {
            window.document.body.style.overflowY = "scroll";
            window.document.body.style.overflowX = "hidden";
        }
    }, [isModal])

    return (
        <div className='root'>
            <Navbar/>
            <Main/>
        </div>
    )
} 

export default App
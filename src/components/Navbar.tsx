import { useActions } from "../hooks/useActions"
import { FC } from "react"

const Navbar: FC = () => {
    const { setIsModal } = useActions()

    return (
        <div className='navbar'>
            <h3>TABLES</h3>
            <button className="navbar__edit-btn" onClick={() => setIsModal(true)}>EDIT</button>
        </div>
    )
}

export default Navbar
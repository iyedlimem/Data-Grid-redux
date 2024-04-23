import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../pages/Authentification/Authentification.hook'
import { RootState } from '../store'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state: RootState) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>TestApp</Link>
            </div>
            <ul>
                {user ? (
                    <li style={{display:"flex" , gap:"30px"}}>
                          <Link className="employe-element"  to='/payment'>
                            Payment
                        </Link>
                        <button className='btn' onClick={onLogout}>
                            Logout
                        </button>
                      
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to='/'>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    )
}

export default Header
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const SecurePage = () => {
    const token = useSelector(state => state.api.token)

    return (
        <>
            {token?<Outlet/>:<Navigate to='/login' replace={true} />}
        </>
    )
}

export default SecurePage
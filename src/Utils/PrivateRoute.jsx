import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    //Before creating Resume you should login in applicaiton( Authentice user can edit template ).
    let auth = { 'token': true }
    return (
        auth.token ?
            <Outlet /> :
            <Navigate to='/login' />
    )
}

export default PrivateRoutes;
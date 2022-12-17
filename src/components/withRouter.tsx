import { ComponentClass } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const withRouter = (ChildComponent: ComponentClass<any, any>) => {
    return (props: any) => {
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()
        return <ChildComponent {...props} router={{ location, navigate, params }} />
    }
}

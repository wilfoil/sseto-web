import { useNavigate } from 'react-router-dom';
import BackIcon from '@mui/icons-material/ArrowBack'
import { Header } from 'styles/common';

const NavHeader = ({ children }: {children: any}) => {
    const navigate = useNavigate()
    const back = () => navigate(-1)
    return <Header padding='.5em 10px' bg='transparent'><BackIcon color="primary" fontSize="large" onClick={back} /> {children}</Header>
}

export default NavHeader
import FavoritedIcon from '@mui/icons-material/Favorite'
import FavoriteIcon from '@mui/icons-material/FavoriteBorder'

const Favorite = ({ saved, onClick }: { saved: boolean, onClick: () => void }) => {
    const Component = saved ? FavoritedIcon : FavoriteIcon;
    return (<Component onClick={onClick} fontSize='small' color='primary' />)
}

export default Favorite;
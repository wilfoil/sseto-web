import { Label } from "styles/common";
import { ReactComponent as NotFoundIcon } from 'utils/icons/not-found.svg'

const NotFound = ({ message }: {message: string}) => (<>
<NotFoundIcon />
<Label space='center' margin='1em 0' size='26px' color='#2972FE'>{message}</Label>
</>)

export default NotFound;
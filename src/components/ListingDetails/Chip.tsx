import { IconBtn, Label } from "styles/common"

const Chip = ({Icon, label}: {Icon: any, label: string}) => <IconBtn margin="0 5px 0 0" padding='0 5px'><Icon color='primary' sx={{ fontSize: 15 }} />&nbsp;<Label size='50%'>{label}</Label></IconBtn>

export default Chip
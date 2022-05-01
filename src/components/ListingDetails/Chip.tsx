import { IconBtn, Label } from "components/common"

const Chip = ({Icon, label}: {Icon: any, label: string}) => <IconBtn padding='0 5px'><Icon color='primary' sx={{ fontSize: 15 }} />&nbsp;<Label size='50%'>{label}</Label></IconBtn>

export default Chip
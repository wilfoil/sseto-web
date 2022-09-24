import { Flex, Label, MuiAvatar } from "styles/common";

const Result = () => (<Flex margin='0 0 1.5em'>
    <MuiAvatar />
    <Flex align='flex-start' columns={true} height='4em'><h3 className="result-title">Kevin apartments</h3><Label><span>1260 Rubaga road,</span><Label width="auto" color='#2972FE'>Rubaga</Label></Label></Flex>
</Flex>)

export default Result;
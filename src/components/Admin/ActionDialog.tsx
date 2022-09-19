import {useState} from 'react';
import { Label, StyledDialog } from 'styles/common';

const ActionDialog = ({children, dialogTitle, renderActions, renderToggle, ...props}: any) => {
  const [open, setOpen] = useState(false);

  const toggleVisibility = () => {
    setOpen(!open);
  };

  return (
    <>
      {renderToggle(toggleVisibility)}
      <StyledDialog open={open} onClose={toggleVisibility} {...props}>
        {dialogTitle && <Label color="#000" size='150%'>{dialogTitle}</Label>}
          {children({onOpen: toggleVisibility})}
      </StyledDialog>
    </>
  );
}

export default ActionDialog;
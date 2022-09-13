import {useState} from 'react';
import { Label, StyledDialog } from 'components/common';

const ActionDialog = ({children, dialogTitle, renderActions, renderToggle}: any) => {
  const [open, setOpen] = useState(true);

  const toggleVisibility = () => {
    setOpen(!open);
  };

  return (
    <>
      {renderToggle(toggleVisibility)}
      <StyledDialog open={open} onClose={toggleVisibility}>
        <Label color="#000" size='150%'>{dialogTitle}</Label>
          {children({onOpen: toggleVisibility})}
      </StyledDialog>
    </>
  );
}

export default ActionDialog;
import { Add } from '@mui/icons-material';
import { Avatar, TextField } from '@mui/material';
import { uploadFile } from 'api/fileStorage';
import { addRealtor } from 'api/realtor';
import { Flex, IconBtn, ImageInput, MuiButton, StyledForm } from 'components/common';
import { useFormik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BucketFolders } from 'types/enums';
import { realtorFormFields } from 'utils/formFields';
import ActionDialog from './ActionDialog';

const NewRealtorForm = ({onOpen}: any) => {
    const [photo, setPhoto] = useState<File>()
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            photoUrl: ''
        },
        onSubmit: async (values) => {
            const photoUrl = photo ? await uploadFile(photo, BucketFolders.profiles) : undefined;
            const data = {...values, ...photoUrl ? {photoUrl} : {}}
            toast.promise(
                addRealtor(data),
                 {
                   loading: 'Saving...',
                   success: () => {
                    closeForm()
                   return <b>Realtor added successfully</b>
                },
                   error: <b>An error occurred, please try again.</b>,
                 }
               );
        },
    });

    
    const renderInputField = ([key, value]: [string, string]) => {
        const error = (formik.errors as any)[key]
        return (
            <TextField
                error={!!error}
                id={key}
                key={key}
                name={key}
                label={key}
                type={realtorFormFields[key] || 'text'}
                variant="standard"
                helperText={error}
                value={value}
                onChange={formik.handleChange}
            />
        )
    }

    const readFile = (e: any) => {
        const file = e.target.files[0];
        setPhoto(file)
    }

    const closeForm = () => {
        formik.resetForm();
        onOpen()
    }

    const {photoUrl, ...textFields} = formik.values;
    const url = photo ? URL.createObjectURL(photo) : photoUrl;

    return (
                <StyledForm onSubmit={formik.handleSubmit}>
                    <ImageInput>
                    <Avatar src={url} alt="Avatar" />
                        <div className="middle">
                            <label className="custom-file-upload">
                                <input onChange={readFile} id="preview-pic" type="file" />
                                Upload
                            </label>
                        </div>
                    </ImageInput>

                    {Object.entries(textFields).map(renderInputField)}
                    <Flex padding='1em 0'><MuiButton onClick={closeForm} margin='0 10px 0 0' flex='1' type="button" variant='outlined'>Cancel</MuiButton><MuiButton  flex='1' type="submit">Save</MuiButton></Flex>
                </StyledForm>

    );
};

const FormDialog = () => {
    const realtorAddButton = (onOpen: () => void) => (<IconBtn onClick={onOpen}><Add /></IconBtn>)

    return <ActionDialog dialogTitle='Add Realtor' renderToggle={realtorAddButton} >{NewRealtorForm}</ActionDialog>
}

export default FormDialog;
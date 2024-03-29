import { Add } from '@mui/icons-material';
import { NativeSelect, Switch } from '@mui/material';
import { Flex, IconBtn, MuiButton, StyledForm, StyledLabelledControl, StyledTextField, Tag } from 'styles/common';
import MediaUpload from 'components/MediaUpload';
import { useFormik } from 'formik';
// import toast from 'react-hot-toast';
import { IListing, ListingType } from 'types';
import { listingFormFields } from 'utils/formFields';
import ActionDialog from './ActionDialog';
import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import LocationInput from 'components/LocationInput';

const StyledSelect = styled(NativeSelect)`
color: #000 !important;
select { text-transform: capitalize; }
`
const FeaturesControl = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
  background: #e7e7e71a;
  border-top: 1px solid #e7e7e770;

  > * { display: flex;margin-bottom: .1em; }
`

const NewListingForm = ({ onOpen }: any) => {
  const formik = useFormik<IListing>({
    initialValues: {
      title: '',
      overview: '',
      price: 0,
      location: [],
      type: ListingType.apartment,
      assigned: undefined,
      isRental: true,
      gallery: [],
      features: {},
    },
    onSubmit: async (values: any) => {
      console.log(values);
      
      // toast.promise(
      //   addListing(values),
      //   {
      //     loading: 'Saving...',
      //     success: () => {
      //       closeForm()
      //       return <b>Listing added successfully</b>
      //     },
      //     error: <b>An error occurred, please try again.</b>,
      //   }
      // );
    },
  });

  // useEffect(()=> {
  //   (async()=> {
  //     const v = await getRealtor()
  //     console.log(v);
      
  //   })()
  // })

  const onGalleryChange = (files: File[]) => {
    formik.setFieldValue('gallery', files)
  }

  const onChangeFeature = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const { features } = formik.values;
    (features as any)[name] = value;
  }

  const setFeature = (toggle: string, value: boolean) => () => {    
    const { features } = formik.values
    features[toggle] = value;
    formik.setFieldValue('features', features)
  }

  // const renderFeatures = (values: any) => (
  //   <FeaturesControl>
  //     {Object.entries(values).map(([key, value]) => (
  //       <StyledLabelledControl controlWidth='40%' key={key} label={key} labelPlacement="start" control={
  //       <StyledTextField
  //       // error={!!error}
  //         id={key}
  //         name={key}
  //         type="number"
  //         variant="standard"
  //         // helperText={error}
  //         value={value}
  //         onChange={onChangeFeature}
  //       />}
  //       />
  //     ))}
  //   </FeaturesControl>
  // )

  const renderField = ([key, value]: [string, any]) => {
    const error = (formik.errors as any)[key]
    const fieldInfo = listingFormFields[key]
    switch (fieldInfo?.type) {
      case 'toggle':
        return <StyledLabelledControl
          control={<Switch color="primary" name={key} checked={value} onChange={formik.handleChange} />}
          label={key}
          labelPlacement="start"
        />
      case 'features':
        const values = {...fieldInfo.values, ...value}
        return <StyledLabelledControl
        className='label-left'
        control={renderFeatures(values, setFeature)}
        label={key}
        labelPlacement="top"
        controlWidth='100%'
      />
      case 'dropdown':
        const valuesArray = Object.entries(fieldInfo.values)
        return <StyledLabelledControl
          label={key}
          labelPlacement="start"
          control={
            <StyledSelect
              value={value}
              inputProps={{ name: key }}
              onChange={formik.handleChange}
            >
              {valuesArray.map(([key, value]: any) => <option key={key} value={value}>{key}</option>)}
            </StyledSelect>
          }
        />
      case 'media':
        return <StyledLabelledControl
          className='label-left'
          value="start"
          control={<MediaUpload handleChange={onGalleryChange} />}
          label={key}
          labelPlacement="top"
          controlWidth='100%'
        />

      case 'location':
        return <LocationInput />;

      // case 'object':
      //   return <StyledLabelledControl
      //   className='label-left'
      //   control={renderFeatures(value)}
      //   label={key}
      //   labelPlacement="top"
      //   controlWidth='100%'
      // />
      default:
        return (<StyledTextField
          error={!!error}
          id={key}
          key={key}
          name={key}
          label={key}
          type={fieldInfo?.type || "text"}
          variant="standard"
          helperText={error}
          value={value}
          onChange={formik.handleChange}
        />)
    }
  }

  const closeForm = () => {
    formik.resetForm();
    onOpen()
  }
  // Capture current location / assuming it's the listing location for now
  // navigator.geolocation.getCurrentPosition((pos) =>{
  //   const { coords } = pos;
  //   formik.setFieldValue('location', [coords.latitude, coords.longitude])
  // });

  

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {Object.entries(formik.values).map(renderField)}
      <Flex padding='1em 0'><MuiButton onClick={closeForm} margin='0 10px 0 0' flex='1' type="button" variant='outlined'>Cancel</MuiButton><MuiButton flex='1' type="submit">Save</MuiButton></Flex>
    </StyledForm>

  );
};

const FormDialog = () => {
  const listingddButton = (onOpen: () => void) => (<IconBtn onClick={onOpen}><Add /></IconBtn>)

  return <ActionDialog dialogTitle='Add Listing' renderToggle={listingddButton}>{NewListingForm}</ActionDialog>
}

const renderFeatures = (values: {[key: string]: boolean}, onClick: (key: string, value: boolean) => () => void) => (
  <Flex gap='6px' flexChild='fit-content' space='start' padding='.5em 0' wrap={true}>
    {Object.entries(values).map(([key, value]) => (
      <Tag key={key} label={key} variant={value ? 'filled' : 'outlined'} color='primary' height='25px' onClick={onClick(key, !value)} />
    ))}
  </Flex>
)

export default FormDialog;
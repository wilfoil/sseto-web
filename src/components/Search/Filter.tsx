import BackIcon from '@mui/icons-material/ArrowBack'
import FilterListIcon from '@mui/icons-material/FilterList';
import Slider from '@mui/material/Slider';

import ActionDialog from "components/Admin/ActionDialog";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { DivideLine, FilterDropdown, Flex, Header, IconBtn, Label, MuiButton, PageContent, StyledDropdown, StyledForm, StyledLabelledControl, StyledTextField, Tag } from "styles/common";
import { calculatePriceRange, formatCurrency, priceToPercentage } from 'utils';
import { MAX_PRICES } from 'utils/constants';
import { searchFilterFields } from 'utils/formFields';
import Categories from './Categories';
import { ChangeEvent } from 'react';
import { IFormikFilterValues, ListingType } from 'types';

const Filter = () => {
  const navigate = useNavigate();
  const formik = useFormik<IFormikFilterValues>({
    initialValues: {
      isRental: true,
      type: ListingType.land,
      price: [100000, MAX_PRICES.house],
      beds: undefined,
      baths: undefined,
      plotSize: [],
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

  const handleFilter = (callback: any) => (e: any) => {
    formik.handleSubmit(e)
    navigate('/search/results')
    callback?.()
  }

  const setTypeValue = (name: string) => (e: any) => {
    e.preventDefault()
    const type = formik.values.type === name ? '' : name;
    formik.setFieldValue('type', type)
  }

  const setPriceValue = (e: any, priceRange: number | number[], activeThumb: number) => {
    e.preventDefault()
    const { values: { price, type }, setFieldValue } = formik
    const minDistance = 5;
    if (!Array.isArray(priceRange)) return;

    let minPrice;
    let maxPrice;
    const [currentMinPrice, currentMaxPrice] = priceToPercentage(price, MAX_PRICES[type])

    if (activeThumb === 0) {
      minPrice = Math.min(priceRange[0], currentMaxPrice - minDistance)
      maxPrice = currentMaxPrice
    } else {
      minPrice = currentMinPrice
      maxPrice = Math.max(priceRange[1], currentMinPrice + minDistance)
    }

    [minPrice, maxPrice] = calculatePriceRange([minPrice, maxPrice], MAX_PRICES[type])
    setFieldValue('price', [minPrice, maxPrice]);
  }

  const setIsRental = (isRental: boolean) => () => formik.setFieldValue('isRental', isRental)

  const setFeature = (toggle: string, value: boolean) => () => {    
    const { features} = formik.values
    features[toggle] = value;
    formik.setFieldValue('features', features)
  }

  const setNumberField = (e: ChangeEvent) => {
    const { min, max, value } = (e.target as any);
    if (+value > +max) return;
    if (+value < +min) return;
    
    formik.handleChange(e)
  }

  const setPlotSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    const { plotSize } = formik.values;
    const valueIndex = name.includes('min') ? 0 : 1;
    plotSize[valueIndex] = +value;
    formik.setFieldValue('plotSize', plotSize)
  }

  const renderField = ([key, value]: [string, any]) => {
    const error = (formik.errors as any)[key]
    const fieldInfo = searchFilterFields[key]
    const { type: listingType } = formik.values;

    switch (fieldInfo?.type) {
      // case 'dropdown':
      //   const valuesArray = Object.entries(fieldInfo.values)
      //   return <StyledLabelledControl
      //     label={key}
      //     labelPlacement="start"
      //     control={
      //       <StyledDropdown
      //         value={value}
      //         inputProps={{ name: key }}
      //         onChange={formik.handleChange}
      //       >
      //         {valuesArray.map(([key, value]: any) => <option key={key} value={value}>{key}</option>)}
      //       </StyledDropdown>
      //     }
      //   />

        case 'features':
          const values = {...fieldInfo.values, ...value}
          return <StyledLabelledControl
          className='label-left'
          control={renderFeatures(values, setFeature)}
          label={key}
          labelPlacement="top"
          controlWidth='100%'
        />
      case 'multiselect':
        return <StyledLabelledControl
          className='label-left'
          control={<Categories selected={[listingType]} onItemClick={setTypeValue} />}
          label={key}
          labelPlacement="top"
          controlWidth='100%'
        />

      case 'range':
        const percentValue = priceToPercentage(value, MAX_PRICES[listingType])
        return <StyledLabelledControl
          className='full-label'
          label={<><span>{key} (UGX)</span><span>{formatCurrency(value[0])} - {formatCurrency(value[1])}</span></>}
          labelPlacement="top"
          controlWidth='100%'
          control={<Slider
            value={percentValue}
            onChange={setPriceValue}
            valueLabelDisplay="auto"
            disableSwap={true}
          />}
        />

      case 'plotSize':
        if (listingType !== ListingType.land) return;
        const valuesArray = Object.entries(fieldInfo.values)
        return <StyledLabelledControl
          className='full-label'
          label={key}
          labelPlacement="top"
          control={
            <Flex flexChild='45%' width='100% !important' padding='0'>
              <FilterDropdown
              value={value[0]}
              inputProps={{ name: `${key}-min` }}
              onChange={setPlotSize}
              
            >
              {valuesArray.map(([key, value]: any) => <option key={key} value={value}>{key}</option>)}
            </FilterDropdown>
            <DivideLine style={{width: '5%'}} />
            <FilterDropdown
              value={value[1]}
              inputProps={{ name: `${key}-max` }}
              onChange={setPlotSize}
            >
              {valuesArray.map(([key, value]: any) => <option key={key} value={value}>{key}</option>)}
            </FilterDropdown>
            </Flex>
            
          }
        />

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
          onChange={fieldInfo?.type === 'number' ? setNumberField : formik.handleChange}
          inputProps={{ min: fieldInfo?.minValue, max: fieldInfo?.maxValue }}
        />)
    }
  }


  const renderToggle = (onOpen: () => void) => (<IconBtn onClick={onOpen}><FilterListIcon color="primary" fontSize="small" /></IconBtn>)
  const renderContent = ({ onOpen }: { onOpen: () => void }) => {
    const { isRental, ...formikValues } = formik.values
    const rent = isRental ? 'contained' : 'outlined'
    const buy = !isRental ? 'contained' : 'outlined'
    return (
      <>
        <Header columns={true} bg='#131629' padding='.5em 10px'>
          <Label size="80%">
            <BackIcon color="primary" fontSize="large" onClick={onOpen} />
            &nbsp;&nbsp;&nbsp;&nbsp;<h1>Filter</h1>
          </Label>
          <Flex gap='.5em' padding='.5em 0 0 0'>
            <MuiButton padding='.5em 0' variant={rent} onClick={setIsRental(true)}>Rent</MuiButton>
            <MuiButton padding='.5em 0' variant={buy} onClick={setIsRental(false)}>Buy</MuiButton>
          </Flex>
        </Header>
        <PageContent padding='7em 10px 5em 10px'>
          <StyledForm className='dark-form'>
            {Object.entries(formikValues).map(renderField)}
          </StyledForm>
        </PageContent>
        <Flex padding=".5em 10px" fixed={true} gap='.5em' bottom="0" className="secondary" space="start">
          <MuiButton variant="outlined" flex='40%'>Reset</MuiButton>
          <MuiButton onClick={handleFilter(onOpen)} type='submit'>Apply</MuiButton>
        </Flex>
      </>
    )
  }

  return (<ActionDialog fullScreen={true} padding="0" dark={true} renderToggle={renderToggle}>{renderContent}</ActionDialog>)
}

const renderFeatures = (values: {[key: string]: boolean}, onClick: (key: string, value: boolean) => () => void) => (
  <Flex gap='6px' flexChild='fit-content' space='start' padding='.5em 0' wrap={true}>
    {Object.entries(values).map(([key, value]) => (
      <Tag key={key} label={key} variant={value ? 'filled' : 'outlined'} color='primary' height='25px' onClick={onClick(key, !value)} />
    ))}
  </Flex>
)



export default Filter;
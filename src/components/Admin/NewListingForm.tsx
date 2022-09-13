import { useFormik } from 'formik';

const NewListingForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      overview: '',
      price: null,
      type: '',
      isAvailable: true,
      isRental: true,
      gallery: [],
      assigneed: '',
      location: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default NewListingForm;
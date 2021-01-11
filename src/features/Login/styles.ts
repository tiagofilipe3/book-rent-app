const inputStyles = () => ({
  root: {
    '& label.MuiInputLabel-root.Mui-focused, & label.MuiInputLabel-root.MuiFormLabel-filled': {
      color: '#fff',
      top: 2,
    },
    '& label + .MuiInput-formControl': {
      marginTop: '18px',
    },
    backgroundColor: '#1C4857',
    borderRadius: '10px',
    alignItems: 'center',
  },
  input: {
    color: '#fff',
    width: '300px',
    fontSize: '16px',
    paddingLeft: '10px',
    fontFamily: 'Roboto',
  },
  inputLabel: {
    color: '#fff',
    width: '300px',
    fontSize: '16px',
    paddingLeft: '10px',
    fontFamily: 'Roboto',
    top: '-5px',
    left: '4px',
  },
})

export { inputStyles }

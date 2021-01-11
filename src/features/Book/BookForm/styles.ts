import { makeStyles } from '@material-ui/core/styles'
import facepaint from 'facepaint'

const mq = facepaint(['@media(max-width: 600px)', '@media(max-width: 960px)'])

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  paper: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '10%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '5%',
    },
    marginBottom: '7%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
  },
  submit: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '4%',
      width: '100%',
      marginLeft: '5px',
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3, 0, 0, 3),
      width: 'auto',
    },
  },
  cancel: {
    backgroundColor: '#013243 !important',
    '&:hover': {
      backgroundColor: '#001319 !important',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '4%',
      width: '100%',
      marginRight: '5px',
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3, 0, 0, 3),
      width: 'auto',
    },
  },
  submitWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      width: '40%',
      justifyContent: 'flex-end',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: '20px',
  },
}))

const useMainCategoryTFStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    marginTop: '2%',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginTop: '4%',
    },
    [theme.breakpoints.up('md')]: {
      marginRight: '5px',
    },
  },
}))

const wrapperStyles = mq({
  flexDirection: ['row', 'column'],
  alignItems: 'center',
})

const textFieldStyles = mq({
  width: ['initial', '100%'],
})

const useTitleTFStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    [theme.breakpoints.up('md')]: {
      marginRight: '5px',
    },
  },
}))

const useAuthorTFStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      flex: 1,
      marginLeft: 0,
      marginTop: '4%',
    },
    [theme.breakpoints.up('md')]: {
      flex: 1,
      marginLeft: '5px',
    },
  },
}))

export {
  useStyles,
  useMainCategoryTFStyles,
  wrapperStyles,
  textFieldStyles,
  useTitleTFStyles,
  useAuthorTFStyles,
}

import { makeStyles } from '@material-ui/core/styles'
import facepaint from 'facepaint'

export const useListStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

export const useListItemStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}))

const mq = facepaint(['@media(min-width: 1050px)'])

export const tableStyles = mq({
  flexDirection: ['column', 'row'],
})

export const cellTableStyles = mq({
  marginBottom: ['20px', 0],
})

export const getModalStyle = () => {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-55%, -55%)`,
  }
}

export const useModalStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 3),
    outline: 'none',
    borderRadius: '5px',
  },
}))

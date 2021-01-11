import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'

const StyledButton = withStyles({
  root: {
    background: '#02E079',
    borderRadius: 12,
    border: 0,
    color: 'white',
    height: 42,
    padding: '0 40px',
    width: '100%',
    '&:hover': { background: '#029751' },
    whiteSpace: 'nowrap',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button)

export { StyledButton as Button }

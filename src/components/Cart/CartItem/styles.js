import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cart:{
    width: 290,
  },
  media: {
    height: 200,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
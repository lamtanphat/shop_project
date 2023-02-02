import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: 'black',
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
    textFound: {
        fontSize: '1.45rem',
        lineHeight: '1.75rem',
        fontFamily: 'Fira Sans,sans-serif',
        color: 'red',
    }
}));
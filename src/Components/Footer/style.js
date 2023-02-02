import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({


    footer: {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        fontSize: '14px',
        fontWeight: '300px',
        lineHeight: '10px',
        borderTop: '1px solid white',
        position: 'relative',
        bottom: '0',
        height: '150px',
    },
    open: {
        display: 'block',
        placeSelf: 'center',
    },
    information: {
        display: 'block',
        textAlign: 'center',
        placeSelf: 'center',
    },
    img: {
        width: '50px',
        height: '50px',
        backgroundColor: 'black',
    },
    inf: {
        fontSize: '20px',
        fontWeight: '200px',
    },
}));

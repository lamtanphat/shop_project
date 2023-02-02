
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    cardActions: {
        display: 'flex',
        padding: 0,
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'black',

    },
    close: {
        cursor: 'pointer',
        position: "absolute",
        display: 'block',
        padding: '2px 5px',
        lineHeight: '20px',
        right: '-10px',
        top: '-10px',
        fontSize: '24px',
        background: '#ffffff',
        borderRadius: '13px',
        border: '1px solid #cfcece',
    },
}));
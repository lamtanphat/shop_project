import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({

    toolbar: theme.mixins.toolbar,

    title: {
        marginTop: '5%',
        textAlign: 'center',
        borderBottom: '2px ridge',
        fontFamily: 'initial',
        fontSize: '40px',
        padding: '0 0 24px',
        fontFamily: ' Helvetica neueLTPro, Notokr Local,Noto Sans KR,Malgun Gothic,sans-serif',
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px',
        },
    },
    checkoutButton: {
        minWidth: '150px',
    },
    link: {
        textDecoration: 'none',

    },
    empty: {
        marginBottom: '47%',

    },
    cardDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-between',
        fontFamily: ' Helvetica neueLTPro, Notokr Local,Noto Sans KR,Malgun Gothic,sans-serif',
        marginBottom: '100px',
    },
}));
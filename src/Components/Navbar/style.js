import { makeStyles, } from "@material-ui/core/styles";
const drawerWidth = 0;
export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solod rgba(0,0,0,0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        borderBottom: '2px solid white',
        backgroundColor: 'black',
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        TextDecoration: 'none',
        color: 'white',
        maxWidth: '150px',
        [theme.breakpoints.up('sm')]: {
            TextDecoration: 'none',
        },
    },
    image: {
        marginRight: '10px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            with: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

    list: {

        fontSize: '16px',
        color: 'white',
        position: 'relative',
        fontWeight: '500',
        letterSpacing: '1px',
        height: '48px',
        padding: '0px 33px',
    },
    category: {
        display: 'flex',
        textDecorationColor: 'white',
        color: 'white',
        marginLeft: '100px',

    },
    button: {
        color: '#a0a0a0',
        fontFamily: ' Helvetica neueLTPro, Notokr Local,Noto Sans KR,Malgun Gothic,sans-serif',
        fontSize: '14px',
    },
    textField: {
        "& label.Mui-focused": {
            color: "grey"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'grey',
            },
            marginRight: '10px',
            marginTop: '3px',
            height: '43px'
        },
    },
    input: {
        color: 'grey',

    }
}));
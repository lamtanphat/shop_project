import React from 'react';
import useStyles from './style';
import fb from '../../assets/1.png';
import ig from '../../assets/2.png';
const Footer = () => {
    const classes = useStyles();
    return (
        <>

            <div className={classes.footer}>

                <div className={classes.open}>
                    <p>
                        HOTLINE: (+84) 65 350 382
                    </p>

                    <p>
                        OPEN MON - SUN 9:00 - 22:00
                    </p>
                    <p>
                        109 Dương Bá Trạc, Phường 1, Quận 8, Hồ Chí Minh
                    </p>
                </div>
                <div className={classes.information}>
                    <p>
                        FOLLOW US:
                    </p>
                    <img className={classes.img} src={fb}></img>
                    <img className={classes.img} src={ig}></img>

                </div>
            </div>
        </>
    )
}

export default Footer

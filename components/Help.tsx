import React from "react";
import { useRouter } from 'next/router'
import th from '../public/locales/th/Help.json';
import en from '../public/locales/en/Help.json';
// import PropTypes from 'prop-types';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const Help = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="info__box__wrapper d-none d-xl-block">
        <button type="button" className="btn v8">
            <span>
                {/* <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_14.png`}
                    alt=""
                /> */}
                <span className="lazyload">
                    <Image loader={myLoader} src="icon_14.png" alt="Image" width={100} height={100}/>
                </span>
            </span>
            <p dangerouslySetInnerHTML={{ __html: t.help.lable}}></p>
        </button>
    </div>
    )
}
Help.getInitialProps = async () => ({
    namespacesRequired: ['Help'],
});

// Help.propTypes = {
//     t: PropTypes.func.isRequired,
// };

export default Help;

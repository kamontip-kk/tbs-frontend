// import PropTypes from 'prop-types';
import * as React from 'react';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/FAQ.json';
import en from '../../public/locales/en/FAQ.json';
import Link from 'next/link';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const HeroSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    React.useEffect(() => {}, []);
    return (
        <div className="hero_section hero_section_2">
            <div className="container">
                <div className="row justify-content-center hero_top_one">
                    <div className="col-12 text-center">
                        <h3 className="section__title">
                            {t.HeroSection['Hello, would you like some help?']}
                        </h3>

                        <ul
                            className="nav nav-pills tab__toggle"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <Link href="#pills-sms">
                                <a
                                    className="nav-link active"
                                    id="pills-sms-tab"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-controls="pills-sms"
                                    aria-selected="true"
                                >
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-question.png`}
                                        alt=""
                                    /> */}
                                    <span className="lazyload">
                                        <Image loader={myLoader} src="icn-question.png" alt="" width={100} height={100}/>
                                    </span>
                                    <span>
                                        {t.HeroSection['General questions']}
                                    </span>
                                </a>
                                </Link>                              
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link href="#pills-shopping">
                                <a
                                    className="nav-link"
                                    id="pills-shopping-tab"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-controls="pills-shopping"
                                    aria-selected="false"
                                >
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-shopping.png`}
                                        alt=""
                                    /> */}
                                    <span className="lazyload">
                                        <Image loader={myLoader} src="icn-shopping.png" alt="" width={100} height={100}/>
                                    </span>
                                    <span>
                                        {t.HeroSection['Purchasing and payment']}
                                    </span>
                                </a>
                                </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link href="#pills-api">
                                <a
                                    className="nav-link"
                                    id="pills-api-tab"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-controls="pills-api"
                                    aria-selected="false"
                                >
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-dev.png`}
                                        alt=""
                                    /> */}
                                    <span className="lazyload">
                                        <Image loader={myLoader} src="icn-dev.png" alt="" width={100} height={100}/>
                                    </span>
                                    <span>
                                        {t.HeroSection['Technical problems']}
                                    </span>
                                </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroSection.getInitialProps = async () => ({
    namespacesRequired: ['FAQ'],
});

// HeroSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default HeroSection;

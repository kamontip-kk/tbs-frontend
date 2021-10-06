import { useRouter } from 'next/router'
import th from '../../public/locales/th/How-to-order.json';
import en from '../../public/locales/en/How-to-order.json';
// import PropTypes from 'prop-types';
import * as React from 'react';
import Link from 'next/dist/client/link';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const classnames = require('classnames');

const HeroSection = ({ defaultTab, setDefaultTab }: any) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;
    // const [defaultTab, setDefaultTab] = React.useState('pills-home');

    React.useEffect(() => {
        if (!router.query.tab) {
            console.warn('have not tab');
            return;
        }

        setDefaultTab(`${router.query.tab}`);
        // const params = new URLSearchParams();
        // console.log(defaultTab)
    }, [router, setDefaultTab]);
    return (
        <div className="hero_section hero_section_2">
            <div className="container">
                <div className="row justify-content-center hero_top_one">
                    <div className="col-12 text-center">
                        <h1 className="section__title">
                            {t.HeroSection['How to order a package']}
                        </h1>

                        <ul
                            className="nav nav-pills tab__toggle"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <Link href="#pills-home">
                                <a
                                    className={classnames('nav-link', {
                                        active: defaultTab === 'pills-home',
                                    })}
                                    id="pills-home-tab"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected={defaultTab === 'pills-home'}
                                    onClick={() => {
                                        setDefaultTab(`pills-home`);
                                    }}
                                >
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/main_3.png`}
                                        alt=""
                                    /> */}
                                    <span className="lazyload">
                                        <Image loader={myLoader} src="main_3.png" alt="" width={100} height={100}/>
                                    </span>
                                    <span>
                                        {t.HeroSection['Follow these steps to place an order']}
                                    </span>
                                </a>
                                </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link href="#pills-profile">
                                <a
                                    className={classnames('nav-link', {
                                        active: defaultTab === 'pills-profile',
                                    })}
                                    id="pills-profile-tab"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected={
                                        defaultTab === 'pills-profile'
                                    }
                                    onClick={() => {
                                        setDefaultTab(`pills-profile`);
                                    }}
                                >
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/dollar.png`}
                                        alt=""
                                    /> */}
                                    <span className="lazyload">
                                        <Image loader={myLoader} src="dollar.png" alt="" width={100} height={100}/>
                                    </span>
                                    <span>
                                        {t.HeroSection['Payment methods']}
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
    namespacesRequired: ['How-to-order'],
});

// HeroSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default HeroSection;

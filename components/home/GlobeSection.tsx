import React from "react";
import Link from 'next/link';
import Image from "next/dist/client/image";
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Home.json';
import en from '../../public/locales/en/Home.json';
// import PropTypes from 'prop-types';

// const myLoader = ({src, width, quality}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}?w=${width}&q=${quality || 75}`
// }

const GlobeSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="globe_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                    <div className="globe_text">
                        <h2 
                        dangerouslySetInnerHTML={{
                            __html: t.GlobeSection["Free SMS and OTP sending worldwide at a great value price."],
                        }}
                        ></h2>
                        <p>
                            {t.GlobeSection["Covering more than 200 countries worldwide."]}
                        </p>
                        <Link href="/contact/">
                            <a className="btn v3">
                                {t.GlobeSection["Contact us for more information"]}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
                    <div className="globe_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_10.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_10.png`} alt="globeimg" width={500} height={500}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
}

GlobeSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

// GlobeSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default React.memo(GlobeSection);

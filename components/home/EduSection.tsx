import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from "next/dist/client/image";
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Home.json';
import en from '../../public/locales/th/Home.json';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

const EduSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="edu_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-md-push-6">
                    <div className="edu_text">
                        <h2>
                            {t.EduSection["Interesting tips and knowledge regarding SMS and marketing"]}
                        </h2>
                        <Link href="/resource/">
                            {t.EduSection["View all contents"]}
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-md-pull-6">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
                            <div className="edu_box">
                            <Link href="https://bit.ly/3hEL9ac">
                                <a
                                    target="_blank"
                                    rel="noopener"
                                >
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_7.png`}
                                        alt="Image"
                                        width="255"
                                        height="229"
                                    /> */}
                                    <span className="lazyload">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_7.png`} alt="edu1" width={280} height={245}/>
                                    </span>
                                    <div className="edu_box_text">
                                        <p>
                                            {t.EduSection["Don’t miss!! Marketing trends in 2020."]}
                                        </p>
                                    </div>
                                </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
                                    <div className="edu_box">
                                        <Link href="https://bit.ly/2RDqTuQ">
                                        <a
                                            
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            {/* <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_8.png`}
                                                alt="Image"
                                                width="255"
                                                height="229"
                                            /> */}
                                            <span className="lazyload">
                                                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_8.png`} alt="edu8" width={280} height={245}/>
                                            </span>
                                            <div className="edu_box_text">
                                                <p>
                                                    {t.EduSection["4 ways to communicate with customers most effectively Conclude your sale with testimonials."]}
                                                </p>
                                            </div>
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
                                    <div className="edu_box">
                                    <Link href="https://bit.ly/32L9VRT">
                                        <a
                                            
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            {/* <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_9.png`}
                                                alt="Image"
                                                width="255"
                                                height="229"
                                            /> */}
                                            <span className="lazyload">
                                                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_9.png`} alt="edu9" width={280} height={245}/>
                                            </span>
                                            <div className="edu_box_text">
                                                <p>
                                                    {t.EduSection["Simple to do but the results will exceed expectations."]}
                                                </p>
                                            </div>
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
EduSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

// EduSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default React.memo(EduSection);

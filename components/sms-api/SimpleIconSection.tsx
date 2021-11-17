// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/SMSAPIPage.json';
import en from '../../public/locales/en/SMSAPIPage.json';
import Link from 'next/dist/client/link';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

const SimpleIconSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="simple_icon_section v2">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title">
                        <h2>
                            {t.simpleIconSection['SMS API Connection Manual']}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row m-40">
                <div className="col-lg-6">
                    <div className="track_box apipage">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api01.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <p>{t.simpleIconSection['SMS API Manual']}</p>
                        <h4>{t.simpleIconSection['Thai Version']}</h4>
                        <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulksmsAPIDocument_V2.0_TH.pdf`}>
                        <a
                            target="_blank"
                        >
                            {t.simpleIconSection['[Download]']}
                        </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="track_box apipage v2">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api02.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api02.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <p>{t.simpleIconSection['SMS API Manual']}</p>
                        <h4>{t.simpleIconSection['English Version']}</h4>
                        <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulksmsAPIDocument_V2.0_EN.pdf`}>
                        <a
                            target="_blank"
                        >
                            {t.simpleIconSection['[Download]']}
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title">
                        <h2>
                            {t.simpleIconSection['Connect to SMS API in a variety of languages.']}
                        </h2>
                        <p>
                            {t.simpleIconSection['Download the SDK example in the language that you require.']}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row single_lang_wrap">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="row ">
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api01.svg`}
                                    alt="php"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api01.svg`} alt="php" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api02.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api03.svg`}
                                    alt="nodejs"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api03.svg`} alt="nodejs" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api04.svg`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api05.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                {/* <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang05.svg`}
                  alt="Image"
                /> */}
                <span className="lazyload">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang05.svg`} alt="Image" width={100} height={100}/>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                {/* <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api07.svg`}
                  alt="Image"
                /> */}
                <span className="lazyload">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api07.svg`} alt="Image" width={100} height={100}/>
                </span>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api08.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-langGO.svg`}
                                    alt="golang"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-langGO.svg`} alt="golang" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang11.svg`}
                                    alt="java"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang11.svg`} alt="java" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <Link href="/developer/#ex_sdk">
                    <a
                        className="lang_link"
                        target="_blank"
                    >
                        {t.simpleIconSection['Download an additional code example']}
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/arrow_5.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/arrow_5.svg`} alt="Image" width={100} height={100}/>
                        </span>
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['SMSAPIPage'],
});

// SimpleIconSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };

export default SimpleIconSection;

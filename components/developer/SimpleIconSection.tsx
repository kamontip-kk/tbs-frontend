// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Developer.json';
import en from '../../public/locales/en/Developer.json';
import Image from 'next/image';
import Link from 'next/dist/client/link';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

const SimpleIconSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="hero_section v3 lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_11.png`}
    >
        <div className="container">
            <div className="row mt-80">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 mt-80">
                    <div className="simple_icon_title dev-page edit_seo">
                        <h1 className="edit_text_seo">
                            {t.SimpleIconSection['SMS API linking manual']}
                        </h1>
                        <div className="row m-40">
                            <div className="col-lg-6">
                                <div className="track_box apipage">
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api01.png`}
                                        alt="Image"
                                    /> */}
                                    <span className="lazyload">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api01.png`} alt="icn-aw-api01" width={100} height={100}/>
                                    </span>
                                    <p>
                                        {/* {t(
                      'SimpleIconSection::Thai Manual'
                    )} */}
                                        SMS API Manual
                                    </p>
                                    <h4>
                                        {t.SimpleIconSection['Thai Manual']}
                                    </h4>
                                    <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulksmsAPIDocument_V2.0_TH.pdf`}>                         
                                    <a target="_blank">
                                        {t.SimpleIconSection['[Download]']}
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
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api02.png`} alt="icn-aw-api02" width={100} height={100}/>
                                    </span>
                                    <p>
                                        {/* {t(
                      'SimpleIconSection::simpleIconSection.breadcrumb-right-box'
                    )} */}
                                        SMS API Manual
                                    </p>
                                    <h4>
                                        {t.SimpleIconSection['English Manual']}
                                    </h4>
                                    <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulksmsAPIDocument_V2.0_EN.pdf`}>                         
                                    <a target="_blank">
                                        {t.SimpleIconSection['[Download]']}
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 mt-80">
                    <div className="simple_icon_title dev-page edit_seo">
                        <h2 className="edit_text_seo">
                            {t.SimpleIconSection['OTP Service Manual']}
                        </h2>
                        <div className="row m-40">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-12">
                                <div className="track_box apipage">
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api01.png`}
                                        alt="Image"
                                    /> */}
                                    <span className="lazyload">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api01.png`} alt="icn-aw-api01" width={100} height={100}/>
                                    </span>
                                    <p>OTP Service Manual</p>
                                    <h4>
                                        {t.SimpleIconSection['Thai Manual']}
                                    </h4>
                                    <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/Thaibulksms-otp.pdf`}>
                                    <a >
                                        {t.SimpleIconSection['[Download]']}
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" id="ex_sdk">
                <div className="col-xl-12 btn-api-ref">
                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}`}>
                    <a className="btn v3" target="_blank">
                        {t.SimpleIconSection['API References']}
                    </a>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title dev-page edit_seo">
                        <h2 className="edit_text_seo">
                            {t.SimpleIconSection['Download example']}
                        </h2>
                        <p>
                            {t.SimpleIconSection['Download the SDK example in the language that you require.']}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row single_lang_wrap">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="row ">
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang dev-page">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api01.svg`}
                                    alt="php"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api01.svg`} alt="php" width={100} height={100}/>
                                </span>
                                <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-PHP.zip`}>
                                <a className="lang_link" target="_blank">
                                    {t.SimpleIconSection['[Download]']}
                                </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang dev-page">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api03.svg`}
                                    alt="nodejs"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api03.svg`} alt="nodejs" width={100} height={100}/>
                                </span>
                                <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-Nodejs.zip`}>
                                <a className="lang_link" target="_blank">
                                    {t.SimpleIconSection['[Download]']}
                                </a>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang dev-page">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang02.svg`}
                  alt="Image"
                />
                <a
                  className="lang_link"
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-VB.NET.zip`}
                >
                  {t('SimpleIconSection::[Download]')}
                </a>
              </div>
            </div> */}
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang dev-page">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang03.svg`}
                  alt="Image"
                />
                <a
                  className="lang_link"
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-C.zip`}
                >
                  {t('SimpleIconSection::[Download]')}
                </a>
              </div>
            </div> */}
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang dev-page">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang04.svg`}
                  alt="Image"
                />
                <a
                  className="lang_link"
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-C2Plus.NET.zip`}
                >
                  {t('SimpleIconSection::[Download]')}
                </a>
              </div>
            </div> */}
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang dev-page">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang05.svg`}
                                    alt="c#"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang05.svg`} alt="c#" width={100} height={100}/>
                                </span>
                                <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-CShap.zip`}>
                                <a className="lang_link" target="_blank">
                                    {t.SimpleIconSection['[Download]']}
                                </a>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang dev-page">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang06.svg`}
                  alt="Image"
                />
                <a
                  className="lang_link"
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-ObjC.zip`}
                >
                  {t('SimpleIconSection::[Download]')}
                </a>
              </div>
            </div> */}
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang dev-page">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang07.svg`}
                  alt="Image"
                />
                <a
                  className="lang_link"
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaiBulkSMS_ClassicASP_NoParser.zip`}
                >
                  {t('SimpleIconSection::[Download]')}
                </a>
              </div>
            </div> */}
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang dev-page">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang08.svg`}
                  alt="Image"
                />
                <a
                  className="lang_link"
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-ActionScript.zip`}
                >
                  {t('SimpleIconSection::[Download]')}
                </a>
              </div>
            </div> */}
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang dev-page">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api07.svg`}
                                    alt="python"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api07.svg`} alt="python" width={100} height={100}/>
                                </span>
                                <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-Python.zip`}>
                                <a className="lang_link" target="_blank">
                                    {t.SimpleIconSection['[Download]']}
                                </a>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang dev-page">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang10.svg`}
                  alt="Image"
                />
                <a
                  className="lang_link"
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-JavaScript.zip`}
                >
                  {t('SimpleIconSection::[Download]')}
                </a>
              </div>
            </div> */}
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang dev-page">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-langGO.svg`}
                                    alt="golang"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-langGO.svg`} alt="golang" width={100} height={100}/>
                                </span>
                                <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-Go-lang.zip`}>
                                <a className="lang_link" target="_blank">
                                    {t.SimpleIconSection['[Download]']}
                                </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang dev-page">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang11.svg`}
                                    alt="java"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang11.svg`} alt="java" width={100} height={100}/>
                                </span>
                                <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-Java.zip`}>
                                <a className="lang_link" target="_blank">
                                    {t.SimpleIconSection['[Download]']}
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
}

SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['Developer'],
});

// SimpleIconSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };

export default SimpleIconSection;

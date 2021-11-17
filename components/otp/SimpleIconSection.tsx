// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Otp.json';
import en from '../../public/locales/en/Otp.json';
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
    <div className="simple_icon_section v2">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>
              {t.SimpleIconSection['The OTP message can be set as desired']}
            </h3>
          </div>
        </div>
      </div>
      <div className="row feature_checklist_wrap">
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              {/* <img
                className="lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`}
                alt="Image"
              /> */}
              <span className="lazyload">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`} alt="Image" width={100} height={100}/>
              </span>
            </div>
            <div className="check_text">
              <p>
                {t.SimpleIconSection['Your business name can be set as desired']}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              {/* <img
                className="lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`}
                alt="Image"
              /> */}
              <span className="lazyload">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`} alt="Image" width={100} height={100}/>
              </span>
            </div>
            <div className="check_text">
              <p>
                {t.SimpleIconSection['The number of digits can be set as desired']}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              {/* <img
                className="lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`}
                alt="Image"
              /> */}
              <span className="lazyload">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`} alt="Image" width={100} height={100}/>
              </span>
            </div>
            <div className="check_text">
              <p>
                {t.SimpleIconSection['The message Template can be set as desired']}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              {/* <img
                className="lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`}
                alt="Image"
              /> */}
              <span className="lazyload">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`} alt="Image" width={100} height={100}/>
              </span>
            </div>
            <div className="check_text">
              <p>
                {t.SimpleIconSection['The password Expiration time can be set as desired']}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>
              {t.SimpleIconSection['The system can function in a variety of languages.']}
            </h3>
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
                  alt="Image"
                /> */}
                <span className="lazyload">
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api01.svg`} alt="Image" width={100} height={100}/>
                </span>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-3 col-3">
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
                  alt="Image"
                /> */}
                <span className="lazyload">
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api03.svg`} alt="Image" width={100} height={100}/>
                </span>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api04.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-3 col-3">
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
            {/* <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api07.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-3 col-3">
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
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api07.svg`}
                  alt="Image"
                /> */}
                <span className="lazyload">
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api07.svg`} alt="Image" width={100} height={100}/>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                {/* <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-langGO.svg`}
                  alt="Image"
                /> */}
                <span className="lazyload">
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-langGO.svg`} alt="Image" width={100} height={100}/>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                {/* <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang11.svg`}
                  alt="Image"
                /> */}
                <span className="lazyload">
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang11.svg`} alt="Image" width={100} height={100}/>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <Link href="https://developer.thaibulksms.com/reference#otp">
          <a className="lang_link">
            {t.SimpleIconSection['Learn more about the OTP API']}
            {/* <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/arrow_5.png`}
              alt="Image"
            /> */}
            <span className="lazyload">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/arrow_5.png`} alt="Image" width={100} height={100}/>
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
  namespacesRequired: ['Otp'],
});

// SimpleIconSection.propTypes = {
//   t: PropTypes.func.isRequired,
// };
export default SimpleIconSection;

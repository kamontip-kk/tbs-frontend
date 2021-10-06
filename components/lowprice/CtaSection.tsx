// import { useRouter } from 'next/router'
// import th from '../../public/locales/th/Otp.json';
// import en from '../../public/locales/en/Otp.json';
// import PropTypes from 'prop-types';
import Link from 'next/link';

const CtaSectionV2 = () => {
    // const router = useRouter();
    // const { locale } = router;
    // const t = locale === 'th' ? th : en;

    return(
        <div
        className="cta_section v2 lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
    >
        <div className="container">
            <div className="row align-items-center">
                <div className=" col-lg-12">
                    <div className="cta-text">
                        <h3>
                            SMS ราคาถูก ที่มาพร้อมคุณภาพ
                            <br />
                            ที่คุณไว้วางใจได้
                        </h3>
                        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/pricing/`}>
                        <a className="btn lowPrice">
                            ซื้อเลย
                        </a>
                        </Link>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                        <a className="btn v7">
                            ทดลองใช้ฟรี
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
}
CtaSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['Otp'],
});

// CtaSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default CtaSectionV2;

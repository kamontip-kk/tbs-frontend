// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/SmartSmsConsole.json';
import en from '../../public/locales/en/SmartSmsConsole.json';
import Link from 'next/dist/client/link';

const CtaSectionV2 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="cta_section v2 lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
    >
        <div className="container">
            <div className="row align-items-center">
                <div className=" col-lg-12">
                    <div className="cta-text">
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t.CtaSection['Easily send messages through the ThaiBulkSMS website <br />without having to rely on Developers'],
                            }}
                        >
                            {/* ส่งข้อความผ่านเว็บ ThaiBulkSMS ได้ง่าย
              <br />
              ทำเองได้ ไม่ต้องพึ่ง Developer */}
                        </h3>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                        <a
                            className="btn v7"
                        >
                            {t.CtaSection['Try for free']}
                        </a>
                        </Link>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}>
                        <a
                            className="btn otp2"
                        >
                            {t.CtaSection.Login}
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
    namespacesRequired: ['SmartSmsConsole'],
});

// CtaSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default CtaSectionV2;

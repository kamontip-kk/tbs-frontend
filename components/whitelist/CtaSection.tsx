import { useRouter } from 'next/router'
import th from '../../public/locales/th/Otp.json';
import en from '../../public/locales/en/Otp.json';
// import PropTypes from 'prop-types';
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
                        <h3>หมดปัญหา SMS ส่งไม่ถึงผู้รับ<br />ด้วยการขอ Whitelist</h3>
                        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/pricing/`}>
                        <a
                            className="btn lowPrice"
                            target="_blank"
                        >
                           สั่งซื้อแพ็กเกจ
                        </a>
                        </Link>
                        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/contact/`}>
                        <a
                            
                            className="btn v7"
                        >
                            {t[`สอบถามเพิ่มเติม`]}
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

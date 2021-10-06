import { useRouter } from 'next/router'
import th from '../../public/locales/th/Otp.json';
import en from '../../public/locales/en/Otp.json';
import Link from 'next/dist/client/link';
// import PropTypes from 'prop-types';
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
                        <h3>คุณภาพที่การันตีด้วย SLA<br />ให้บริการลูกค้าของคุณได้มั่นใจยิ่งกว่า</h3>
                        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/pricing/`}>
                        <a
                            className="btn lowPrice"
                            target="_blank"
                        >
                           ดูราคาแพ็กเกจ
                        </a>
                        </Link>
                        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/register/`}>
                        <a
                            className="btn v7"
                        >
                            {t[`ทดลองส่งฟรี`]}
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

import { useRouter } from 'next/router'
import th from '../../public/locales/th/Product.json';
import en from '../../public/locales/en/Product.json';
// import PropTypes from 'prop-types';
import Link from 'next/dist/client/link';
const SimpleSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="simple_section lazyload productPage"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_4.png`}
    >
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="simple_title">
                        {t.SimpleSection['Complete set of basic features for SMS sending']}
                    </h2>
                </div>
                <div className="col-md-12">
                    <ul className="simple_feature_list">
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t.SimpleSection['Sending results can be checked instantly.']}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t.SimpleSection['Maximum allowance of 5 messages being sent consecutively']}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t.SimpleSection['Various ways of setting the time of sending']}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t.SimpleSection['Detailed reports of sending are provided.']}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t.SimpleSection['The sender’s name can be specified.']}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t.SimpleSection['The sending status is clearly specified.']}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>{t.SimpleSection['Block list system']}</p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>{t.SimpleSection.Phonebook}</p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>{t.SimpleSection['Templates are provided.']}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="sms_form userProduct">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12 line-user">
                                <h2>ผู้ให้บริการที่ไม่มีประสิทธิภาพ จะทำให้เกิดผลเสียกับธุรกิจมากกว่าที่คิด</h2>
                                <p>เพื่อให้แน่ใจว่า ThaiBulkSMS จะเป็นผู้ให้บริการคุณภาพสูงที่คุณตามหา คุณสามารถทดลองใช้ระบบส่งแบบเต็มรูปแบบได้ฟรีก่อนสั่งซื้อ</p>
                            </div>
                            <div className="col-lg-5 col-md-12 text-center">
                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                <a 
                                    className="btn v2"
                                    type="submit"
                                >
                                    ทดลองใช้ฟรี
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
    

SimpleSection.getInitialProps = async () => ({
    namespacesRequired: ['Product'],
});

// SimpleSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SimpleSection;

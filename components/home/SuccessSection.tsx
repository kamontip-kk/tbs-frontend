import React from "react";
import Link from 'next/link';
// import PropTypes from 'prop-types';
// import { useRouter } from 'next/router'
// import th from '../../public/locales/th/Home.json';
// import en from '../../public/locales/en/Home.json';

const GlobeSection = () => {
    // const router = useRouter();
    // const { locale } = router;
    // const t = locale === 'th' ? th : en;

    return(
        <div className="success_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                    <div className="globe_text">
                        <h2>ทุก SMS ที่ส่งไป มั่นใจได้ว่าส่งถึง</h2>
                        <p>"ไม่ใช่แค่ส่งได้ แต่ต้องส่งถึง" คือสิ่งที่เรายึดถือมาตลอด พร้อมมี Solution ที่จะทำให้คุณมั่นใจได้ว่า ทุกการส่ง SMS กับเราจะไปถึงเบอร์ลูกค้าอย่างแน่นอน แม้แต่เบอร์ที่แจ้งบล็อก SMS โฆษณาไว้กับเครือข่าย</p>
                        <Link href="/whitelist/">
                            <a className="btn v3">
                                ดู Solution
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
                    <div className="globe_img">
                        <object
                            type="image/svg+xml"
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-sms-track-page.svg`}
                        ></object>
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

import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link';
// import { useRouter } from 'next/router'
// import th from '../../public/locales/th/Thankyou.json';
// import en from '../../public/locales/en/Thankyou.json';

const Components404 = () => (
    <div className="register_section">
        <div className="finish-regis">
            <div className="img-finish-regis">
                <object
                    type="image/svg+xml"
                    data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-404.svg`}
                ></object>
            </div>
            <h2>ไม่พบหน้าเว็บไซต์ที่คุณต้องการ</h2>
            <p className="sub-text">กรุณาตรวจสอบความถูกต้องของ URL อีกครั้ง</p>
            <div className="btn-login">
                <Link href="/">
                    <a className="btn v2">กลับสู่หน้าแรก</a>
                </Link>
            </div>
        </div>
    </div>
);
Components404.getInitialProps = async () => ({
    namespacesRequired: ['Thankyou'],
});

// Components404.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default React.memo(Components404);

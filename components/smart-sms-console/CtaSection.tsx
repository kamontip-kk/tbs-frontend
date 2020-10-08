import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const CtaSectionV2 = ({ }: any) => (
  <div
    className="cta_section v2 lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className=" col-lg-12">
          <div className="cta-text">
            <h3>ส่ง SMS ผ่านเว็บ ThaiBulkSMS ได้ง่าย<br />ทำเองได้ ไม่ต้องพึ่ง Developer</h3>
            <a
              href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
              className="btn v7"
            >
              ทดลองใช้ฟรี
            </a>
            <a
              href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
              className="btn otp2"
            >
              ล็อกอิน
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
CtaSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['OtpCtaSection'],
});

CtaSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpCtaSection')(CtaSectionV2);

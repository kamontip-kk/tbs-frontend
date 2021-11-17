// import { useRouter } from 'next/router'
// import th from '../../public/locales/th/Otp.json';
// import en from '../../public/locales/en/Otp.json';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

// import PropTypes from 'prop-types';
const SmsSectionV3 = ({  }: any) => {
    // const router = useRouter();
    // const { locale } = router;
    // const t = locale === 'th' ? th : en;

    return(
        <div className="sms_section v2 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-push-6">
                    <div className="newsletter_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-SLA01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-SLA01.png`} alt="Image" width={100} height={100}/>
                        </span>
                    </div>

                </div>
                <div className="col-lg-5 col-md-pull-6">
                    <div className="newsletter_text">
                        <h3>รับประกันคุณภาพทั้งความเสถียร และการซัพพอร์ต</h3>
                        <p>SLA (Service Level Agreement) คือ ข้อตกลงในการให้บริการว่าจะรักษาคุณภาพให้เป็นไปตามมาตรฐานที่ตกลงกันไว้ โดยจะมีการชดเชยหากไม่สามารถทำได้ตามข้อตกลง เพื่อให้ลูกค้าใช้บริการได้อย่างมั่นใจ</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form v2">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="sms_form_text">
                                    <h4 className="noSLA">ความเสี่ยงจากการเลือกใช้ผู้ให้บริการที่ไม่มี SLA</h4>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="sms_form_field">
                                    <p className="textLeft">คุณจะไม่สามารถมั่นใจได้เลยว่าระบบการส่ง SMS หรือ Infrastructure เสถียรจริงหรือไม่ และถ้าหากระบบล่มเป็นเวลานานจนเกิดความเสียหายกับธุรกิจทั้งด้านรายได้ และภาพลักษณ์ก็อาจจะไม่ได้รับการชดเชยใด ๆ เนื่องจากไม่มีข้อตกลงที่กำหนดไว้</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


SmsSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['Otp'],
});

// SmsSectionV3.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SmsSectionV3;

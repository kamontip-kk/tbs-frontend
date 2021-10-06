// import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';
// import th from '../../public/locales/th/Otp.json';
// import en from '../../public/locales/th/Otp.json';

const TrackSection = ({  }: any) => {
    // const router = useRouter();
    // const { locale } = router;
    // const t = locale === 'th' ? th : en;

    return(
        <div
        className="track_section bgTableCal lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bgTablePrice.png`}
    >
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="headPricing">ตารางการคำนวณเครดิต</h3>
                    <div className="secTableCal">
                        <table>
                            <tr>
                                <th>ภาษาไทย (ตัวอักษร)</th>
                                <th>ภาษาอังกฤษ (ตัวอักษร)</th>
                                <th className="numCredit">จำนวนเครดิต</th>
                            </tr>
                            <tr>
                                <td>70</td>
                                <td>160</td>
                                <td className="numCredit">1</td>
                            </tr>
                            <tr>
                                <td>134</td>
                                <td>306</td>
                                <td className="numCredit">2</td>
                            </tr>
                            <tr>
                                <td>201</td>
                                <td>459</td>
                                <td className="numCredit">3</td>
                            </tr>
                            <tr>
                                <td>268</td>
                                <td>612</td>
                                <td className="numCredit">4</td>
                            </tr>
                            <tr>
                                <td>335</td>
                                <td>765</td>
                                <td className="numCredit">5</td>
                            </tr>
                            <tr>
                                <td>402</td>
                                <td>918</td>
                                <td className="numCredit">6</td>
                            </tr>
                            <tr>
                                <td>469</td>
                                <td>1,071</td>
                                <td className="numCredit">7</td>
                            </tr>
                            <tr>
                                <td>536</td>
                                <td>1,224</td>
                                <td className="numCredit">8</td>
                            </tr>
                            <tr>
                                <td>603</td>
                                <td>1,377</td>
                                <td className="numCredit">9</td>
                            </tr>
                            <tr>
                                <td>670</td>
                                <td>1,530</td>
                                <td className="numCredit">10</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
TrackSection.getInitialProps = async () => ({
    namespacesRequired: ['Otp'],
});

// TrackSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default TrackSection;

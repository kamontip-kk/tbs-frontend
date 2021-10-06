import { useRouter } from 'next/router'
import th from '../../public/locales/th/Pricing.json';
import en from '../../public/locales/en/Pricing.json';
import Link from 'next/link';
// import PropTypes from 'prop-types';
import * as React from 'react';
import { Product, ProductPackage } from '../../services/shopping/pricing.model';
import numeral from 'numeral';
import TagManager from 'react-gtm-module';
import Cookie from 'js-cookie';
import appConfig from '../../appConfig';
import { CheckFirstPurchase } from '../../services/shopping/payment.service';
import Image from 'next/image';
// import classnames from 'classnames';
const classnames = require('classnames');

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const SenderActive = 5;
const SenderBegin = 1;

const BuyPackage = (packageItem: ProductPackage) => {
    let domain = 'localhost';

    if (appConfig.APP_ENV === appConfig.production) domain = '.thaibulksms.com';
    else if (appConfig.APP_ENV === appConfig.internalTest)
        domain = '.1mobyline.com';

    Cookie.set('packageId', packageItem.productId.toString(), { domain });
    window.location.replace(
        `${process.env.NEXT_PUBLIC_WEB_URL_SHOPPING}/payment/`
    );
};
const showPackage = (
    packagesNormal: Product[],
    packages: Product[],
    
) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    let itemPackages: any = [];
    for (let item in packages) {
        let productItem = packages[item];
        let productItemNormal = packagesNormal[item];
        let itemNo = item + 1;
        itemPackages.push(
            <div
                key={itemNo}
                className={classnames('row', 'no-gutters', 'single__pricing', {
                    'm-0': !item,
                    active: productItem.corporate.sender === 5,
                })}
                data-toggle="collapse"
                data-target={`.collapse${itemNo}`}
                aria-expanded={productItem.corporate.sender === SenderActive}
                aria-controls={`collapse${itemNo}`}
            >
                <div className="col-md-4 box">
                    {productItem.corporate.sender === SenderActive && (
                        <div className="parent">
                            <h4 className="ribbon">
                                {t.AllPricing.Bestsellers}
                            </h4>
                        </div>
                    )}{' '}
                    {productItem.corporate.sender === SenderBegin && (
                        <div className="parent">
                            <h4 className="ribbon">
                                {t.AllPricing['For beginners']}
                            </h4>
                        </div>
                    )}
                    <div className="left__box">
                        <h3>{numeral(productItem.amount).format('0,0')}</h3>
                        <span>
                            {t.AllPricing['Duration of usage']}{' '}
                            {`${productItem.period} `}
                            {t.AllPricing.months}
                        </span>
                    </div>
                </div>
                <div className="col-md-8 box">
                    <div className="row">
                        <div className="col-12">
                            <div className="pricing__content">
                                <div className="arrow-down">
                                    {/* <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/arrow_down.png`}
                                        alt=""
                                    /> */}
                                    <span>
                                        <Image loader={myLoader} src="arrow_down.png" alt="" width={100} height={100}/>
                                    </span>
                                </div>
                                {/* <img
                                    src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/shape_triangle.png`}
                                    className="shape__box"
                                    alt=""
                                /> */}
                                <span className="shape__box">
                                    <Image loader={myLoader} src="shape_triangle.png" alt="" width={100} height={100}/>
                                </span>
                                <div className="row ribbon-container">
                                    <div className="col-lg-4 offset-lg-1 col-sm-5 text-center">
                                        <h4 className="d-md-none">Standard</h4>
                                        <p className="p-line-through">
                                            {numeral(
                                                productItemNormal.standard
                                                    .amount /
                                                    productItemNormal.standard
                                                        .credit
                                            ).format('0.00')}
                                        </p>
                                        <h3>
                                            {numeral(
                                                productItem.standard.amount /
                                                    productItem.standard.credit
                                            ).format('0.00')}
                                            {` `}
                                            <span>
                                                {/* {t('AllPricing.bath')}/{t('AllPricing.message')} */}
                                                {t.AllPricing['Baht/message']}
                                            </span>
                                        </h3>

                                        <div
                                            className={classnames(
                                                'expand',
                                                'collapse',
                                                `collapse${itemNo}`,
                                                {
                                                    show:
                                                        productItem.standard
                                                            .sender ===
                                                        SenderActive,
                                                }
                                            )}
                                            data-parent="#accordion"
                                        >
                                            <div className="sender__box1 div-line-through2">
                                                <p className="p-line-through2">
                                                    <span className="none">
                                                        {numeral(
                                                            productItemNormal
                                                                .standard.credit
                                                        ).format('0,0')}
                                                    </span>{' '}
                                                    <span className="up">
                                                        {' '}
                                                        +20% UP{' '}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="sender__box1">
                                                <span>
                                                    {t.AllPricing['Number of messages']}
                                                </span>
                                                <span className="theme__text">
                                                    {numeral(
                                                        productItem.standard
                                                            .credit
                                                    ).format('0,0')}
                                                </span>
                                            </div>
                                            <div className="sender__box1">
                                                <span>Sender Name</span>
                                                <span className="theme__text">
                                                    {productItem.standard.sender
                                                        ? productItem.standard
                                                              .sender
                                                        : '-'}
                                                </span>
                                            </div>

                                            <div className="text-center">
                                                <button
                                                    // href="#"
                                                    onClick={() =>
                                                        BuyPackage(
                                                            productItem.standard
                                                        )
                                                    }
                                                    className="btn v8"
                                                >
                                                    {t.AllPricing['Buy now']}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-5 text-center">
                                        <h4 className="d-md-none">Corporate</h4>
                                        <p className="p-line-through">
                                            {numeral(
                                                productItemNormal.corporate
                                                    .amount /
                                                    productItemNormal.corporate
                                                        .credit
                                            ).format('0.00')}
                                        </p>
                                        <h3>
                                            {numeral(
                                                productItem.corporate.amount /
                                                    productItem.corporate.credit
                                            ).format('0.00')}{' '}
                                            <span>
                                                <span>
                                                    {t.AllPricing['Baht/message']}
                                                </span>
                                                {/* {t('AllPricing.bath')}/{t('AllPricing.message')} */}
                                            </span>
                                        </h3>

                                        <div
                                            className={classnames(
                                                'expand',
                                                'collapse',
                                                `collapse${itemNo}`,
                                                {
                                                    show:
                                                        productItem.corporate
                                                            .sender ===
                                                        SenderActive,
                                                }
                                            )}
                                            data-parent="#accordion"
                                        >
                                            <div className="sender__box1 div-line-through2">
                                                <p className="p-line-through2">
                                                    <span className="none">
                                                        {numeral(
                                                            productItemNormal
                                                                .corporate
                                                                .credit
                                                        ).format('0,0')}
                                                    </span>{' '}
                                                    <span className="up">
                                                        {' '}
                                                        +20% UP{' '}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="sender__box1">
                                                <span>
                                                    {t.AllPricing['Number of messages']}
                                                </span>
                                                <span className="theme__text">
                                                    {numeral(
                                                        productItem.corporate
                                                            .credit
                                                    ).format('0,0')}
                                                </span>
                                            </div>
                                            <div className="sender__box1">
                                                <span>Sender Name</span>
                                                <span className="theme__text">
                                                    {productItem.corporate
                                                        .sender
                                                        ? productItem.corporate
                                                              .sender
                                                        : '-'}
                                                </span>
                                            </div>

                                            <div className="text-center">
                                                <button
                                                    onClick={() =>
                                                        BuyPackage(
                                                            productItem.corporate
                                                        )
                                                    }
                                                    className="btn v8"
                                                >
                                                    {t.AllPricing['Buy now']}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-md-1 text-center devribbon-container ">
                                        <div className="pack-img">
                                            {/* <img
                                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/extra-package.png`}
                                            ></img> */}
                                            <span>
                                                <Image loader={myLoader} src="extra-package.png" alt="Image" width={100} height={100}/>
                                            </span>
                                            <div className="pack-text">
                                                <p>
                                                    <b>Extra</b>
                                                    <br /> Top-Up!!!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return itemPackages;
};

const FirstPurchase = ({ packages, packagesNormal }: any) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;
    const [showProduct, setShowProduct] = React.useState(false);
    React.useEffect(() => {
        TagManager.dataLayer({
            dataLayer: {
                event: 'purchase',
                action: 'intent',
            },
        });

        const dpd: any = router.query.dpd;

        if (!dpd) return;
        setShowProduct(dpd ? true : false);
        firstPurchase(dpd);
    }, [router]);

    const firstPurchase = async (dpd: string) => {
        try {
            await CheckFirstPurchase(dpd);
        } catch (error) {
            console.error(error);
            router.push('/pricing');
        }
    };
    return (
        <div
            className="all__pricing accordion lazyload"
            id="accordion"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/pricing_bg.png`}
        >
            <div className="container priceTable">
                <div className="row">
                    <div className="col-12">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <div className="left__box left__box__top">
                                    <p>{t.AllPricing['Package prices']}</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="top__bar">
                                            <div className="row">
                                                <div className="col-6 text-center">
                                                    <p>
                                                        {t.AllPricing['Standard SMS']}
                                                    </p>
                                                </div>
                                                <div className="col-6 text-center">
                                                    <p>
                                                        {t.AllPricing['Corporate SMS']}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {showProduct
                            ? showPackage(packagesNormal, packages)
                            : null}
                    </div>

                    <div className="col-12 text-center pricing__bottom__content">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: t.AllPricing['• Package prices do not include VAT.<br>• 3% withholding tax is available only when purchasing in the name of juristic persons.'],
                            }}
                        />

                        <div className="pricing__bottom d-flex align-items-center justify-content-center">
                            <h5 className="mr-5">
                                {t.AllPricing['Not found your ideal choice yet?']}
                            </h5>
                            <Link href="/contact/">
                                <a className="btn v3">
                                    {t.AllPricing['Contact our sales team']}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

FirstPurchase.getInitialProps = async () => ({
    namespacesRequired: ['Pricing'],
});

// FirstPurchase.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default React.memo(FirstPurchase);

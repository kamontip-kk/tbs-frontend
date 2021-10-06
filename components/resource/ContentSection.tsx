// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Resource.json';
import en from '../../public/locales/en/Resource.json';
import Link from 'next/link';
import { format } from 'date-fns';
import { parseFromTimeZone } from 'date-fns-timezone';
import AppConfig from '../../appConfig';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}
const ContentSection = ({ Posts }: any) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="resource_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="secKnowledge">
                        <div className="headSection">
                            <h2 className="edit_text_seo">
                                {t.ContentSection.Knowledge}
                            </h2>
                            <Link
                                href={`${AppConfig.WEB_URL_BLOG}/categories/marketing`}
                                passHref={true}
                            >
                                <a>{t.ContentSection['View all']}</a>
                            </Link>
                        </div>
                        <div className="Knowledge">
                            {
                                //knowledge
                                !Posts.knowledge ||
                                    Posts.knowledge.map((item, key) => (
                                        <Link
                                            href={`${AppConfig.WEB_URL_BLOG}/post/[slug]`}
                                            as={`${AppConfig.WEB_URL_BLOG}/post/${item.slug}`}
                                            key={key}
                                        >
                                            <a>
                                                <div className="secArticle">
                                                    <div className="img-article">
                                                        {/* <img
                                                            src={
                                                                item
                                                                    .banner_image_top
                                                                    .url
                                                            }
                                                            alt={item.name}
                                                        /> */}
                                                        <span>
                                                            <Image loader={myLoader} 
                                                                src={
                                                                item.banner_image_top.url
                                                                } 
                                                                alt={item.name} 
                                                                width={100} height={100}/>
                                                        </span>
                                                    </div>
                                                    <div className="text-article">
                                                        <h4>{item.name}</h4>
                                                        <p>
                                                            {format(
                                                                parseFromTimeZone(
                                                                    item.published_at,
                                                                    {
                                                                        timeZone:
                                                                            'Asia/Bangkok',
                                                                    }
                                                                ),
                                                                'dd MMM yyyy'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="secUsecase">
                        <div className="headSection">
                            <h2 className="edit_text_seo">
                                {t.ContentSection['Example Operations']}
                            </h2>
                            <Link
                                href={`${AppConfig.WEB_URL_BLOG}/categories/use-cases`}
                                passHref={true}
                            >
                                <a>{t.ContentSection['View all']}</a>
                            </Link>
                        </div>
                        {
                            //example
                            !Posts.example ||
                                Posts.example.map((item, key) => {
                                    return key === 0 ? (
                                        <Link
                                            href={`${AppConfig.WEB_URL_BLOG}/post/[slug]`}
                                            as={`${AppConfig.WEB_URL_BLOG}/post/${item.slug}`}
                                            key={key}
                                        >
                                            <a>
                                                <div className="hilight">
                                                    <div className="img-hilight">
                                                        {/* <img
                                                            src={
                                                                item
                                                                    .banner_image_top
                                                                    .url
                                                            }
                                                            alt={item.name}
                                                        /> */}
                                                        <span>
                                                            <Image loader={myLoader} 
                                                                src={
                                                                item.banner_image_top.url
                                                                } 
                                                                alt={item.name} 
                                                                width={100} height={100}/>
                                                        </span>
                                                    </div>
                                                    <div className="text-hilight">
                                                        <h4>{item.name}</h4>
                                                        <p>
                                                            {format(
                                                                parseFromTimeZone(
                                                                    item.published_at,
                                                                    {
                                                                        timeZone:
                                                                            'Asia/Bangkok',
                                                                    }
                                                                ),
                                                                'dd MMM yyyy'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    ) : (
                                        <Link
                                            href={`${AppConfig.WEB_URL_BLOG}/post/[slug]`}
                                            as={`${AppConfig.WEB_URL_BLOG}/post/${item.slug}`}
                                            key={key}
                                        >
                                            <a>
                                                <div className="secArticle">
                                                    <div className="img-article">
                                                        {/* <img
                                                            src={
                                                                item
                                                                    .banner_image_top
                                                                    .url
                                                            }
                                                            alt={item.name}
                                                        /> */}
                                                        <span>
                                                            <Image loader={myLoader} 
                                                                src={
                                                                item.banner_image_top.url
                                                                } 
                                                                alt={item.name} 
                                                                width={100} height={100}/>
                                                        </span>
                                                    </div>
                                                    <div className="text-article">
                                                        <h4>{item.name}</h4>
                                                        <p>
                                                            {format(
                                                                parseFromTimeZone(
                                                                    item.published_at,
                                                                    {
                                                                        timeZone:
                                                                            'Asia/Bangkok',
                                                                    }
                                                                ),
                                                                'dd MMM yyyy'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    );
                                })
                        }
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="secUsecase">
                        <div className="headSection">
                            <h2 className="edit_text_seo">
                                {t.ContentSection['Success Stories']}
                            </h2>
                            <Link
                                href={`${AppConfig.WEB_URL_BLOG}/categories/success-stories/`}
                                passHref={true}
                            >
                                <a>{t.ContentSection['View all']}</a>
                            </Link>
                        </div>
                        {
                            //successStory
                            !Posts.successStory ||
                                Posts.successStory.map((item, key) => {
                                    return key === 0 ? (
                                        <Link
                                            href={`${AppConfig.WEB_URL_BLOG}/post/[slug]`}
                                            as={`${AppConfig.WEB_URL_BLOG}/post/${item.slug}`}
                                            key={key}
                                        >
                                            <a>
                                                <div className="hilight">
                                                    <div className="img-hilight">
                                                        {/* <img
                                                            src={
                                                                item
                                                                    .banner_image_top
                                                                    .url
                                                            }
                                                            alt={item.name}
                                                        /> */}
                                                        <span>
                                                            <Image loader={myLoader} 
                                                                src={
                                                                item.banner_image_top.url
                                                                } 
                                                                alt={item.name} 
                                                                width={100} height={100}/>
                                                        </span>
                                                    </div>
                                                    <div className="text-hilight">
                                                        <h4>{item.name}</h4>
                                                        <p>
                                                            {format(
                                                                parseFromTimeZone(
                                                                    item.published_at,
                                                                    {
                                                                        timeZone:
                                                                            'Asia/Bangkok',
                                                                    }
                                                                ),
                                                                'dd MMM yyyy'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    ) : (
                                        <Link
                                            href={`${AppConfig.WEB_URL_BLOG}/post/[slug]`}
                                            as={`${AppConfig.WEB_URL_BLOG}/post/${item.slug}`}
                                            key={key}
                                        >
                                            <a>
                                                <div className="secArticle">
                                                    <div className="img-article">
                                                        {/* <img
                                                            src={
                                                                item
                                                                    .banner_image_top
                                                                    .url
                                                            }
                                                            alt={item.name}
                                                        /> */}
                                                        <span>
                                                            <Image loader={myLoader} 
                                                                src={
                                                                item.banner_image_top.url
                                                                } 
                                                                alt={item.name} 
                                                                width={100} height={100}/>
                                                        </span>
                                                    </div>
                                                    <div className="text-article">
                                                        <h4>{item.name}</h4>
                                                        <p>
                                                            {format(
                                                                parseFromTimeZone(
                                                                    item.published_at,
                                                                    {
                                                                        timeZone:
                                                                            'Asia/Bangkok',
                                                                    }
                                                                ),
                                                                'dd MMM yyyy'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    );
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

ContentSection.getInitialProps = async () => ({
    namespacesRequired: ['Resource'],
});

// ContentSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default ContentSection;

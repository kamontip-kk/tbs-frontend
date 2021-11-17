// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Developer.json';
import en from '../../public/locales/en/Developer.json';
import axios from 'axios';
import appConfig from '../../appConfig';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

interface thumbnailsType {
    url: string;
    width: number;
    height: number;
}

interface videoType {
    title: string;
    thumbnails: {
        default: thumbnailsType;
        high: thumbnailsType;
        medium: thumbnailsType;
        standard: thumbnailsType;
    };
    resourceId: {
        kind: string;
        videoId: string;
    };
}

const SimpleIconSection = () => {
    const [playlist, setPlaylist] = useState<videoType[]>([]);
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    useEffect(() => {
        fetchVideo();
    }, []);

    const fetchVideo = async () => {
        const YOUTUBE_PLAYLIST_ITEMS_API =
            'https://www.googleapis.com/youtube/v3/playlistItems';
        const id = 'PL-GJzmQoXm4gx1QyWKwc8E34lVtNmCFPA';
        const endpoint = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${id}&key=${appConfig.YOUTUBE_API_KEY}&maxResults=50`;

        try {
            const chunkRes = await axios.get(endpoint);
            const playlist: videoType[] = [];
            chunkRes.data.items.map((item) => {
                const { title, thumbnails, resourceId } = item.snippet;
                playlist.push({ title, thumbnails, resourceId });
            });

            setPlaylist(playlist);
        } catch (error) {
            console.log(error);
        }
    };

    const renderVideo = () => {
        return playlist.map(({ resourceId, thumbnails, title }) => {
            return (
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="track_box apipage">
                        <div className="VdoPlay">
                            <img
                                className="lazyload thumbYoutube"
                                // data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/thumbImage.webp`}
                                data-src={`${thumbnails.medium.url}`}
                                alt="Image"
                            />
                            {/* <span className="lazyload">
                                <Image loader={myLoader} src="thumbImage.webp" alt="Image" width={100} height={100}/>
                            </span> */}
                            <Link href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                            <a
                                className="btnPlay"
                                target="_blank"
                            >
                                {/* <img
                                    className="lazyload thumbYoutube"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/play-button.svg`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/play-button.svg`} alt="Image" width={100} height={100}/>
                                </span>
                            </a>
                            </Link>
                        </div>
                        <p>วิดีโอสอนใช้งาน</p>
                        <h4>{title}</h4>
                    </div>
                </div>
            );
        });
    };

    return (
        <div
            className="hero_section v3 lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_11.png`}
        >
            <div className="container">
                <div className="row mt-80">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                        <div className="simple_icon_title dev-page edit_seo">
                            <h1 className="edit_text_seo">
                                คู่มือการใช้งาน Web Console
                            </h1>
                            <div className="row mt40-mb20 justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="track_box apipage">
                                        {/* <img
                                            className="lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-userManual02.svg`}
                                            alt="Image"
                                        /> */}
                                        <span className="lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-userManual02.svg`} alt="Image" width={100} height={100}/>
                                        </span>
                                        <p>
                                            {/* {t(
                      'SimpleIconSection::Thai Manual'
                    )} */}
                                            Web Console Manual
                                        </p>
                                        <h4>
                                            {t.SimpleIconSection['Thai Manual']}
                                        </h4>
                                        <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulkSMSApiManual.pdf`}>
                                        <a
                                            target="_blank"
                                        >
                                            {t.SimpleIconSection['[Download]']}
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 m-40">
                        <div className="simple_icon_title dev-page edit_seo">
                            <h2 className="edit_text_seo">วิดีโอสอนใช้งาน</h2>
                            <div className="row m-40 justify-content-start">
                                {renderVideo()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                        <div className="simple_icon_title dev-page edit_seo">
                            <h2 className="edit_text_seo">
                                ต้องการคู่มือ SMS API สำหรับนักพัฒนา?
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row" id="ex_sdk">
                    <div className="col-xl-12 btn-api-ref">
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}/`}>
                        <a
                            className="btn v3"
                            target="_blank"
                        >
                            ดูคู่มือ API
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['Developer'],
});

// SimpleIconSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };

export default SimpleIconSection;

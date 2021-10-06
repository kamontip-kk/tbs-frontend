import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="th">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com/"
                        crossOrigin="true"
                    />
                    <link
                        rel="preconnect"
                        href="https://cdnjs.cloudflare.com/"
                        crossOrigin="true"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com/"
                        crossOrigin="true"
                    />
                    <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/css/font.loader.min.css`} />

                    <link
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        rel="stylesheet"
                    />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.6.2/animate.min.css"
                        rel="stylesheet"
                    />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
                        rel="stylesheet"
                    />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.min.css"
                        rel="stylesheet"
                    />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
                        rel="stylesheet"
                    />
                    <link
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/css/nice-select.css`}
                        rel="stylesheet"
                    />
                    {/* <link
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/css/style.css`}
                        rel="stylesheet"
                    />
                    <link
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/css/responsive.css`}
                        rel="stylesheet"
                    /> */}
                    <link
                        rel="stylesheet"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/css/swiper-bundle.min.css`}
                    />
                    {/* <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/apple-icon-57x57.png`}
                    /> */}
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/apple-icon-60x60.png`}
                    />
                    {/* <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/apple-icon-72x72.png`}
                    /> */}
                    {/* <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/apple-icon-76x76.png`}
                    /> */}
                    {/* <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/apple-icon-114x114.png`}
                    /> */}
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/apple-icon-120x120.png`}
                    />
                    {/* <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/apple-icon-144x144.png`}
                    /> */}
                    {/* <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/apple-icon-152x152.png`}
                    /> */}
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/apple-icon-180x180.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/android-icon-192x192.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/favicon-32x32.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/favicon-96x96.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/favicon-16x16.png`}
                    />
                    <link
                        rel="manifest"
                        href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/manifest.json`}
                    />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta
                        name="msapplication-TileImage"
                        content={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img-fav/ms-icon-144x144.png`}
                    />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                        defer
                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
                    ></script>
                    <script
                        defer
                        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                    ></script>
                    {/* <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.0/js/jquery.nice-select.min.js"></script> */}
                    <script
                        defer
                        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                    ></script>
                    <script
                        defer
                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"
                    ></script>
                    <script
                        defer
                        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/plugins/bgset/ls.bgset.min.js"
                    ></script>
                    <script
                        defer
                        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js"
                    ></script>
                    <script
                        defer
                        src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/js/main.js`}
                    ></script>
                    <script
                        defer
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                        data-cf-beacon='{"token": "27b8dd9e1c1f41faab414c1a203fb227"}'
                    ></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;

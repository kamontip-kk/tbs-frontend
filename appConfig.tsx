export default {
    production: 'production',
    development: 'development',
    internalTest: 'internal_test',
    HOME_PAGE_URL: process.env.NEXT_PUBLIC_DOMAIN_URL || '',
    GTM_CODE: process.env.NEXT_PUBLIC_GTM_CODE || '',
    API_URL_SHOPPING: process.env.NEXT_PUBLIC_API_URL_SHOPPING || '',
    API_URL_ACCOUNT: process.env.NEXT_PUBLIC_API_URL_ACCOUNT || '',
    APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || 'development',
    WEB_URL_ACCOUNT: process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT || '',
    GOOGLE_RECAPTCHA_KEY: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY || '',

    facebookConversionTracking: {
        PIXEL_ID: process.env.NEXT_PUBLIC_PIXEL_ID || 'xxx',
        quickRegister: {
            confirmNumber: 'ConfirmNumber-RQ1',
            confirmPassword: 'ConfirmPassword-RQ2',
        },
    },

    API_URL_BLOG: process.env.NEXT_PUBLIC_API_URL_BLOG || '',
    WEB_URL_BLOG: process.env.NEXT_PUBLIC_WEB_URL_BLOG || '',
    YOUTUBE_API_KEY:
        process.env.YOUTUBE_API_KEY ||
        'AIzaSyB9y6ObszLFtRVkc0_JJkvSAX1OHMSAhgc',
};

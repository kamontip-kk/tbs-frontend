export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/condition`,
        type: 'website',
        title:
            'ผู้ให้บริการส่ง SMS อันดับ 1 ของไทย ด้วยประสบการณ์และคุณภาพในด้านบริการ | ThaiBulkSMS',
        description:
            'ผู้ให้บริการส่ง SMS อันดับ 1 ของไทย ด้วยประสบการณ์และคุณภาพในด้านบริการ',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Home.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/faq`,
    },
};

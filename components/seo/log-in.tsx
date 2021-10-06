export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/log-in`,
        type: 'website',
        title: 'เข้าสู่ระบบ บริการส่งข้อความด้วยระบบ | ThaiBulkSMS',
        description: '',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Home.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/log-in`,
    },
};

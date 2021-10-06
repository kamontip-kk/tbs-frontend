export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource`,
        type: 'website',
        title:
            'เพิ่มความรู้และข้อมูลที่สำคัญเกี่ยวกับ SMS และ Digital Marketing ให้คุณ | ThaiBulkSMS',
        description:
            'ความรู้เกี่ยวกับ SMS และ Digital Marketing ที่เรารวบรวมมาให้คุณ',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Home.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/resource`,
    },
};

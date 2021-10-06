export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/sms-alert`,
        type: 'website',
        title:
            'SMS Alert การส่งข้อความแบบ Notification แจ้งเตือนทุกข่าวสารสำคัญ',
        description:
            'การส่งข้อความ SMS Alert แจ้งเตือนข่าวสารที่สำคัญด้วย SMS เพื่อให้ผู้รับได้ทราบข้อมูลก่อนใคร ด้วยงประมาณที่กำหนดได้ ',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-LBS.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/sms-alert`,
    },
};

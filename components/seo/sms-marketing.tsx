export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/sms-marketing`,
        type: 'website',
        title: 'ส่งข้อความ SMS Marketing ตอบโจทย์ทุกจุดประสงค์ของการใช้งาน',
        description:
            'บริการส่งข้อความ SMS Marketing ลดต้นทุน ครอบคลุมทุกจุดประสงค์ในการทำการตลาด ด้วยราคาเริ่ม 0.21 บาท',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-LBS.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/sms-marketing`,
    },
};

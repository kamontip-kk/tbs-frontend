export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/sms-api`,
        type: 'website',
        title:
            'SMS API บริการ SMS เชื่อมต่อ API สำหรับ Developer | ThaiBulkSMS',
        description:
            'บริการ SMS API สำหรับ Developer เชื่อมต่อด้วยภาษาที่คุณเลือก ผ่านระบบ API ของ ThaiBulkSMS ปลอดภัย มั่นใจ เชื่อถือได้ เชื่อมต่อง่ายใน 5 นาที',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Home.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/sms-api`,
    },
};

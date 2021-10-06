export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/smart-sms-console`,
        type: 'website',
        title:
            'ส่งข้อความผ่านเว็บด้วยตนเอง ไม่ต้องผ่านตัวกลาง ด้วย Smart SMS Console | ThaiBulkSMS',
        description:
            'ส่งข้อความผ่านเว็บด้วยตนเอง ไม่ต้องผ่านตัวกลาง ด้วย Smart SMS Console',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Product-OTP.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/smart-sms-console`,
    },
};

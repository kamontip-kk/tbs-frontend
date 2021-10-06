export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/credit-calculation`,
        type: 'website',
        title:
            'บริการ OTP Ready-to-Use การส่งยืนยันตัวตนที่พร้อมใช้ทันที | ThaiBulkSMS',
        description:
            'บริการส่งข้อความยืนยันตัวตน OTP Ready-to-Use ที่พร้อมใช้ทันที ',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Product-OTP.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/credit-calculation`,
    },
};

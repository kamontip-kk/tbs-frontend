export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/condition`,
        type: 'website',
        title:
            'รวบรวมถามที่พบบ่อย เกี่ยวกับบริการ การเงิน ปัญหาเชิงเทคนิคและอื่น ๆ | ThaiBulkSMS',
        description:
            'รวบรวมถามที่พบบ่อย เกี่ยวกับบริการ การเงิน ปัญหาเชิงเทคนิคและอื่น ๆ',
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

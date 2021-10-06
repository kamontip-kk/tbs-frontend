export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/global-sms`,
        type: 'website',
        title: 'บริการส่งข้อความไปยังต่างประเทศกว่า 200 ประเทศทั่วโลก',
        description:
            'บริการส่งข้อความไปยังต่างประเทศได้มากกว่า 200 ประเทศทั่วโลก สามารถส่งได้ทุกเครือข่าย พร้อมให้คำปรึกษาโดยผู้เชี่ยวชาญตลอด 24/7',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Global-SMS.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/global-sms`,
    },
};

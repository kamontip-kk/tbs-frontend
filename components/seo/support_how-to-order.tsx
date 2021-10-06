export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/support/how-to-order`,
        type: 'website',
        title:
            'ช่องทางและขั้นตอนง่าย ๆ ในการซื้อเครดิตเพื่อส่งข้อความ | ThaiBulkSMS',
        description:
            'ชำระเงินได้หลากหลายช่องทาง พร้อมอธิบายขั้นตอนการซื้อเครดิตส่งข้อความง่าย ๆ ที่คุณสามารถสั่งซื้อได้ด้วยตนเอง ภายใน 5 นาที',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Home.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/support/how-to-order`,
    },
};

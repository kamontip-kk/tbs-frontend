export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/reseller`,
        type: 'website',
        title:
            'บริการสำหรับผู้ค้าปลีก สนใจเป็นตัวแทนจำหน่าย SMS กับเรา ได้ในราคาดีกว่าหน้าเว็บ',
        description:
            'บริการสำหรับผู้ค้าปลีก สนใจเป็นตัวแทนจำหน่าย SMS กับเรา ได้ในราคาสุดพิเศษ และข้อเสนอต่าง ๆ มีให้อย่างไม่จำกัด',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Reseller.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/reseller`,
    },
};

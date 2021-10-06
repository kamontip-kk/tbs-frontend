export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/contact`,
        type: 'website',
        title: 'ช่องทางติดต่อทีมงาน | ThaiBulkSMS',
        description:
            'หากคุณมีข้อสงสัยเกี่ยวกับผลิตภัณฑ์ แพ็กเกจ หรือมีปัญหาการส่ง SMS สามารถติดต่อเราได้ทันที เราพร้อมให้คำแนะนำและดูแลคุณ',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Map.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/contact`,
    },
};

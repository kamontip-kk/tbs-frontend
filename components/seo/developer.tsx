export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/developer`,
        type: 'website',
        title:
            'รวมข้อมูลและคู่มือที่จะทำให้ Developer เริ่มต้นใช้งาน API ได้รวดเร็วยิ่งขึ้น | ThaiBulkSMS',
        description:
            'รวบรวมคู่มือที่เป็นประโยชน์สำหรับนักพัฒนา เพื่อเป็นแนวทางในการเขียนโปรแกรม',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Home.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/developer`,
    },
};

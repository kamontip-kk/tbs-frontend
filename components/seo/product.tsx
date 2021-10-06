export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product`,
        type: 'website',
        title: 'บริการส่ง SMS โปรแกรมส่ง SMS ออนไลน์ผ่านเว็บ | ThaiBulkSMS',
        description:
            'บริการส่ง SMS ราคาถูกเพียง 0.21 บาท โปรแกรมส่ง SMS ออนไลน์ด้วยระบบส่ง SMS ผ่านเว็บ ราคาสุดคุ้มค่าทุกการใช้งาน - ทดลองส่งข้อความ 20 เครดิต',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Product.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product`,
    },
};

export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/location-based-sms`,
        type: 'website',
        title: 'บริการ Location Based Service ส่งข้อความระบุสถานที่',
        description:
            'ส่ง SMS แบบระบุพื้นที่ (LBS) ไม่จำเป็นต้องมีหมายเลขโทรศัพท์ สามารถส่งได้ตามจุดพื้นที่สำคัญต่าง ๆ หรือกำหนดพื้นที่ที่ต้องการได้เอง',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-LBS.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/location-based-sms`,
    },
};

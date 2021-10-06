export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/sms-tracking`,
        type: 'website',
        title:
            'วัดผลและติดตามสถานะการเปิดอ่านด้วยบริการ SMS Tracking | ThaiBulkSMS',
        description:
            'ติดตามสถานะและวัดผลการเปิดอ่านรายบุคคล สามารถดูรายงานได้หลังจากการส่งทันที ลดต้นทุนและวัดผลได้อย่างแม่นยำ',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Product-smsTrack.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/sms-tracking`,
    },
};

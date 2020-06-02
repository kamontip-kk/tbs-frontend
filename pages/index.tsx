import React from 'react';
import Layout from '../components/Layout';
// import Proloader from '../components/Proloader';
import HeroSection from '../components/home/HeroSection';
import PartnerSection from '../components/home/PartnerSection';
import FeatureSection from '../components/home/FeatureSection';
import SimpleSliderSection from '../components/home/SimpleSliderSection';
import GlobeSection from '../components/home/GlobeSection';
import SmsSection from '../components/home/SmsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import EduSection from '../components/home/EduSection';
import CtaSection from '../components/home/CtaSection';
import BacktoTop from '../components/BacktoTop';
import Head from 'next/head';
const Homepage = () => (
  <React.Fragment>
    <Layout>
      <Head>
        <title>
          ส่ง SMS เข้ามือถือฟรี 20 ข้อความ, ส่ง SMS จากเว็บ, ส่ง SMS ด้วย API,
          บริการ SMS Solutions, Mobile Marketing Solutions - ThaiBulkSMS.COM
        </title>
        <meta
          name="description"
          content="บริการส่ง SMS จากเว็บถึงมือถือ เพื่อการตลาด, CRM, ประชาสัมพันธ์ สมัครทดลองฟรีวันนี้ ง่ายนิดเดียว มีบริการให้คำแนะนำฟรี พร้อมทั้งบริการพัฒนาแอปพลิเคชั่นเฉพาะคุณ ส่งได้ทุกค่ายทั้ง AIS DTAC TrueMove Truemove-H"
        />
        <meta
          name="keywords"
          content="free,sms,gateway,website,mobile,phone,online,text,message,messages,thailand,aggregator,thai,server,service,services,providers,shortcodes,ส่ง,ฟรี,gsm,ขาย,ถูก,2g,3g,4g,messaging,,ais,api,bulk,advertising,pricing,price,reseller,software,solutions,campaignscoporate,broadcast,direct,dtac,truemove,hutch,cdma,net,ads,ราคา,promotion,การตลาด,ธุรกิจ,เครือข่าย,เว็บ,โฆษณา,โทรศัพท์เคลื่อนที่,โทรศัพท์มือถือ,ข้อความ,ข้อความสั้น,สตางค์,หารายได้ออนไลน์,ออนไลน์"
        />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:url" content="https://d1vb0eqohs6ps7.cloudfront.net/" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="บริการส่ง SMS จากเว็บถึงมือถือ เพื่อการตลาด, CRM, ประชาสัมพันธ์ สมัครทดลองฟรีวันนี้ ง่ายนิดเดียว มีบริการให้คำแนะนำฟรี พร้อมทั้งบริการพัฒนาแอปพลิเคชั่นเฉพาะคุณ ส่งได้ทุกค่ายทั้ง AIS DTAC TrueMove Truemove-Hทรงพลังที่สุด! Ferrari SF90 Stradale เปิดตัวครั้งแรกในไทย เคาะราคา 40.9 ล้าน"
        />
        <meta
          property="og:description"
          content="บริการส่ง SMS จากเว็บถึงมือถือ เพื่อการตลาด, CRM, ประชาสัมพันธ์ สมัครทดลองฟรีวันนี้ ง่ายนิดเดียว มีบริการให้คำแนะนำฟรี พร้อมทั้งบริการพัฒนาแอปพลิเคชั่นเฉพาะคุณ ส่งได้ทุกค่ายทั้ง AIS DTAC TrueMove Truemove-H"
        />
        <meta property="og:image" content="https://d1vb0eqohs6ps7.cloudfront.net/img/demoog.jpg" />
        <meta property="og:site_name" content="https://thaibulksms.com" />
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:domain" content="" />
      </Head>
      {/* <Proloader /> */}
      <div className="page_wrapper">
        <HeroSection />
        <PartnerSection />
        <FeatureSection />
        <SimpleSliderSection />
        <GlobeSection />
        <SmsSection />
        <TestimonialSection />
        <EduSection />
        <CtaSection />
      </div>
      <BacktoTop />
    </Layout>
  </React.Fragment>
);
export default Homepage;

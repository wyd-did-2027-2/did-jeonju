import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
//import Popup from "@/components/popup";
import BackToTop from "@/components/ui/back-to-top";

import SliderSection from "@/components/pages/slide-section";
import CalendarSection from "@/components/pages/calendar-section";
import YoutubeSection from "@/components/pages/youtube-section";
import NoticeSection from "@/components/pages/notice-section";
import SiteSection from "@/components/pages/site-section";
import FaqSection from "@/components/pages/faq-section";

import {
  getCalendarData,
  getNoticeData,
  getYoutubeData,
  getFaqData,
  getSiteData,
} from "@/lib/notion";

export const revalidate = 60;

export default async function Home() {
  const [calendarItems, noticeItems, youtubeItems, faqItems, siteItems] =
    await Promise.all([
      getCalendarData(),
      getNoticeData(),
      getYoutubeData(),
      getFaqData(),
      getSiteData(),
    ]);

  return (
    <>
      <Header />
      <main className="pt-20">
        <SliderSection />
        <CalendarSection items={calendarItems} />
        <NoticeSection items={noticeItems} />
        <YoutubeSection items={youtubeItems} />
        <SiteSection items={siteItems} />
        <FaqSection items={faqItems} />
      </main>
      <Footer />
      {/* <Popup /> */}
      <BackToTop />
    </>
  );
}

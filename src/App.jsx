import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Phone, Heart, Gift, Clock, Music, Users, Star, ArrowRight, ChevronRight, Youtube } from 'lucide-react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [subscriberCount, setSubscriberCount] = useState(null);

  // Countdown timer logic to May 11, 2026
  useEffect(() => {
    const weddingDate = new Date('2026-05-11T12:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch YouTube subscriber count
  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        const handle = 'Rasin_Raja';

        // First, search for the channel to get channel ID
        const searchResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=@${handle}&type=channel&key=${apiKey}`
        );
        const searchData = await searchResponse.json();

        if (searchData.items && searchData.items.length > 0) {
          const channelId = searchData.items[0].snippet.channelId;

          // Now get channel statistics
          const statsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
          );
          const statsData = await statsResponse.json();

          if (statsData.items && statsData.items.length > 0) {
            const count = parseInt(statsData.items[0].statistics.subscriberCount);
            setSubscriberCount(count.toLocaleString()); // Format with commas
          }
        }
      } catch (error) {
        console.error('Error fetching subscriber count:', error);
        setSubscriberCount('N/A');
      }
    };

    fetchSubscriberCount();
  }, []);

  const events = [
    {
      id: 1,
      title: "આભાર સ્તુતિ",
      date: "૭ મે, ૨૦૨૬",
      time: "સાંજે ૪:૦૦ કલાકે",
      description: "ઈશ્વર પિતાનો આભાર માનવા માટે વિશેષ પ્રાર્થના સભા.",
      image: "https://8pabeskigkdlhl8c.public.blob.vercel-storage.com/abhar.jpeg"
    },
    {
      id: 2,
      title: "ગામના માંડવા",
      date: "૭ મે, ૨૦૨૬",
      time: "સાંજે ૬:૦૦ કલાકે",
      description: "ગામના રીતિ-રિવાજ મુજબ માંડવા મુહૂર્ત અને પ્રીતિભોજન.",
      image: "https://8pabeskigkdlhl8c.public.blob.vercel-storage.com/mandap.jpeg"
    },
    {
      id: 3,
      title: "મહેમાનોનું સ્વાગત",
      date: "૮ મે, ૨૦૨૬",
      time: "સવારે ૧૦:૦૦ કલાકે",
      description: "દૂર-સૂદૂરથી પધારેલા વ્હાલા મહેમાનોનું ભાવભીનું સ્વાગત.",
      image: "https://8pabeskigkdlhl8c.public.blob.vercel-storage.com/guste.webp"
    },
    {
      id: 4,
      title: "રાસ ગરબા",
      date: "૮  મે, ૨૦૨૬",
      time: "સાંજે ૫:૦૦ કલાકે",
      description: "પરંપરાગત રાસ-ગરબાની ઉત્સાહી ઉજવણી.",
      image: "https://8pabeskigkdlhl8c.public.blob.vercel-storage.com/garba.webp"
    },
    {
      id: 5,
      title: "લગ્ન વિધિ",
      date: "૧૧ મે, ૨૦૨૬",
      time: "બપોરે ૧૨:૦૦ કલાકે",
      description: "C.N.I સંત યાકુબ ચર્ચ ખાતે પવિત્ર લગ્ન સંસ્કાર વિધિ.",
      image: "https://8pabeskigkdlhl8c.public.blob.vercel-storage.com/wedding.jpg"
    }
  ];

  const venue = {
    image: "https://8pabeskigkdlhl8c.public.blob.vercel-storage.com/Screenshot%202026-03-26%20003825-Hh4u3ByrCQBCjxfuzhTkk1M5oGwltW.png",
    titleOnImage: "C.N.I સંત યાકુબ ચર્ચ - વાઘપુર",
    description: "ઈશ્વર સમક્ષ પવિત્ર લગ્ન વિધિ અહીં યોજાશે.",
    mapEmbed: "https://www.google.com/maps?q=23.6678129%2C73.4112721&z=17&t=k&output=embed",
    mapsLink:
      "https://www.google.com/maps/place/C.N.I+St.+James+Church,+Vaghpur/@23.6676699,73.4117187,17z/data=!4m14!1m7!3m6!1s0x395d8ba107a4b0b1:0x5f3a1d21bf74a7f1!2sC.N.I+St.+James+Church,+Vaghpur!8m2!3d23.6678129!4d73.4112721!16s%2Fg%2F11h7_rvqsl!3m5!1s0x395d8ba107a4b0b1:0x5f3a1d21bf74a7f1!8m2!3d23.6678129!4d73.4112721!16s%2Fg%2F11h7_rvqsl!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
  };

  const families = [
    {
      side: "વર પક્ષ (લુસડિયા)",
      parents: "શ્રીમતી ભારતીબેન તથા શ્રી રેઉએલભાઈ તિમોથીભાઈ સુવેરા",
      phone: "+91 9879037998",
      image: "https://8pabeskigkdlhl8c.public.blob.vercel-storage.com/groom_parents.webp"
    },
    {
      side: "કન્યા પક્ષ (વાઘપુર)",
      parents: "શ્રીમતી વોલેન્ટીનાબેન તથા શ્રી હેમંતસન વાલજીભાઈ વરસાત",
      phone: "+91 7984045642",
      image: "https://8pabeskigkdlhl8c.public.blob.vercel-storage.com/bride_parents.webp"
    }
  ];

  const homeLocations = [
    {
      title: "વરનું ઘર",
      subtitle: "લુસડિયા",
      description: "વરનું પરિવાર અહીં નિવાસ કરે છે.",
      image: "https://8pabeskigkdlhl8c.public.blob.vercel-storage.com/groom-home.webp",
      mapEmbed: "https://www.google.com/maps?q=23.695391,73.438645&z=17&t=k&output=embed",
      mapsLink: "https://www.google.com/maps?q=23.695391,73.438645&entry=gps&g_ep=CAESBzI2LjEyLjUYACCenQoqpgEsOTQyNTk1NTEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc1NywxMDA3OTY1MzUsOTQyODQ0ODEsOTQyODA1NzYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksOTQyNjI3MzMsMTAwNzk2MTg2QgJJTg%3D%3D&skid=969f89a4-0917-40f8-a0fb-0ba259923e7b&shorturl=1"
    },
    {
      title: "કન્યાનું ઘર",
      subtitle: "વાઘપુર",
      description: "કન્યાનું પરિવાર અહીં નિવાસ કરે છે.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=320&fit=crop",
      mapEmbed: "https://www.google.com/maps?q=23.695391,73.4360701&z=17&t=k&output=embed",
      mapsLink: "https://www.google.com/maps/place/23.666861,73.415263/data=!4m6!3m5!1s0!7e2!8m2!3d23.6668611!4d73.41526329999999!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjExLjYYACD67A0qqAEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc1NywxMDA3OTU2MjEsMTAwNzk2NTM1LDk0Mjg0NDY5LDk0MjgwNTc2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE4NjUzLDk0MjI5ODM5LDk0Mjc1MTY4LDk0Mjc5NjE5LDEwMDc5OTI1MSwxMDA3OTYxODZCAklO&skid=2b16b311-d91e-40e1-a844-146cd95a6cb5"
    }
  ];

  const couplePhoto = "https://8pabeskigkdlhl8c.public.blob.vercel-storage.com/couple-photo.webp";

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] overflow-x-hidden font-sans selection:bg-[#E89F95] selection:text-white">
      {/* Dynamic Font and Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Gujarati:wght@400;700;900&family=Noto+Sans+Gujarati:wght@300;400;600&display=swap');
        
        .font-serif-gujarati { font-family: 'Noto Serif Gujarati', serif; }
        .font-sans-gujarati { font-family: 'Noto Sans Gujarati', sans-serif; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-up { animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(156, 169, 134, 0.15);
        }

        .hero-gradient {
          background: radial-gradient(circle at center, rgba(232, 159, 149, 0.05) 0%, transparent 70%);
        }
      `}} />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${couplePhoto}')`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Decorative Floating Blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#9CA986] rounded-full mix-blend-multiply filter blur-[80px] opacity-10 animate-float"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[30vw] h-[30vw] bg-[#E89F95] rounded-full mix-blend-multiply filter blur-[60px] opacity-10 animate-float" style={{animationDelay: '1s'}}></div>

        <div className="z-10 text-center animate-fade-up w-full max-w-4xl">
          
          <h1 className="font-serif-gujarati text-6xl md:text-8xl lg:text-9xl text-white mb-8 font-black leading-tight drop-shadow-2xl">
            રસીન <br className="md:hidden" />
            <span className="text-4xl md:text-6xl text-[#E89F95] align-middle px-4"> સંગ </span> 
            સૃષ્ટિ
          </h1>

          <p className="text-lg md:text-2xl text-white mb-12 font-sans-gujarati max-w-2xl mx-auto leading-relaxed px-4 drop-shadow-lg">
          પ્રેમ અને સ્નેહના પવિત્ર બંધનમાં બંધાઈ, અમે જીવનના નવા અધ્યાયની શરૂઆત કરી રહ્યા છીએ...
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto px-2">
            {[
              { label: 'દિવસ', value: timeLeft.days },
              { label: 'કલાક', value: timeLeft.hours },
              { label: 'મિનિટ', value: timeLeft.minutes },
              { label: 'સેકન્ડ', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-3xl p-4 md:p-8 flex flex-col items-center shadow-sm border-white/50">
                <span className="font-serif-gujarati text-3xl md:text-6xl text-[#ffffff] font-bold mb-1">{item.value}</span>
                <span className="text-[20px] md:text-3xl text-[#000000] font-bold uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invitation Narrative */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="flex justify-center mb-10">
            <div className="w-16 h-[1px] bg-[#E5E0D8] self-center"></div>
            <Heart className="w-8 h-8 text-[#E89F95] mx-6" />
            <div className="w-16 h-[1px] bg-[#E5E0D8] self-center"></div>
          </div>

          <h2 className="font-serif-gujarati text-3xl md:text-5xl text-[#4A4A4A] mb-12 font-bold">પ્રભુના આશીર્વાદથી જોડાતી જીવનસફર</h2>
          
          <div className="font-sans-gujarati text-lg md:text-2xl leading-[2] text-[#666666] space-y-8 px-4">
            <p>
              સહર્ષ જણાવવાનું કે ઈશ્વર પિતાની અસીમ કૃપાથી લુસડિયા નિવાસી <br className="hidden md:block"/>
              <span className="text-[#4A4A4A] font-bold">શ્રીમતી ભારતીબેન તથા શ્રી રેઉએલભાઈ તિમોથીભાઈ સુવેરા</span> ના સુપુત્ર
            </p>
            <p className="text-4xl md:text-6xl text-[#9CA986] font-serif-gujarati font-black py-4">રસીન</p>
            <p className="text-[#E89F95] italic text-xl">ના લગ્ન</p>
            <p>
              વાઘપુર નિવાસી <br className="hidden md:block"/>
              <span className="text-[#4A4A4A] font-bold">શ્રીમતી વોલેન્ટીનાબેન તથા શ્રી હેમંતસન વાલજીભાઈ વરસાત</span> ની સુપુત્રી
            </p>
            <p className="text-4xl md:text-6xl text-[#9CA986] font-serif-gujarati font-black py-4">સૃષ્ટિ</p>
            <p className="mt-12 pt-10 border-t border-[#F5F1EB]">
              તારીખ ૧૧-૫-૨૦૨૬, સોમવારના રોજ બપોરે ૧૨:૦૦ કલાકે <br className="hidden md:block"/>
              પ્રભુની કૃપાથી લગ્ન સમારોહ યોજાયેલ છે.<br className="hidden md:block"/>
              આપની ઉપસ્થિતિ અમને આનંદ અને આશીર્વાદ આપશે.
            </p>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-24 px-4 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif-gujarati text-4xl md:text-6xl text-[#4A4A4A] font-bold">આનંદના પ્રસંગો</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <div key={idx} className="group glass-card overflow-hidden rounded-[40px] shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 border-white/80">
                {event.image && (
                  <div className="relative h-44 overflow-hidden rounded-t-[32px]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="font-serif-gujarati text-white text-xl md:text-2xl font-bold drop-shadow-md">{event.title}</span>
                    </div>
                  </div>
                )}
                <div className="p-8">
                  {!event.image && <h3 className="font-serif-gujarati text-3xl md:text-4xl text-[#4A4A4A] font-bold mb-6">{event.title}</h3>}
                  <div className="space-y-3 font-sans-gujarati text-[#7D7D7D] text-lg md:text-xl">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[#E89F95] shrink-0" />
                      <span className="font-semibold text-[#4A4A4A]">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#9CA986] shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="mt-6 pt-6 border-t border-[#E5E0D8] text-[#666666] font-sans-gujarati leading-relaxed text-lg md:text-xl">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif-gujarati text-4xl md:text-6xl text-[#4A4A4A] font-bold">લગ્ન સ્થળ</h2>
          </div>
          <div className="group glass-card overflow-hidden rounded-[40px] shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 border-white/80 max-w-4xl mx-auto">
            <div className="relative h-44 overflow-hidden rounded-t-[32px]">
              <img
                src={venue.image}
                alt={venue.titleOnImage}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="font-serif-gujarati text-white text-xl md:text-2xl font-bold drop-shadow-md">
                  {venue.titleOnImage}
                </span>
              </div>
            </div>
            <div className="p-8">
                {venue.description}
              <div className="rounded-[24px] overflow-hidden border-8 border-[#FDFBF7] h-[380px] md:h-[440px] mt-8">
                <iframe
                  src={venue.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="લગ્ન સ્થળ નકશો"
                />
              </div>
              <div className="pt-8">
                <a
                  href={venue.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#4A4A4A] text-white px-10 py-5 rounded-full font-bold hover:bg-[#333333] transition-all hover:gap-5"
                >
                  મેપ પર રસ્તો જુઓ
                  <ArrowRight className="w-5 h-5 text-[#9CA986]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Groom & Bride Home Locations */}
      {homeLocations.map((loc, idx) => (
        <section key={idx} className={`py-24 px-4 ${idx % 2 === 0 ? 'bg-[#FDFBF7]' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-serif-gujarati text-4xl md:text-6xl text-[#4A4A4A] font-bold">{loc.title}</h2>
            </div>
            <div className="group glass-card overflow-hidden rounded-[40px] shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 border-white/80 max-w-4xl mx-auto">
              <div className="relative h-44 overflow-hidden rounded-t-[32px]">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="font-serif-gujarati text-white text-xl md:text-2xl font-bold drop-shadow-md">
                    {loc.subtitle}
                  </span>
                </div>
              </div>
              <div className="p-8">
                  {loc.description}
                <div className="rounded-[24px] overflow-hidden border-8 border-[#FDFBF7] h-[380px] md:h-[440px] mt-8">
                  <iframe
                    src={loc.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title={loc.title}
                  />
                </div>
                <div className="pt-8">
                  <a
                    href={loc.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-[#4A4A4A] text-white px-10 py-5 rounded-full font-bold hover:bg-[#333333] transition-all hover:gap-5"
                  >
                    મેપ પર રસ્તો જુઓ
                    <ArrowRight className="w-5 h-5 text-[#9CA986]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Family & Contact */}
      <section className="py-24 px-4 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {families.map((family, idx) => (
              <div key={idx} className="group glass-card overflow-hidden rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border-white/80">
                {family.image && (
                  <div className="relative h-48 overflow-hidden rounded-t-[32px]">
                    <img
                      src={family.image}
                      alt={family.side}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="font-serif-gujarati text-white text-xl md:text-2xl font-bold drop-shadow-md">{family.side}</span>
                    </div>
                  </div>
                )}
                <div className="p-10 text-center">
                  <h3 className="text-2xl font-serif-gujarati text-[#4A4A4A] font-bold mb-8 leading-snug">{family.parents}</h3>
                  <a href={`tel:${family.phone}`} className="inline-flex items-center gap-3 text-[#4A4A4A] font-bold hover:text-[#9CA986] transition-colors group">
                    <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:bg-[#9CA986] group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    {family.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-12 rounded-[50px] shadow-sm text-center border border-[#E5E0D8]">
            <p className="text-[#E89F95] font-bold text-sm tracking-widest mb-10 uppercase">નિમંત્રક / સ્નેહાધીન</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
              {["ફિલિસ આર. સુવેરા", "સેવિના એમ. કટારા", "મેહુલકુમાર કટારા", "ઇવાન્યા કટારા", "ઇર્વેન કટારા", "સમસ્ત પરિવાર"].map((name, i) => (
                <div key={i} className="font-serif-gujarati text-lg md:text-xl text-[#4A4A4A] font-bold">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gift Policy */}
      <section className="py-16 px-4 bg-[#9CA986] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Gift className="w-14 h-14 mx-auto mb-6 opacity-80" />
          <h3 className="font-serif-gujarati text-3xl font-bold mb-6">વિનંતી</h3>
          <p className="text-lg md:text-2xl font-sans-gujarati leading-relaxed opacity-90">
            ભેટ સ્વરૂપે વાસણ, કપડાં કે દાગીના લાવવા નહીં.<br className="hidden md:block"/> 
            આપની પ્રત્યક્ષ હાજરી એ જ અમારા માટે મોટી ભેટ છે.
          </p>
        </div>
      </section>

      {/* YouTube Subscribe Section */}
      <section className="py-16 px-4 bg-[#E89F95] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="https://www.youtube.com/@Rasin_Raja?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-col items-center gap-4 bg-white text-[#E89F95] px-12 py-10 rounded-[40px] font-bold hover:bg-gray-100 transition-all shadow-lg"
          >
            <Youtube className="w-12 h-12" />
            <div className="text-center">
              <p className="text-sm font-serif-gujarati mb-2">Subscribe to</p>
              <p className="text-3xl font-bold">@Rasin_Raja</p>
              {subscriberCount && (
                <p className="text-sm mt-3 opacity-75">Subscribers: {subscriberCount}</p>
              )}
            </div>
            <ArrowRight className="w-6 h-6 mt-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-[#4A4A4A] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center gap-2 mb-8">
            <Star className="w-4 h-4 text-[#9CA986] fill-[#9CA986]" />
            <Star className="w-4 h-4 text-[#E89F95] fill-[#E89F95]" />
            <Star className="w-4 h-4 text-[#9CA986] fill-[#9CA986]" />
          </div>
          <p className="font-serif-gujarati text-4xl font-black mb-4">રસીન & સૃષ્ટિ</p>
          <p className="text-[#9CA986] tracking-[0.4em] font-bold text-xs uppercase opacity-80 mb-10">૧૧ મે, ૨૦૨૬</p>
          <p className="text-white/40 text-sm font-sans">Made with Love for the Beautiful Couple</p>
        </div>
      </footer>
    </div>
  );
}

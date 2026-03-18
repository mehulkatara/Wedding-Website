import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Phone, Heart, Gift, Clock, Music, Users, Star, ArrowRight, ChevronRight } from 'lucide-react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  const events = [
    {
      id: 1,
      title: "આભાર સ્તુતિ",
      date: "7 મે, 2026",
      time: "સાંજે 4:00 કલાકે",
      description: "ઈશ્વર પિતાનો આભાર માનવા માટે વિશેષ પ્રાર્થના સભા.",
      image: "https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?w=600&h=320&fit=crop"
    },
    {
      id: 2,
      title: "ગામના માંડવા",
      date: "7 મે, 2026",
      time: "સાંજે 6:00 કલાકે",
      description: "ગામના રીતિ-રિવાજ મુજબ માંડવા મુહૂર્ત અને પ્રીતિભોજન.",
      image: "https://images.unsplash.com/photo-1744891471118-f74c0453cd21?w=600&h=320&fit=crop"
    },
    {
      id: 3,
      title: "મહેમાનોનું સ્વાગત",
      date: "8 મે, 2026",
      time: "સવારે 10:00 કલાકે",
      description: "દૂર-સૂદૂરથી પધારેલા વ્હાલા મહેમાનોનું ભાવભીનું સ્વાગત.",
      image: "https://images.unsplash.com/photo-1773020933590-6928ed151150?w=600&h=320&fit=crop"
    },
    {
      id: 4,
      title: "રાસ ગરબા",
      date: "9 મે, 2026",
      time: "સાંજે 5:00 કલાકે",
      description: "પરંપરાગત રાસ-ગરબાની ઉત્સાહી ઉજવણી.",
      image: "https://images.unsplash.com/photo-1655462100517-7d65e7ece006?w=600&h=320&fit=crop"
    },
    {
      id: 5,
      title: "લગ્ન વિધિ",
      date: "11 મે, 2026",
      time: "બપોરે 12:00 કલાકે",
      description: "C.N.I સંત યાકુબ ચર્ચ ખાતે પવિત્ર લગ્ન સંસ્કાર વિધિ.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=320&fit=crop"
    }
  ];

  const families = [
    {
      side: "વર પક્ષ (લુસડિયા)",
      parents: "શ્રીમતી ભારતીબેન તથા શ્રી રેઉએલભાઈ તિમોથીભાઈ સુવેરા",
      phone: "+91 98765 43210"
    },
    {
      side: "કન્યા પક્ષ (વાઘપુર)",
      parents: "શ્રીમતી વોલેન્ટિનાબેન તથા શ્રી હેમંતસન વાલજીભાઈ વરસાત",
      phone: "+91 98765 43211"
    }
  ];

  const homeLocations = [
    {
      title: "વરનું ઘર",
      subtitle: "લુસડિયા",
      address: "લુસડિયા, સાબરકાંઠા, ગુજરાત",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117565.41926618776!2d73.05!3d23.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4d29193108c9%3A0x6436bd3e55df583b!2sGujarat!5e0!3m2!1sen!2sin!4v1705646194723!5m2!1sen!2sin",
      mapsLink: "https://www.google.com/maps/search/Lusadiya+Sabarkantha+Gujarat"
    },
    {
      title: "કન્યાનું ઘર",
      subtitle: "વાઘપુર",
      address: "વાઘપુર, સાબરકાંઠા, ગુજરાત - ૩૮૩૦૦૧",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117565.41926618776!2d72.93!3d22.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4d29193108c9%3A0x6436bd3e55df583b!2sGujarat!5e0!3m2!1sen!2sin!4v1705646194723!5m2!1sen!2sin",
      mapsLink: "https://www.google.com/maps/search/Vagpur+Sabarkantha+Gujarat"
    }
  ];

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
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 hero-gradient overflow-hidden">
        {/* Decorative Floating Blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#9CA986] rounded-full mix-blend-multiply filter blur-[80px] opacity-10 animate-float"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[30vw] h-[30vw] bg-[#E89F95] rounded-full mix-blend-multiply filter blur-[60px] opacity-10 animate-float" style={{animationDelay: '1s'}}></div>

        <div className="z-10 text-center animate-fade-up w-full max-w-4xl">
          
          <h1 className="font-serif-gujarati text-6xl md:text-8xl lg:text-9xl text-[#4A4A4A] mb-8 font-black leading-tight">
            રસીન <br className="md:hidden" />
            <span className="text-4xl md:text-6xl text-[#E89F95] align-middle px-4"> સંગ </span> 
            સૃષ્ટિ
          </h1>

          <p className="text-lg md:text-2xl text-[#7D7D7D] mb-12 font-sans-gujarati max-w-2xl mx-auto leading-relaxed px-4">
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
                <span className="font-serif-gujarati text-3xl md:text-6xl text-[#9CA986] font-bold mb-1">{item.value}</span>
                <span className="text-[10px] md:text-sm text-[#7D7D7D] font-bold uppercase tracking-wider">{item.label}</span>
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
              <span className="text-[#4A4A4A] font-bold">શ્રીમતી ભારતીબેન તથા શ્રી રેઉએલભાઈ તિમોથીભાઈ સુવેરા</span> નો સુપુત્ર
            </p>
            <p className="text-4xl md:text-6xl text-[#9CA986] font-serif-gujarati font-black py-4">રસીન</p>
            <p className="text-[#E89F95] italic text-xl">ના લગ્ન</p>
            <p>
              વાઘપુર નિવાસી <br className="hidden md:block"/>
              <span className="text-[#4A4A4A] font-bold">શ્રીમતી વોલેન્ટિનાબેન તથા શ્રી હેમંતસન વાલજીભાઈ વરસાત</span> ની સુપુત્રી
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
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#FDFBF7] h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117565.41926618776!2d72.9304191!3d22.9545934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4d29193108c9%3A0x6436bd3e55df583b!2sGujarat!5e0!3m2!1sen!2sin!4v1705646194723!5m2!1sen!2sin" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Venue Map"
                ></iframe>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-10">
              <div className="inline-block p-4 bg-[#FDFBF7] rounded-3xl text-[#9CA986]">
                <MapPin className="w-8 h-8" />
              </div>
              <h2 className="font-serif-gujarati text-4xl md:text-5xl text-[#4A4A4A] font-bold">લગ્ન સ્થળ</h2>
              <div className="space-y-6 font-sans-gujarati">
                <p className="text-2xl text-[#4A4A4A] font-bold">C.N.I સંત યાકુબ ચર્ચ</p>
                <p className="text-xl text-[#7D7D7D] leading-relaxed">
                  વાઘપુર, સાબરકાંઠા<br />ગુજરાત - ૩૮૩૦૦૧
                </p>
                <div className="pt-8">
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" 
                     className="inline-flex items-center gap-3 bg-[#4A4A4A] text-white px-10 py-5 rounded-full font-bold hover:bg-[#333333] transition-all hover:gap-5">
                    મેપ પર રસ્તો જુઓ
                    <ArrowRight className="w-5 h-5 text-[#9CA986]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Groom & Bride Home Locations */}
      {homeLocations.map((loc, idx) => (
        <section key={idx} className={`py-24 px-4 ${idx % 2 === 0 ? 'bg-[#FDFBF7]' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto">
            <div className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#FDFBF7] h-[400px] md:h-[500px]">
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
              </div>
              <div className="w-full lg:w-1/2 space-y-10">
                <div className="inline-block p-4 bg-[#FDFBF7] rounded-3xl text-[#9CA986]">
                  <MapPin className="w-8 h-8" />
                </div>
                <h2 className="font-serif-gujarati text-4xl md:text-5xl text-[#4A4A4A] font-bold">{loc.title}</h2>
                <div className="space-y-6 font-sans-gujarati">
                  <p className="text-2xl text-[#9CA986] font-bold">{loc.subtitle}</p>
                  <p className="text-xl text-[#7D7D7D] leading-relaxed">
                    {loc.address}
                  </p>
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
          </div>
        </section>
      ))}

      {/* Family & Contact */}
      <section className="py-24 px-4 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {families.map((family, idx) => (
              <div key={idx} className="glass-card p-10 rounded-[40px] text-center border-white/60">
                <p className="text-[#9CA986] font-black tracking-widest text-xs uppercase mb-6">{family.side}</p>
                <h3 className="text-2xl font-serif-gujarati text-[#4A4A4A] font-bold mb-8 leading-snug">{family.parents}</h3>
                <a href={`tel:${family.phone}`} className="inline-flex items-center gap-3 text-[#4A4A4A] font-bold hover:text-[#9CA986] transition-colors group">
                  <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:bg-[#9CA986] group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  {family.phone}
                </a>
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

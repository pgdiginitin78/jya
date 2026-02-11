import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  YouTube,
} from "@mui/icons-material";
import { useRef } from "react";
import jyaLogo from "../../asset/JnanaYogAyuLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerRef = useRef(null);

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        .pulse-animate {
          animation: pulse 2s ease-in-out infinite;
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: white;
          border-radius: 2px;
        }

        .footer-link {
          position: relative;
          padding-left: 0;
          transition: padding-left 0.3s ease;
        }

        .footer-link::before {
          content: '→';
          position: absolute;
          left: -20px;
          opacity: 0;
          color: white;
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          padding-left: 20px;
        }

        .footer-link:hover::before {
          opacity: 1;
          left: 0;
        }
     
  .frosted-glass-footer {
  background: rgba(20, 83, 45, 0.65);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(22, 101, 52, 0.25); /* #166534 tone */
  transition: all 0.3s ease-in-out;
}

/* Optional gradient matte layer */
.frosted-glass-footer::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(20, 83, 45, 0.55),
    rgba(22, 101, 52, 0.45),
    rgba(54, 83, 20, 0.35)
  );
  z-index: -1;
  border-radius: inherit;
}

      `}</style>

      <footer
        ref={footerRef}
        className="relative overflow-hidden frosted-glass-footer "
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8b6f47] via-[#c9a86a] to-[#8b6f47]" />
        <div className="relative z-10 w-full  mx-auto  py-8 max-w-[95rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-white/80 to-white/60 p-6 md:p-8 rounded-2xl backdrop-blur-md border-2 border-[#8b6f47]/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-400">
                <div className="font-bold text-lg flex justify-center w-full">
                  <img src={jyaLogo} loading="lazy" className="w-28 h-34" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-['Cinzel'] text-white text-base font-bold mb-3 relative pb-2 footer-heading">
                Explore
              </h4>
              <div className="flex flex-col gap-2 text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/aboutUs" },
                  { label: "Privacy Policy", href: "/privacyAndPolicy" },
                  { label: "Terms & Conditions", href: "/" },
                ].map((link, index) => (
                  <Link
                    to={link.href}
                    key={index}
                    className="text-white/90 hover:text-white transition-all duration-300 footer-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-['Cinzel'] text-white text-base font-bold mb-3 relative pb-2 footer-heading">
                Contact
              </h4>
              <div className="flex flex-col gap-2.5 text-sm">
                <div className="flex gap-2 items-start text-white/90">
                  <Phone className="flex-shrink-0 text-white mt-0.5 text-base" />
                  <div>
                    <p className="font-medium text-xs mb-0.5">
                      WhatsApp <span className="font-normal">(8AM-6PM)</span>
                    </p>
                    <p className="text-xs">
                      +91 9272130399&nbsp;/&nbsp;+91 9272110399
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-center text-white/90">
                  <Phone className="flex-shrink-0 text-white text-base" />
                  <p className="text-xs">
                    Helpline: <span className="font-medium">24×7</span>{" "}
                    <span className="text-[10px]">(coming soon)</span>
                  </p>
                </div>

                <div className="flex gap-2 items-start text-white/90">
                  <Email className="flex-shrink-0 text-white mt-0.5 text-base" />
                  <a
                    href="mailto:swagrama.lavale@gmail.com"
                    className="hover:underline text-xs break-all"
                  >
                    swagrama.lavale@gmail.com
                  </a>
                </div>

                <div className="flex gap-2 items-start text-white/90">
                  <LocationOn className="flex-shrink-0 text-white mt-0.5 text-base" />
                  <div>
                    <p className="font-medium text-xs mb-1">
                      Community Village
                    </p>
                    <p className="text-xs leading-relaxed">
                      SwaGrama Ayurveda Yoga Nature Agro Tourism,Near Symbiosis
                      University Women's Medical College, Next to Lupin Company,
                      Symbiosis - Lavale Road, Near GaitvaGrama. Lavale – 412115
                      Tal - Mulshi Pune Maharashtra India
                    </p>
                    <a
                      href="https://maps.app.goo.gl/gUrwu5xSRZxVbyZw5#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c9a86a] hover:text-[#d4b87d] hover:underline text-[10px] mt-0.5 inline-block"
                    >
                      📍 View on Maps
                    </a>
                  </div>
                </div>

                <div className="flex gap-2 items-start text-white/90">
                  <LocationOn className="flex-shrink-0 text-white mt-0.5 text-base" />
                  <div>
                    <p className="font-medium text-xs mb-1">Office</p>
                    <a
                      href="https://www.google.com/maps/place/JnanaYogAyu+PVT.+LTD.,+Vd.+Santosh+Suryawanshi+JNANAYOGAYU+PVT.+LTD.+Ayurveda,+Yoga,+Homoeopathy+clinic+81%2F635,+Nandraj+Sankul,+1A-2,+Mani+Road,+Famous+Chowk,+New+Sangavi,+Pune,+Maharashtra+411027/data=!4m2!3m1!1s0x3bc2b9dff887ceab:0xbebf26c29918dafe?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjI2LjQYACDXggMqkAEsOTQyNjc3MjksOTQyNzUzMTcsOTQyMjMyOTksOTQyMTY0MTMsOTQyMTI0OTYsOTQyNzQ4ODIsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjVCAklO&skid=cba071a2-179f-45ca-a3e8-40b9b459df7f&g_st=awb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-xs leading-relaxed"
                    >
                      JnanaYogAyu, 81/635, Nandraj Sankul, 1 A - 2, Main Road,
                      Famous Chowk, New Sangavi, Pune, Maharashtra 411027
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-['Cinzel'] text-white text-base font-bold mb-3 relative pb-2 footer-heading">
                Connect With Us
              </h4>
              <div className="flex gap-2.5 mb-4">
                <a
                  href="https://www.instagram.com/swagramacommunity/?igsh=am9scG90bXd1ZW0y#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:bg-[#8b6f47] hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="text-white text-lg" />
                </a>
                <a
                  href="https://www.facebook.com/swagramacommunity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:bg-[#8b6f47] hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="text-white text-lg" />
                </a>
                <a
                  href="https://www.youtube.com/@swagramacommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:bg-[#8b6f47] hover:scale-110 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <YouTube className="text-white text-lg" />
                </a>
              </div>
              <div className="w-full h-[140px] rounded-lg overflow-hidden border border-white/20">
                <iframe
                  src="https://www.google.com/maps?q=Swagram%20Car%20Parking%20Lavale%20Maharashtra&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://www.google.com/maps/place/GPQ9%2BJW3+Swagram+Car+Parking,+Lavale,+Maharashtra+412115/data=!4m2!3m1!1s0x3bc2bd000a2c0069:0x10c6818ae0fd474e?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjM5LjcYACCenQoqkAEsOTQyNjc3MjcsOTQyOTIxOTEsOTQyODQ0OTAsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsNDcwODQzOTMsOTQyMTMyMDBCAklO&skid=087f7e10-b47a-456a-88bb-41de9d77bc78&g_st=awb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a86a] hover:text-[#d4b87d] hover:underline text-xs mt-2 inline-block"
              >
                📍 View Parking Location
              </a>
            </div>
          </div>
          <div className="text-center pt-4 border-t border-white/20 text-white/80 text-xs">
            <p>&copy; 2026 Swagrama Community. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

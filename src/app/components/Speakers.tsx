'use client';

import Image from "next/image";
// import Link from "next/link";

interface Speaker {
  id: number;
  image: string;
  name: string;
  institution: string;
  country: string;
  altText: string;
}

const speakersData: Speaker[] = [
  {
    id: 1,
    image: "/images/images/ashraf_Elmaraghy.jpg",
    name: "Ashraf A. Elmaraghy",
    institution: "Ain Shams University",
    country: "Egypt",
    altText: "Ashraf A. Elmaraghy",
  },
  {
    id: 2,
    image: "/images/images/antony_kalliath.jpg",
    name: "Antony Kalliath",
    institution: "Amala Institute of Medical Sciences",
    country: "India",
    altText: "Antony Kalliath",
  },
  {
    id: 3,
    image: "/images/images/abbas_Hajizade.jpg",
    name: "Abbas Hajizade",
    institution: "Imam Hossein University",
    country: "Iran",
    altText: "Abbas Hajizade",
  },
  {
    id: 4,
    image: "/images/images/zhang_xiao.webp",
    name: "Zhang Xiao",
    institution: "Chongqing Medical University",
    country: "China",
    altText: "Zhang Xiao",
  },
  {
    id: 5,
    image: "/images/images/gebeyehu_belay_gebremeskel.webp",
    name: "Gebeyehu Belay Gebremeskel",
    institution: "Bahir Dar University",
    country: "Ethiopia",
    altText: "Gebeyehu Belay Gebremeskel",
  },
  {
    id: 6,
    image: "/images/images/qiang_he.webp",
    name: "Qiang He",
    institution: "Northeastern University",
    country: "China",
    altText: "Qiang He",
  },
  {
    id: 7,
    image: "/images/images/abdeen_mustafa_omer.webp",
    name: "Abdeen Mustafa Omer",
    institution: "Energy Research Institute (ERI)",
    country: "United Kingdom",
    altText: "Abdeen Mustafa Omer",
  },
];


const Speakers = () => {
  return (
    <div className="speakers-section first-design">
      <div className="import_wrap">
        <div className="auto-container clearfix">
          <div className="row test-imp-row">
            <div
              className="col-md-12 session_wrap_style1 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              <h2>
                Our <span>Speakers 2025</span>
              </h2>
            </div>
          </div>

          <div className="">
            <div className="members-card-block">
              <div className="row-member row">
                {speakersData.map((speaker, index) => (
                  <div
                    className={`col-lg-3 col-md-6 col-sm-6 mb-4 ${index < 4
                      ? 'members-specific-space'
                      : 'member-spacing'
                      }`}
                    key={index}
                  >
                    <div className="card text-center p-3 border">
                      <div className="custom-border-wrapper">
                        <div className="image-wrapper mb-3">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            title={speaker.name}
                            width={200}
                            height={200}
                            className="rounded-circle img-fluid"
                          />
                        </div>
                      </div>
                      <div className="speaker-details normal-design">
                        <h3>{speaker.name}</h3>
                        <p>{speaker.institution}</p>
                        <p>{speaker.country}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="members-view-all-btn-block">
            <Link
              href="/committee"
              title="View All"
              className="view-more-speakers-btn"
            >
              View All
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Speakers;

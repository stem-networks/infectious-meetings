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

const membersData: Speaker[] = [
  {
    id: 1,
    image: "/images/images/Francis.webp",
    name: "Francis J Castellino",
    institution: "University of Notre Dame",
    country: "United States",
    altText: "Francis J Castellino",
  },
  {
    id: 2,
    image: "/images/images/Joel.webp",
    name: "Joel Rey U Acob",
    institution: "Visayas State University",
    country: "Philippines",
    altText: "Joel Rey U Acob",
  },
  {
    id: 3,
    image: "/images/images/Uqbah.jpg",
    name: "Uqbah Iqbal",
    institution: "National University of Malaysia",
    country: "Malaysia",
    altText: "Uqbah Iqbal",
  },
  {
    id: 4,
    image: "/images/images/andrea.webp",
    name: "Andrea Werdecker",
    institution: "Federal Institute for Population Research",
    country: "Germany",
    altText: "Andrea Werdecker",
  },
  {
    id: 5,
    image: "/images/images/Sergey.webp",
    name: "Sergey Suchkov",
    institution: "National Center for Human Photosynthesis",
    country: "Mexico",
    altText: "Sergey Suchkov",
  },
  {
    id: 6,
    image: "/images/images/rosa_lelyana.webp",
    name: "Rosa Lelyana",
    institution: "Diponegoro University",
    country: "Indonesia",
    altText: "Rosa Lelyana",
  },
];

const Members = () => {
  return (
    <div className="speakers-sections members-main-block">
      <div className="import_wrap import-wrapping">
        <div className="auto-container clearfix">
          <div className="row test-imp-row">
            <div className="col-md-12 session_wrap_style1 wow fadeInUp" data-wow-delay="200ms"
              data-wow-duration="1000ms">
              <h2>Our <span>Planning Committee 2025</span></h2>

            </div>
          </div>

          <section className="blog">
            {/* <!-- container Start--> */}
            <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
              <div className="col-md-12 col-12">
                <div className="grid-main-members-gap">
                  {membersData.map((member, index) => (
                    <div
                      key={index}
                      className={`each-member-gap ${index >= 3 ? 'member-row-gap' : ''}`}
                    >
                      <div className="grid-res-gap member-resp-gap">
                        <div className="grid-res-item">
                          <Image
                            src={member.image}
                            alt={member.name}
                            title={member.name}
                            width={200}
                            height={200}
                            className="rounded-circle img-fluid"
                          />
                        </div>
                        <div className="inner-content">
                          <h3>{member.name}</h3>
                          <p className="members-p1 member-country">{member.country}</p>
                          <p className="members-p1">{member.institution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* <div className='members-view-all-btn-block'>
            <Link href='/members' title="View All" className="view-more-speakers-btn">View All</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Members;

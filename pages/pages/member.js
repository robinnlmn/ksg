import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

function Member() {
  const member = [
    {
      img: "allon",
      name: "ALLON",
      title: "Management",
    },
    {
      img: "bene",
      name: "BENE",
      title: "Design",
    },
    {
      img: "felix",
      name: "FELIX",
      title: "Management",
    },
    {
      img: "henrik",
      name: "HENRIK",
      title: "Media",
    },
    {
      img: "joni",
      name: "JONA¥A",
      title: "Producer",
    },
    {
      img: "kyran",
      name: "KA¥",
      title: "Media",
    },
    {
      img: "ody",
      name: "OD¥",
      title: "Producer",
    },
    {
      img: "yang",
      name: "¥ANG",
      title: "Design",
    },
  ];

  return (
    <div className={styles.Member}>
      <div className={styles.membercontainer}>
        {member.map((member, index) => (
          <a
            className={styles.member}
            key={index}
            href={`/members/${member.img}`}
          >
            <Image
              src={"/images/member/" + member.img + ".jpg"}
              alt="Member"
              className={styles.memberimage}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              // onClick={(window.location = `/members/${member.img}`)}
            />
            <div className={styles.memberinfocontainer}>
              <div className={styles.membernamecontainer}>
                <p className={styles.membername}>{member.name}</p>
                <p className={styles.membertitle}>{member.title}</p>
              </div>

              {/* <a href={`/members/${member.img}`}>&rarr;</a> */}
            </div>
          </a>
        ))}

        {/* <div className={styles.member}>
          <img
            src="/images/member/default.jpg"
            alt="Member"
            className={styles.memberimage}
          />
          <p>A Member</p>
        </div>
        <div className={styles.member}>
          <img
            src="/images/member/default.jpg"
            alt="Member"
            className={styles.memberimage}
          />
          <p>A Member</p>
        </div>
        <div className={styles.member}>
          <img
            src="/images/member/default.jpg"
            alt="Member"
            className={styles.memberimage}
          />
          <p>A Member</p>
        </div>
        <div className={styles.member}>
          <img
            src="/images/member/default.jpg"
            alt="Member"
            className={styles.memberimage}
          />
          <p>A Member</p>
        </div>
        <div className={styles.member}>
          <img
            src="/images/member/default.jpg"
            alt="Member"
            className={styles.memberimage}
          />
          <p>A Member</p>
        </div>
        <div className={styles.member}>
          <img
            src="/images/member/default.jpg"
            alt="Member"
            className={styles.memberimage}
          />
          <p>A Member</p>
        </div>
        <div className={styles.member}>
          <img
            src="/images/member/default.jpg"
            alt="Member"
            className={styles.memberimage}
          />
          <p>A Member</p>
        </div> */}
      </div>
    </div>
  );
}

export default Member;

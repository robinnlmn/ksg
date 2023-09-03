import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

function Member() {
  const member = [
    {
      img: "allon",
      name: "Allon Kirma",
      title: "Management",
    },
    {
      img: "bene",
      name: "Benedikt Krumme",
      title: "Design",
    },
    {
      img: "felix",
      name: "Felix Rufus",
      title: "Management",
    },
    {
      img: "henrik",
      name: "Henrik Lehmann",
      title: "Media",
    },
    {
      img: "joni",
      name: "Jonathan KA WIE",
      title: "Producer",
    },
    {
      img: "kyran",
      name: "Kyran El-Bozo",
      title: "Media",
    },
    {
      img: "ody",
      name: "Odysseus Tessmann",
      title: "Producer",
    },
    {
      img: "yang",
      name: "Yang Peduto",
      title: "Design",
    },
  ];

  return (
    <div className={styles.Member}>
      <div className={styles.membercontainer}>
        {member.map((member, index) => (
          <div className={styles.member}>
            <img
              src={"/images/member/" + member.img + ".jpg"}
              alt="Member"
              className={styles.memberimage}
            />
            <p className={styles.membername}>{member.name}</p>
            <p className={styles.membertitle}>{member.title}</p>
          </div>
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

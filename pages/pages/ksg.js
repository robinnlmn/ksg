import React, { useEffect, useState } from "react";
import styles from "../../styles/Work.module.css";
import Draggable from "react-draggable";

function Work() {
  const [data, setData] = useState([
    {
      name: "silvers",
      files: [
        {
          name: "RIOT!.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "26/05/23",
          link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd",
        },
        {
          name: "CAROL.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "26/05/23",
          link: "https://open.spotify.com/track/7ixHDGkDq4mR0JbrtRn0Ue?si=5d8a28a24b86411a",
        },
        {
          name: "WALK OF SHAME.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "26/05/23",
          link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd",
        },
        {
          name: "OMDS.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "26/05/23",
          link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd",
        },
        {
          name: "COMPLAINT?.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "26/05/23",
          link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd",
        },
        {
          name: "BAPES.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "26/05/23",
          link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd",
        },
        {
          name: "THE ALCHEMIST.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "26/05/23",
          link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd",
        },
        {
          name: "HOMIES BEGGED.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "26/05/23",
          link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd",
        },
        {
          name: "BAPES.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "26/05/23",
          link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd",
        },
      ],
    },
    {
      name: "for the record",
      files: [
        {
          name: "uno/dos.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/track/4y79H5fe8Z9bYKZFblhufm?si=1640d0f5ca004a47",
        },
        {
          name: "what's the energy like.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/track/4gIrUu4gfdcAi00ncmmjFS?si=2006878428414215",
        },
        {
          name: "ooo.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/track/4gIrUu4gfdcAi00ncmmjFS?si=84daef1ccf534e50",
        },
        {
          name: "nickname.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/track/49fAA8RHsKmRkr33JwqdXc?si=e11afc53fc9b4b09",
        },
        {
          name: "street piano.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/track/62AMWmv5sPgVFSg0rhxfqt?si=4f9784f8fb3042cf",
        },
        {
          name: "can't change the place.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/track/69U8nlRnq7JdRb9waeXVyh?si=c8f8c8e26b50469e",
        },
        {
          name: "underwater.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/track/4GrSC3m2oFI5wNfmQCU04g?si=65087d4823cd43c1",
        },
        {
          name: "in gold.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/track/6537kRSdeUDjXRW5MmuiSr?si=4c5f442921f94bdf",
        },
        {
          name: "low//fi.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/track/4VMb5w9jfLn9EvYCa8FYjc?si=887f255e5344461f",
        },
        {
          name: "GUNN TYPE BEAT.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/track/1iJGEgpzt1suxWjbpAPeJj?si=f6084428ac404653",
        },
      ],
    },
  ]);
  const [dataMerch, setDataMerch] = useState([
    {
      name: "HOMIES BEGGED.mp4",
      img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
      type: "MP4 Audio",
      created: new Date(2023, 4, 30).toLocaleDateString(),
      link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd",
    },
    {
      name: "BAPES.mp4",
      img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
      type: "MP4 Audio",
      created: new Date(2023, 4, 30).toLocaleDateString(),
      link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd",
    },
  ]);
  const [openWork, setOpenWork] = useState(false);
  const [openMerch, setOpenMerch] = useState(false);
  const [currentFolder, setCurrentFolder] = useState(0);
  const [currentFile, setCurrentFile] = useState(0);

  const [selectedFolder, setSelectedFolder] = useState(0);
  const [selectedFile, setSelectedFile] = useState(0);

  const file = data[currentFolder].files[currentFile];

  const [currentFileMerch, setCurrentFileMerch] = useState(0);

  const [selectedFileMerch, setSelectedFileMerch] = useState(0);

  const fileMerch = dataMerch[currentFileMerch];

  function closeButtonWork() {
    setCurrentFolder(0);
    setCurrentFile(0);

    setSelectedFile(0);
    setSelectedFolder(0);
    setOpenWork(false);
  }

  function minimizeButtonWork() {
    setOpenWork(false);
  }

  function closeButtonMerch() {
    setCurrentFileMerch(0);
    setSelectedFileMerch(0);
    setOpenMerch(false);
  }

  function minimizeButtonMerch() {
    setOpenMerch(false);
  }

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.work}>
      <div className={styles.appgrid}>
        <Draggable axis="both">
          <div onDoubleClick={() => setOpenWork(true)}>
            <img src="/images/finder.png" width={64} height={64} />
            <p>WORK</p>
          </div>
        </Draggable>
        <Draggable axis="both">
          <div onDoubleClick={() => setOpenMerch(true)}>
            <img src="/images/finder.png" width={64} height={64} />
            <p>MERCH</p>
          </div>
        </Draggable>
      </div>

      {openWork ? (
        <Draggable axis="both">
          <div className={styles.fs}>
            <div className={[styles.header, styles.draghandle].join(" ")}>
              <div className={styles.buttons}>
                <button onClick={() => closeButtonWork()}></button>
                <button onClick={() => minimizeButtonWork()}></button>
                <button></button>
              </div>
              <p>WORK</p>
            </div>
            <div className={styles.content}>
              <div className={styles.folders}>
                {data.map((item, index) => {
                  const folderClass =
                    index === selectedFolder ? styles.selected : "";
                  return (
                    <div
                      key={index}
                      className={`${styles.folder} ${folderClass}`}
                      onClick={() => {
                        setSelectedFolder(index);
                        setCurrentFolder(index);
                      }}
                    >
                      {item.name}
                      <p>{item.files.length}</p>
                    </div>
                  );
                })}
              </div>

              <div className={styles.files}>
                {data[selectedFolder].files.map((item, index) => {
                  const fileClass =
                    index === selectedFile ? styles.selectedfile : "";
                  return (
                    <div
                      key={index}
                      className={`${styles.file} ${fileClass}`}
                      onClick={() => {
                        setSelectedFile(index);
                        setCurrentFile(index);
                      }}
                    >
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>

              <div className={styles.preview}>
                <img src={file.img} alt="img" className={styles.image} />
                <p className={styles.filename}>{file.name}</p>
                <p>{file.type}</p>

                <br></br>

                <p className={styles.filecreated}>
                  <strong>RELEASE </strong> {file.created}
                </p>
                <div className={styles.seperator}></div>
                <p className={styles.filelink}>
                  <strong>LINK </strong> <a href={file.link}>{file.name}</a>
                </p>
                {file.embed}
              </div>
            </div>
          </div>
        </Draggable>
      ) : (
        <></>
      )}

      {openMerch ? (
        <Draggable axis="both">
          <div className={styles.fs}>
            <div className={[styles.header, styles.draghandle].join(" ")}>
              <div className={styles.buttons}>
                <button onClick={() => closeButtonMerch()}></button>
                <button onClick={() => minimizeButtonMerch()}></button>
                <button></button>
              </div>
              <p>MERCH</p>
            </div>
            <div className={styles.content}>
              <div className={styles.files}>
                {dataMerch.map((item, index) => {
                  const fileClass =
                    index === selectedFileMerch ? styles.selectedfile : "";
                  return (
                    <div
                      key={index}
                      className={`${styles.file} ${fileClass}`}
                      onClick={() => {
                        setSelectedFileMerch(index);
                        setCurrentFileMerch(index);
                      }}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>

              <div className={styles.preview}>
                <img src={fileMerch.img} alt="img" className={styles.image} />
                <p className={styles.filename}>{fileMerch.name}</p>
                <p>{fileMerch.type}</p>

                <br></br>

                <p className={styles.filecreated}>
                  <strong>RELEASE </strong> {fileMerch.created}
                </p>
                <div className={styles.seperator}></div>
                <p className={styles.filelink}>
                  <strong>LINK </strong>{" "}
                  <a href={fileMerch.link}>{fileMerch.name}</a>
                </p>
                {fileMerch.embed}
              </div>
            </div>
          </div>
        </Draggable>
      ) : (
        <></>
      )}

      <p className={styles.currentTime}>{currentTime}</p>

      {/* <img src="/images/finder.png" width={64} height={64} onDoubleClick={() => { window.location = "/bamboozle" }} /> */}
    </div>
  );
}

export default Work;

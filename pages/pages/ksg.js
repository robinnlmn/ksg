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
          created: "30/05/23",
          link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=ffaae81380e84990",
        },
        {
          name: "CAROL.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "30/05/23",
          link: "https://open.spotify.com/track/7ixHDGkDq4mR0JbrtRn0Ue?si=99d546037a364f0e",
        },
        {
          name: "WALK OF SHAME.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "30/05/23",
          link: "https://open.spotify.com/track/5u5hPMWVIBKCLfiHv5gis0?si=fabbd52c5aea4303",
        },
        {
          name: "OMDS.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "30/05/23",
          link: "https://open.spotify.com/track/4dtMD5DeQkv8qugsTzK56e?si=932ad0e65682446d",
        },
        {
          name: "COMPLAINT?.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "30/05/23",
          link: "https://open.spotify.com/track/5ujKxEBXP3RHnrFA8D8BPQ?si=076ebfc586824107",
        },
        {
          name: "BAPES.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "30/05/23",
          link: "https://open.spotify.com/track/5T6YeZ6G2TixvEpl3bEPre?si=278b17b7fb204245",
        },
        {
          name: "THE ALCHEMIST.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "30/05/23",
          link: "https://open.spotify.com/track/32x0rw83FhcDnWRvnCwqCq?si=ceb6a1d52d95449e",
        },
        {
          name: "HOMIES BEGGED.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "30/05/23",
          link: "https://open.spotify.com/track/2gfAes9gEk7ABJTlC9DqgJ?si=f629e941ccd548ad",
        },
        {
          name: "ITS US (BONUS).wav",
          img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
          type: "WAV Audio File",
          created: "30/05/23",
          link: "https://open.spotify.com/track/5kZUHS4u8geMU7b4LAnw1a?si=806524242afb471f",
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
          created: "11/05/23",
          link: "https://open.spotify.com/track/4y79H5fe8Z9bYKZFblhufm?si=1640d0f5ca004a47",
        },
        {
          name: "what's the energy like.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "11/05/23",
          link: "https://open.spotify.com/track/4gIrUu4gfdcAi00ncmmjFS?si=2006878428414215",
        },
        {
          name: "ooo.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "11/05/23",
          link: "https://open.spotify.com/track/4gIrUu4gfdcAi00ncmmjFS?si=84daef1ccf534e50",
        },
        {
          name: "nickname.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "11/05/23",
          link: "https://open.spotify.com/track/49fAA8RHsKmRkr33JwqdXc?si=e11afc53fc9b4b09",
        },
        {
          name: "street piano.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "11/05/23",
          link: "https://open.spotify.com/track/62AMWmv5sPgVFSg0rhxfqt?si=4f9784f8fb3042cf",
        },
        {
          name: "can't change the place.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "11/05/23",
          link: "https://open.spotify.com/track/69U8nlRnq7JdRb9waeXVyh?si=c8f8c8e26b50469e",
        },
        {
          name: "underwater.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "11/05/23",
          link: "https://open.spotify.com/track/4GrSC3m2oFI5wNfmQCU04g?si=65087d4823cd43c1",
        },
        {
          name: "in gold.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "11/05/23",
          link: "https://open.spotify.com/track/6537kRSdeUDjXRW5MmuiSr?si=4c5f442921f94bdf",
        },
        {
          name: "low//fi.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "11/05/23",
          link: "https://open.spotify.com/track/4VMb5w9jfLn9EvYCa8FYjc?si=887f255e5344461f",
        },
        {
          name: "GUNN TYPE BEAT.wav",
          img: "https://i.scdn.co/image/ab67616d00001e02fc5bd31dbca1c1b59363c0af",
          type: "WAV Audio File",
          created: "11/05/23",
          link: "https://open.spotify.com/track/1iJGEgpzt1suxWjbpAPeJj?si=f6084428ac404653",
        },
      ],
    },
    {
      name: "Mr. Robot",
      files: [
        {
          name: "Deli.wav",
          img: "https://i.scdn.co/image/ab67616d00001e028a31a2471441951b49a8d518",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/intl-de/track/3pRyXILZXvHt43GyZ8x7pQ?si=2e96115bec7243e9",
        },
        {
          name: "Nocturnal.wav",
          img: "https://i.scdn.co/image/ab67616d00001e028a31a2471441951b49a8d518",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/intl-de/track/218r67BNZRjG5TCyo04zEE?si=cce065cdbf6341ce",
        },
        {
          name: "To Break A Heart.wav",
          img: "https://i.scdn.co/image/ab67616d00001e028a31a2471441951b49a8d518",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/intl-de/track/0ZVZEgm17QnpDR2VZ3oXjc?si=4f9138c711e2471a",
        },
        {
          name: "Flowerstreet.wav",
          img: "https://i.scdn.co/image/ab67616d00001e028a31a2471441951b49a8d518",
          type: "WAV Audio File",
          created: "26/05/11",
          link: "https://open.spotify.com/intl-de/track/1gCXJkCOBdwrGYKhJDDZZ4?si=02848a821c9048ae",
        },
      ],
    },
  ]);
  const [dataMerch, setDataMerch] = useState([
    {
      name: "COMPLAINT? - SINGLE VERSION.mp4",
      img: "https://i.scdn.co/image/ab67616d00001e0214a6c71ea8b64d6d27cace75",
      type: "MP4 Audio",
      created: new Date(2023, 4, 30).toLocaleDateString(),
      link: "https://open.spotify.com/intl-de/track/7xBSGqjwzhN485qZmbdYba?si=ce1f9f123a554b95",
    },
    {
      name: "yang tweaking.jpg",
      img: "/images/member/yang.jpg",
      type: "JPG Image",
      created: "-",
      link: "/images/member/yang.jpg",
    },
  ]);
  const [openWork, setOpenWork] = useState(false);
  const [openMerch, setOpenMerch] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const [currentFolder, setCurrentFolder] = useState(0);
  const [currentFile, setCurrentFile] = useState(0);

  const [selectedFolder, setSelectedFolder] = useState(0);
  const [selectedFile, setSelectedFile] = useState(0);

  const file = data[currentFolder].files[currentFile];

  const [currentFileMerch, setCurrentFileMerch] = useState(0);

  const [selectedFileMerch, setSelectedFileMerch] = useState(0);

  const fileMerch = dataMerch[currentFileMerch];

  const [isDraggable, setIsDraggable] = useState(true);

  const handleMouseDown = () => {
    setIsDraggable(true);
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

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
    }, 50);

    var width = document.body.offsetWidth;

    if (width < 450) {
      setOpenMerch(false);
      setOpenWork(false);

      setIsMobile(true);
      console.log("MOBILE");
    }

    console.log(isMobile);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.work}>
      {isMobile ? (
        <div className={styles.mobileAppGrid}>
          <div onClick={() => console.log("CLICK")}>
            <div onDoubleClick={() => setOpenWork(true)}>
              <img src="/images/finder.png" width={64} height={64} />
              <p>MUSIC</p>
            </div>
          </div>
          <div>
            <div onDoubleClick={() => setOpenMerch(true)}>
              <img src="/images/finder.png" width={64} height={64} />
              <p>DATA</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {isMobile ? (
        <div className={styles.mobileFsGrid}>
          {openWork ? (
            <div className={styles.fs}>
              <div className={styles.header}>
                <div className={styles.buttons}>
                  <button onClick={() => closeButtonWork()}></button>
                  <button onClick={() => minimizeButtonWork()}></button>
                  <button></button>
                </div>
                <p>{data[selectedFolder].name}</p>
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
                        <label>{item.name}</label>
                        {item.files.length < 10 ? (
                          <p>0{item.files.length}</p>
                        ) : (
                          <p>{item.files.length}</p>
                        )}
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
          ) : (
            <></>
          )}
          {openMerch ? (
            <div className={styles.fs}>
              <div className={[styles.header, styles.draghandle].join(" ")}>
                <div className={styles.buttons}>
                  <button onClick={() => closeButtonMerch()}></button>
                  <button onClick={() => minimizeButtonMerch()}></button>
                  <button></button>
                </div>
                <p>DATA</p>
              </div>
              <div className={styles.content} data-gridless="true">
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

                <div className={styles.preview} data-centered="true">
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
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}

      {/* PC VIEW */}

      {!isMobile ? (
        <div className={styles.appgrid}>
          <Draggable axis="both" disabled={!isDraggable}>
            <div
              onDoubleClick={() => setOpenWork(true)}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              <img
                src="/images/finder.png"
                width={64}
                height={64}
                alt="Finder"
                style={{
                  userDrag: "none",
                  WebkitUserDrag: "none",
                  userSelect: "none",
                  MozUserSelect: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                }}
              />
              <p>MUSIC</p>
            </div>
          </Draggable>
          <Draggable axis="both" disabled={!isDraggable}>
            <div
              onDoubleClick={() => setOpenMerch(true)}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              <img
                src="/images/finder.png"
                width={64}
                height={64}
                alt="Finder"
                style={{
                  userDrag: "none",
                  WebkitUserDrag: "none",
                  userSelect: "none",
                  MozUserSelect: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                }}
              />
              <p>DATA</p>
            </div>
          </Draggable>
        </div>
      ) : (
        <></>
      )}

      {openWork && !isMobile ? (
        <Draggable axis="both" positionOffset={{ x: -75, y: -75 }}>
          <div className={styles.fs}>
            <div className={[styles.header, styles.draghandle].join(" ")}>
              <div className={styles.buttons}>
                <button onClick={() => closeButtonWork()}></button>
                <button onClick={() => minimizeButtonWork()}></button>
                <button></button>
              </div>
              <p>MUSIC</p>
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
                      {item.files.length < 10 ? (
                        <p>0{item.files.length}</p>
                      ) : (
                        <p>{item.files.length}</p>
                      )}
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

      {openMerch && !isMobile ? (
        <Draggable axis="both" positionOffset={{ x: 0, y: 0 }}>
          <div className={styles.fs}>
            <div className={[styles.header, styles.draghandle].join(" ")}>
              <div className={styles.buttons}>
                <button onClick={() => closeButtonMerch()}></button>
                <button onClick={() => minimizeButtonMerch()}></button>
                <button></button>
              </div>
              <p>DATA</p>
            </div>
            <div className={styles.content} data-gridless="true">
              <div className={styles.files} data-gridless="true">
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

              <div className={styles.preview} data-centered="true">
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
                  <a href={fileMerch.link}>{fileMerch.link}</a>
                </p>
                {fileMerch.embed}
              </div>
            </div>
          </div>
        </Draggable>
      ) : (
        <></>
      )}

      {/* <p className={styles.currentTime}>10:10:00</p> */}
      <p className={styles.currentTime}>{currentTime}</p>
      {/* <img src="/images/finder.png" width={64} height={64} onDoubleClick={() => { window.location = "/bamboozle" }} /> */}
    </div>
  );
}

export default Work;

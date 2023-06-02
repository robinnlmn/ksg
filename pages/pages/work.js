import React, { useState } from 'react'
import styles from '../../styles/Work.module.css'

function Work() {
    const [data, setData] = useState([
        {
            name: "music",
            files: [
                {
                    name: "RIOT!.mp4",
                    img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
                    type: "MP4 Audio",
                    created: new Date(2023, 4, 30).toLocaleDateString(),
                    link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd"
                },
                {
                    name: "CAROL.mp4",
                    img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
                    type: "MP4 Audio",
                    created: new Date(2023, 4, 30).toLocaleDateString(),
                    link: "https://open.spotify.com/track/7ixHDGkDq4mR0JbrtRn0Ue?si=5d8a28a24b86411a"
                },
                {
                    name: "WALK OF SHAME.mp4",
                    img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
                    type: "MP4 Audio",
                    created: new Date(2023, 4, 30).toLocaleDateString(),
                    link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd"
                },
                {
                    name: "OMDS.mp4",
                    img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
                    type: "MP4 Audio",
                    created: new Date(2023, 4, 30).toLocaleDateString(),
                    link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd"
                },
                {
                    name: "COMPLAINT?.mp4",
                    img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
                    type: "MP4 Audio",
                    created: new Date(2023, 4, 30).toLocaleDateString(),
                    link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd"
                },
                {
                    name: "BAPES.mp4",
                    img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
                    type: "MP4 Audio",
                    created: new Date(2023, 4, 30).toLocaleDateString(),
                    link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd"
                },
                {
                    name: "THE ALCHEMIST.mp4",
                    img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
                    type: "MP4 Audio",
                    created: new Date(2023, 4, 30).toLocaleDateString(),
                    link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd"
                },
                {
                    name: "HOMIES BEGGED.mp4",
                    img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
                    type: "MP4 Audio",
                    created: new Date(2023, 4, 30).toLocaleDateString(),
                    link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd"
                },
                {
                    name: "BAPES.mp4",
                    img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
                    type: "MP4 Audio",
                    created: new Date(2023, 4, 30).toLocaleDateString(),
                    link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd"
                },
            ]
        },
        {
            name: "merch",
            files: [
                {
                    name: "HOMIES BEGGED.mp4",
                    img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
                    type: "MP4 Audio",
                    created: new Date(2023, 4, 30).toLocaleDateString(),
                    link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd"
                },
                {
                    name: "BAPES.mp4",
                    img: "https://i.scdn.co/image/ab67616d00001e02b4e42d88151d5246816fe287",
                    type: "MP4 Audio",
                    created: new Date(2023, 4, 30).toLocaleDateString(),
                    link: "https://open.spotify.com/track/7hThuS7hEVwH9N2semO4rr?si=5cc68b09711347fd"
                },
            ]
        }
    ])
    const [currentFolder, setCurrentFolder] = useState(0)
    const [currentFile, setCurrentFile] = useState(0)

    const file = data[currentFolder].files[currentFile]

    return (
        <div className={styles.work}>
            <div className={styles.fs}>
                <div className={styles.header}>
                    <div className={styles.buttons}>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <p>Archive</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.folders}>
                        {data.map((item, index) => {
                            return <div key={index} onClick={() => setCurrentFolder(index)} >{item.name}</div>
                        })}
                    </div>
                    <div className={styles.files}>
                        {data[currentFolder].files.map((item, index) => {
                            return <div key={index} onClick={() => setCurrentFile(index)}>{item.name}</div>
                        })}
                    </div>
                    <div className={styles.preview}>
                        <img src={file.img} alt="img" className={styles.image}/>
                        <p className={styles.filename}>{file.name}</p>
                        <p>{file.type}</p>

                        <br></br>

                        <p className={styles.filecreated}><strong>Created </strong> {file.created}</p>
                        <div className={styles.seperator}></div>
                        <p className={styles.filelink}><strong>Link </strong> <a href={file.link}>{file.name}</a></p>
                        {file.embed}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Work
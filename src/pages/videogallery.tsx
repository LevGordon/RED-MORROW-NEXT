const videos = [
    {
        title: "Red Morrow - Primal Conflict (live) 01/28/2023",
        src: "https://www.youtube.com/embed/0bNNqpOHXFE",
        description: "Primal conflict performed live before the album release",
    },
    {
        title: "Red Morrow at Harvard & Stone",
        src: "https://www.youtube.com/embed/SYKPoKRn8yc",
        description: "Red Morrow playing their first show at Harvard & Stone, hosted by Breaking Sound",
    },
    {
      title: "COUNTERFEST FEB 2022",
      src: "https://www.youtube.com/embed/wL_mqxh5qhE?start=2546",
      description: `Red Morrow's first appearance at CounterFest`,
    },
    {
      title: "Red Morrow gone ACOUSTIC?",
      src: "https://www.youtube.com/embed/_mrUeevMVBk",
      description: `Red Morrow's first acoustic show at the Che Cafe in USD`,
    },
    {
      title: "Mourn the Living",
      src: "https://www.youtube.com/embed/H8Cgbmc5vVo",
      description:
        "First Mourn the Living release with live performance from FTG",
    },
    {
      title: "Poles Asunder live at FTG",
      src: "https://www.youtube.com/embed/GyNrD-c4j68",
      description: "Poles Asunder live at FTG during counterfest FEB 2022",
    },
    {
      title: "Out Loud live at the Melrose Night Market",
      src: "https://www.youtube.com/embed/af_qRXgJhA8",
      description: "Out Loud live at the Melrose Night Market 28.01.22",
    },
    {
      title: "Red Morrow Full Set at FTG June 2022",
      src: "https://www.youtube.com/embed/xOgD81t52Fg",
      description: "Red Morrow Full Set at FTG June 2022",
    },
  ];
  
  const videoRender = (
        videos.map((video) => {
          return (
            <div className="video-gallery-item" key={'1'}>
              <h2 className="video-gallery-video-title">{video.title}</h2>
              <iframe
                className="video-gallery-video"
                src={video.src}
                title={video.title}
                allowFullScreen
              ></iframe>
              <p className="video-gallery-video-description">
                {video.description}
              </p>
            </div>
          );
        })
  )
  
  function VideoGallery() {
    return (
      <div className="video-gallery-container">
        <h1>RED MORROW VIDEO GALLERY</h1>
        <h3>SEARCH</h3>
        {videoRender}
      </div>
    );
  }
  
  export default VideoGallery;
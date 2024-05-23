<template>
    <div class="video-container">
      <div ref="videoPlayer" class="video-player"></div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Artplayer from 'artplayer';
  
  export default {
    name: 'GoogleDrivePlayer',
    props: {
      googleDriveLink: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const videoPlayer = ref(null);
  
      const getDriveVideoUrl = (link) => {
        const match = link.match(/\/d\/(.*?)\//);
        if (!match || !match[1]) {
          throw new Error('Invalid Google Drive link');
        }
        return `https://drive.google.com/uc?id=${match[1]}&export=download`;
      };
  
      onMounted(() => {
        try {
          const videoUrl = getDriveVideoUrl(props.googleDriveLink);
  
          new Artplayer({
            container: videoPlayer.value,
            url: videoUrl,
            poster: 'https://via.placeholder.com/800x450?text=Loading...',
            type: 'video/mp4',
            autoSize: true,
            autoMini: true,
            playbackRate: true,
            aspectRatio: true,
            fullscreen: true,
            fullscreenWeb: true,
            subtitleOffset: true,
            miniProgressBar: true,
            mutex: true,
            light: true,
            fastForward: true,
            setting: true,
            pip: true,
            screenshot: true,
            highlight: [
              { time: 10, text: 'Introduction' },
              { time: 30, text: 'Main Topic' },
              { time: 60, text: 'Summary' },
            ],
          });
        } catch (error) {
          console.error(error);
        }
      });
  
      return {
        videoPlayer,
      };
    },
  };
  </script>
  
  <style scoped>
  .video-container {
    max-width: 800px;
    margin: auto;
  }
  
  .video-player {
    width: 100%;
    height: 450px;
  }
  </style>
  
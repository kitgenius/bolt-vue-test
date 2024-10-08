<template>
  <div class="tv-container">
    <div class="upper-part">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
      <div class="image-gallery">
        <img src="https://picsum.photos/320/180?random=1" alt="Random image 1">
        <img src="https://picsum.photos/320/180?random=2" alt="Random image 2">
        <img src="https://picsum.photos/320/180?random=3" alt="Random image 3">
        <img src="https://picsum.photos/320/180?random=4" alt="Random image 4">
      </div>
    </div>
    <div class="lower-part">
      <div class="image-gallery">
        <img src="https://picsum.photos/300/168?random=5" alt="Random image 5">
        <img src="https://picsum.photos/300/168?random=6" alt="Random image 6">
        <img src="https://picsum.photos/300/168?random=7" alt="Random image 7">
        <img src="https://picsum.photos/300/168?random=8" alt="Random image 8">
        <img src="https://picsum.photos/300/168?random=9" alt="Random image 9">
        <img src="https://picsum.photos/300/168?random=10" alt="Random image 10">
      </div>
    </div>
  </div>
</template>

<style scoped>
.tv-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.upper-part {
  flex: 6;
  background-color: #f0f0f0;
  padding: 10px;
  display: flex;
  gap: 10px;
}

.lower-part {
  flex: 4;
  background-color: #e0e0e0;
  padding: 10px;
  overflow-y: auto;
}

.video-container {
  flex: 3;
  position: relative;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.upper-part .image-gallery {
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: flex-start;
  overflow-y: auto;
}

.upper-part .image-gallery img {
  width: calc(50% - 5px);
  height: auto;
  object-fit: cover;
}

.lower-part .image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
}

.lower-part .image-gallery img {
  width: calc(16.66% - 9px);
  height: auto;
  object-fit: cover;
}

@media (max-width: 1200px) {
  .upper-part {
    flex-direction: column;
  }

  .video-container, .upper-part .image-gallery {
    flex: 1;
  }

  .lower-part .image-gallery img {
    width: calc(25% - 7.5px);
  }
}

@media (max-width: 768px) {
  .lower-part .image-gallery img {
    width: calc(33.33% - 6.67px);
  }
}
</style>
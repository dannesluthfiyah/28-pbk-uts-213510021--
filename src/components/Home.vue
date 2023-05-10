<template>
  <body style="background-color: #A4BC92;">
  <div class="home">
    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Pilihan Terbaik untuk mengatur rencana kegiatan kamu</h1>
          <p class="hero-description">Lebih mudah dan tersusun bersama DannesDoneDeal!</p>
        </div>
        <router-link to="/kegiatan">
          <button class="hero-button">Get Started</button>
        </router-link>
      </div>
    </div>
  </div>
</body>
</template>


<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.hero-text {
  max-width: 50%;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.hero-button {
  background-color: #000000;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
}

.input-section {
  margin-top: 4rem;
}

.input-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-wrap: wrap;
}

.form-group {
  flex-basis: 100%;
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
}

.form-button {
  background-color: #7a33ff;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  font-size: 14px;
  color: #000000;
}

.footer-link {
  margin-left: 10px;
  color: #000000;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

.hero-button:hover {
  background-color: #7866ff;
}

</style>

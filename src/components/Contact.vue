<template>
  <div class="contact-container">
    <div class="contact-header">
      <h1>Contact Us</h1>
      <p>Get in touch with us for any inquiries or feedback.</p>
    </div>
    <div class="contact-form-container">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <div class="form-group">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // TODO: implement form submission logic
      console.log(this.formData);
      // Reset form data after submission
      this.formData = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  min-height: calc(100vh - 120px);
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/background-image.jpg') center/cover no-repeat;
  color: #000000;
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
}

.contact-header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.contact-form-container {
  background-color: #000000;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000000;
  transition: border-color 0.3s ease-in-out;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  outline: none;
  border-color: #06c;
}

button[type="submit"] {
  background-color: #06c;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out
}

/* Style for small screens */
@media (max-width: 767px) {
  .contact-container {
    padding: 20px;
    min-height: calc(100vh - 70px);
  }

  .contact-header h1 {
    font-size: 2rem;
  }

  .contact-form-container {
    padding: 20px;
  }
}

/* Style for medium and large screens */
@media (min-width: 768px) {
  .contact-container {
    padding: 50px;
    min-height: calc(100vh - 120px);
  }

  .contact-header h1 {
    font-size: 3rem;
  }

  .contact-form-container {
    padding: 50px;
  }
}

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/background-image.jpg') center/cover no-repeat;
  color: #000000;
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
}

.contact-header p {
  font-size: 1.2rem;
  margin-bottom: 0;
}

.contact-form-container {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.26);
  max-width: 600px;
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1.2rem;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease-in-out;
  font-size: 1rem;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  outline: none;
  border-color: #06c;
}

button[type="submit"] {
  background-color: #06c;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease-in-out
}

button[type="submit"]:hover {
  background-color: #004080;
}

</style>
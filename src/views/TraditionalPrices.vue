<template>
  <div class="prices">
    <b-container>
      <b-alert
        :show="dismissCountDown"
        fade
        variant="info"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        <p>
          Please read my
          <a class="alert-link" href="tos">Terms of Service</a> before
          commissioning me!
        </p>
      </b-alert>
    </b-container>
    <h1>Prices</h1>
    <h3>Traditional Artwork Prices:</h3>
    <div class="ex_section">
      <p><span>Halfbody</span> - Starting at $20</p>
      <b-img
        class="example"
        :src="require('@/assets/tradprices/half_ex.jpg')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><span>Headshot</span> - Starting at $15</p>
      <b-img
        class="example"
        :src="require('@/assets/tradprices/head_ex.jpg')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><span>Fullbody</span> - Starting at $25</p>
    </div>
    <div class="ex_section">
      <p><span>Couples</span> - Starting at $30</p>
    </div>
    <div class="ex_section">
      <div id="noauth" v-if="!inStorage">
        <confirmation :coming-from="'prices'"></confirmation>
      </div>
      <div id="auth" v-if="ofAge">
        <p><span>NSFW (ID required)</span> - Starting at $25<br /></p>
        <b-button
          href="https://www.furaffinity.net/gallery/toxicangelwolfy/folder/752565/NSFW"
        >
          NSFW Examples</b-button
        >
      </div>
      <div id="no-selected" v-if="inStorage && !ofAge"></div>
    </div>
    <div class="ex_section">
      <p><span>Gore</span> - Starting at $15</p>
    </div>
    <div class="ex_section">
      <p><span>Feral</span> - Starting at $15</p>
    </div>
    <div class="ex_section">
      <p><span>Realistic</span> - Starting at $15</p>
    </div>
    <div class="ex_section">
      <p><span>Chibi</span> - Starting at $10</p>
    </div>
    <div class="ex_section">
      <p><span>Lineart</span> - Starting at $10</p>
    </div>
    <div class="ex_section">
      <p><span>Stickers</span> - Small: $0.25 Medium: $0.50 Large $1</p>
    </div>
  </div>
</template>

<script>
import confirmation from "../components/Confirmation.vue";
export default {
  components: {
    confirmation
  },
  name: "traditionalprices",
  data() {
    return {
      dismissSecs: 10,
      dismissCountdown: 0,
      ofAge: false,
      inStorage: false
    };
  },
  created: function() {
    this.showAlert();
    let confirmStr = localStorage.getItem("confirm");
    if (confirmStr !== null) {
      this.inStorage = true;
      let confirm = JSON.parse(confirmStr);
      let date = new Date();
      if (date.getTime() > confirm.expDate) {
        localStorage.removeItem("confirm");
        this.inStorage = false;
      } else {
        this.ofAge = confirm.ofAge;
      }
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>

<style scoped lang="scss">
.prices {
  text-align: center;
}
h1 {
  text-decoration: underline;
  font-weight: bold;
  margin-bottom: 50px;
}
h3 {
  font-weight: bold;
  margin-bottom: 10px;
}
.example {
  max-width: 25%;
}
.ex_section {
  margin-top: 25px;
  margin-bottom: 25px;
}
span {
  text-decoration: underline;
  font-weight: bold;
}
p {
  margin-top: 10px;
}
</style>

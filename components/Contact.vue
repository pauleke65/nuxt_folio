<template>
  <section class="bd-grid pb-8 items-center" id="contact">
    <div class="flex pt-8 flex-col items-center justify-center">
      <div
        class="rounded-full py-3 px-12 mx-auto w-64 h-auto font-bold mt-8 text-2xl bg-white text-black text-center"
      >
        Contact Me
      </div>

      <div class="flex flex-col">
        <h2 class="text-white font-bold mt-16 mb-4 text-4xl mx-auto">
          Feel Free To Reach Out To Me
        </h2>
        <p class="text-white md:mx-4">
          Having any issues or solutions you wish to discuss or implement, reach
          out to me here. I'd be happy to hear your ideas and give you a call.
        </p>
      </div>

      <div
        class="flex flex-col w-full md:w-95pr bg-gray-900 px-4 md:px-8 pb-8 mt-4 md:pt-4"
      >
        <div class="flex flex-col md:flex-row ">
          <input
            class="mt-4 h-12 pl-4 md:flex-1"
            v-model="fullName"
            @input="nameCheck"
            placeholder="Full Name"
            type="text"
          />
          <input
            class="mt-4 h-12 pl-4 md:flex-1 md:ml-4"
            v-model="email"
            @input="emailCheck"
            placeholder="Email Address"
            type="text"
          />
        </div>

        <input
          class="mt-4 h-12 pl-4"
          v-model="mobile"
          inputmode="numeric"
          @input="mobileCheck"
          placeholder="Phone Number"
          type="tel"
        />

        <input
          class="mt-4 h-12 pl-4"
          v-model="subject"
          placeholder="Subject"
          type="text"
        />
        <textarea
          class="mt-4 h-52 px-4 pt-4"
          v-model="message"
          placeholder="Message"
        />
        <button
          @click="checkInput"
          class="text-white text-xl font-semibold bg-yellow-500 w-full mt-4 h-16"
        >
          <span><i class="bx bxs-message-dots"></i></span> Message Me
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import gql from "graphql-tag";

const SEND_MESSAGE = gql`
  mutation MyMutation(
    $email: String = ""
    $full_name: String = ""
    $message: String = ""
    $mobile: String = ""
    $subject: String = ""
  ) {
    insert_Messages_one(
      object: {
        email: $email
        full_name: $full_name
        message: $message
        mobile: $mobile
        subject: $subject
      }
    ) {
      full_name
      subject
    }
  }
`;

export default {
  name: "Contact",
  data() {
    return {
      fullName: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
      nameError: true,
      emailError: true,
      mobileError: true
    };
  },

  methods: {
    nameCheck() {
      if (this.fullName.trim() !== "") {
        const re1 = /^[ a-zA-Z\-\’]+$/;
        this.nameError = !re1.test(this.capital_name(this.fullName));
      } else this.nameError = false;
    },

    emailCheck() {
      if (this.email.trim() !== "") {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.emailError = !re.test(this.email.toLowerCase());
      }
    },

    mobileCheck() {
      var num_check = Number(this.mobile.trim());
      if (num_check == 0 || isNaN(num_check)) {
        this.mobileError = true;
      } else this.mobileError = false;
    },

    checkInput() {
      if (this.fullName.trim() !== "" && !this.nameError) {
        if (this.email.trim() !== "" && !this.emailError) {
          if (!this.mobileError) {
            if (this.subject.trim() !== "" && this.message.trim() !== "") {
              this.submit();
            } else alert("A Message and Subject is required");
          } else alert("Enter a valid mobile number");
        } else alert("Enter a valid Email Address");
      } else alert("Please re-enter a plain name");
    },

    capital_name(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },

    async submit() {
      try {
        const res = await this.$apollo.mutate({
          mutation: SEND_MESSAGE,
          variables: {
            email: this.email.toLowerCase().trim(),
            full_name: this.fullName,
            message: this.message,
            mobile: this.mobile,
            subject: this.subject
          }
        });

        if (res) {
          alert(
            `Hi ${this.capital_name(
              res.data.insert_Messages_one.full_name
            )} your message on  ${
              res.data.insert_Messages_one.subject
            } has been successfully sent.`
          );
        }
      } catch (err) {
        alert(`Error ${err}`);
      }
      this.fullName = "";
      this.email = "";
      this.mobile = "";
      this.subject = "";
      this.message = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

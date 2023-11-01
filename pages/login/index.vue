<template>
  <main>
    <section class="flex justify-center items-center min-h-screen">
      <div>
        <div
          class="flex min-h-full bg-gray-800 text-white rounded-lg flex-col justify-center px-6 py-12 lg:px-8"
        >
          <div class="sm:mx-auto sm:w-full sm:max-w-lg">
            <img
              class="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2
              class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight"
            >
              Sign in to your account
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="text" class="block text-sm font-medium leading-6"
                  >Email, Phone or username</label
                >
                <div class="mt-2">
                  <input
                    v-model="form.login"
                    id="text"
                    name="text"
                    type="text"
                    autocomplete="text"
                    required
                    class="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center mt-2 justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6"
                    >Password</label
                  >
                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-semibold text-indigo-600 hover:text-indigo-500"
                      >Forgot password?</a
                    >
                  </div>
                </div>
                <div class="mt-2 mb-5">
                  <input
                    v-model="form.password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a
                href="#"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >Start a 14 day free trial</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const router = useRouter();

const form = reactive({
  login: "",
  password: "",
});

const handleSubmit = () => {
  fetch("http://localhost:4000/api/admin/login", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {

      if (res.mesage === "Tizimga muvaffaqiyatli kirildi") {
        localStorage.setItem("token", res.access_token);
        router.push("/");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style lang="scss" scoped></style>

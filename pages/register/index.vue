<template>
  <main>
    <section class="sm:flex overflow-hidden overflow-y-auto max-h-screen w-full justify-center items-center min-h-screen">
      <div>
        <div
          class="sm:flex w-full min-h-full sm:mx-10 mx-0 bg-gray-800 text-white rounded-lg flex-col justify-center px-6 py-12 lg:px-8"
        >
          <div class="flex items-center sm:mx-auto w-full max-w-2xl">
            <h2
              class="text-center text-2xl font-bold tracking-tight"
            >
              Register to your account
            </h2>
          </div>

          <div class="sm:mt-10 sm:mx-auto w-full max-w-2xl">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="text" class="block text-sm font-medium leading-6"
                  >Username</label
                >
                <div class="mt-2">
                  <input
                    v-model="form.username"
                    id="text"
                    name="text"
                    type="text"
                    autocomplete="text"
                    required
                    class="block w-full px-2 rounded-md text-gray-900 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label for="tel" class="block text-sm font-medium leading-6"
                  >Phone number</label
                >
                <div class="mt-2">
                  <input
                    v-model="form.phone"
                    id="tel"
                    name="tel"
                    type="tel"
                    autocomplete="tel"
                    required
                    class="block w-full px-2 rounded-md text-gray-900 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium leading-6"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    v-model="form.email"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="block w-full px-2 rounded-md text-gray-900 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                </div>
                <div class="mt-2 mb-5">
                  <input
                    v-model="form.password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="block w-full px-2 rounded-md text-gray-900 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center mt-2 justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6"
                    >Secret_key</label
                  >
                </div>
                <div class="mt-2 mb-5">
                  <input
                    v-model="form.secret_key"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="block w-full px-2 rounded-md text-gray-900 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

            <p class="mt-2 text-sm text-gray-500">
              Do you have an account?
              <a
                href="#"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >Login</a
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
  layout: "custom",
});

const router = useRouter();

const form = reactive({
  username: "",
  email: "",
  password: "",
  phone: "",
  secret_key: "",
});

const handleSubmit = () => {
  fetch("http://localhost:4000/api/admin/register", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message === "Admin ro'yxatdan muvaffaqiyatli o'tdi"){
        router.push("/login");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style lang="scss" scoped></style>

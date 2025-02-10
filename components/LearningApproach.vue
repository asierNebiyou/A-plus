<template>
  <div class="max-w-6xl mx-auto px-4 py-5">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
      Our Personalized One-On-One Learning Approach
    </h2>
    <p class="text-gray-600 mb-8 max-w-3xl">
      We believe that every student is unique. Our tailored tutoring sessions
      cater to your specific learning style, ensuring you grasp concepts with
      ease.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Telegram Invitation Section -->
      <div
        class="relative bg-gradient-to-r from-[#0088cc] to-[#92A75A] rounded-xl p-8 text-white shadow-lg flex items-center justify-center"
      >
        <div class="flex flex-col items-center text-center">
          <div class="relative">
            <div
              class="absolute inset-[30px] animate-ping bg-white opacity-30 rounded-full w-20 h-20"
            ></div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAANE0lEQVR4nO2da2xcxRXHb6D9gqAtjy+0oh9aiOeuCSmFQMujrWj6oQUkaAuqECAe4tGqiEqlRYKWBAUJgURT1KdKKU+pIVKJSTyzix3HIeRJnDgv5wF+JyaxE9tre8/cfXmnmhtvsnF21/u4d87c3flJ/y9+7L135uw5M/fMnLEsg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FQM3yjdezLdpjfbDPnIUJhGaHwDmHQZlO+22b8CGF8jDAAm3EhRSjE5M/k7+TfyL91/4fCMvkZIcZvkp+J/VwGn7DXxK8IheExwuA9m0Jf1jA8F4U+eQ15LXlN06EBZeGq8a/Yzfw+m8KbhMKgbwbDisu9NoU35b3Ie8JuF0MxVopz7bCzmDB4Ozf8aCMKcZvxNaEwv+uaDvFF05maYIenGm3KlxPGj6EbCSvRM8l7pXy5vHfs9qtbGiOxhdLb2AzS2AZhV+6VMtIr2c1wPXZ71g3zKb/RbfSTjS9qR7DRZs4Psdu3ZpHu3p1qo3e0vyIU1prQ5iHXrBbn2RSWEgYJ7M5VaEQpQvmrDU3iAi/bsu5oYHA7YdCP3aFoonyIUH4/dj8EDtI6cTGh/AP0DtREhPEm2SbY/RIIGhkssin0YneabiKUH5YTCOz+0Rch5tkUniQUktidpfPYyKaw1FoizsHuLq0IRaIXEcopdgcFRpQ3L2iOXojdb1pAwrFLZ7Lg+B0TIBEKXY0RfplVz8yPxAlhMIDdGYEV5UMNdGqBVb+DZT6C3gkBF6F8tKGZ32DVE4Q6P5KLtLAbv1ZEZFuGncVWPRCKwHWEwhR2o9eaCAOoeU8kV+kRyoexG7tmRfmJxua4bdUiV6yBr9V1WoKpe+EYWs2/btXeex7owm7cehGhfF/tvCcSYp7Ja3EMI6Ky7a2gQxh/GvsbWbcK899ZQUYu1TS5LY6aOwtsAlbGYDNo5npk8VdPXmIFDTPu4foYEeNNVpBooPAz7EYz4rOMCO60ArSG2b/tw0aislAGg6F2cb6lO4TCy6aTuZ6GTuFFS/utN2ZFoSi1Q78V4eK3nQmx6khadE1Mi8lURowmMuKXHQnfZmVaL/+oh31bXujWDY54qy8losmMyEf7cNq3axMKrZaOkDD/LnbH6O5tnt6dEB1j02IupGH5eS+ynpGlGzblEexO0lE/+cgRr/WkxFgiv7fJx3DcXwMijDNLJ2wWu7r29qpXroURLn6zMyE2n5gWpZvNadaP+BfCsmqgcK2lC4TxVdidpoNurcDb5OPvn6X8v1/K/2fpU5+nfr3Pwiq9TT6e2JFQYECQ0aKIg1soSYOOxPI24wVmUtWwuN1R8xyU/wnVeL7fLr5AGD+K3ZkqZ1JZb+MXE8mMnCUpeR65vBi13B6hsduwO1XVexu/vM1stpyYVvpsJBy7FdGA+Erszg2yt8nH670ptQbEYAVesW4GHLuj/fI2hd4S+81TnQoG0Lmi4KCUIHbrMGvQ4bp6m2QqLfo/Hxa7DvWIo8dHS/4/OThHaIN71RuQLKCtQedXo9t88DaZTEaMjI2LPZ/2is6D3a52f9pb0v9CWojGsPp2IAz+o9yAgrpc1c+xzRRwcaBv8JThSEkPFJ2MlfT/O8bUDqBzDGhA+Q5TbEPQwdvkhquBz4fPMJys55mMgSiVd/vVDqBz1cicb6ozIAqPYxuEDjOpjBuuomeEq6z2fNYrYtwp6/Oe2aN4AJ0jwuBRZQbknnqjgYEU0u0b4q63kS/l/CJfuOqc0b7uPuHEE2V/5p0b45gGpG46r2NRqGtbuFiyN+mOI/ykULjqnFFXz4CIJ5Plf+60EFdFENuQQp+6o5Q0Sp7+fFNcvDeYErGU8JVi4apzRtIjJVOV3ci+KM4AOseAMkreB5086U8PbyPXEaugWLjqnNGh/sMilU5XfI2Vg3gD6KyU7GK1mfMwtreR70tUIL1JsXDVOaPuwSExPV2dMT+/L4luQA1h5wHfDYhQeEHlQy1S7G1yw5Wchs9lPP1Dx9y/r5ZfbMYbQJ8ShedVGNC7tehtyglXWR0+NuLJNdMZIa7+ENl4Ts7E3g701p2st9mv0NuUG66yGho54dm1P5tCHkCr3PLjR1FwLG9TbrjKanh03NN7+OCI/4voS/NAvNN/A5Jnp3t0w49vT4iDk+q9zRnhqre0cOXmtQ52ixPRCc/v46UDSV080KD/BkR51IubXdaV9GwRut/hKpsUHZ+c8uV+HtgW18UDjflvQB4tIvMzzeBluKokKVoOshWua3U0MSAAFQbkySnJ/bGM1uGqmqRoOQyCv7tQyxOkA2NAD26LCyetZ7jKTYryCpKi5fDh0XTdGZBn66Dv+DjubuOViURdwlW1SdFyWX5IjwG0uhDm0SA6V/Il2kPbTi7BkEnFaoPbZIXhyoukaLk8sj2hkQEpGUR7N40vpJvbHHchmHw/Us4KwmrClVdJ0XK5qc3Rx4BUTOMJ5btUPpRcZC5fNL5yMOmuLMwX7qoNV14mRcvhmKPTANrdqbpTgQHBWsyH/HZOuOueysyEq4GqDMfLpGg5rPOxElllghYVBvQO/oOeVktX9cbjVVK0XP6mooyLdslUCsuwHzRXT28eqcp4vEyKlsuvVZRx0W05B+aCsny6qWVK7KzQeLxOipbLLarKuOi0oEwWaMR+0Nlasau8KbtfSdFykJU+sNvtLANScWSmW1RBo0X1Uk9sPKFFUrQcNh3XYw3QKVHIXM7ElywV6HaUwaJITHQc7CnJgOSsTQf+3aPXANpm0GPV88bC13centN4Inv7xWtbusWU43+KYi5khXrsNkPbWBgKw2PYDzxbD380OqcBvb7ziFixbov4b/snYmAUN4z9GKeMS2EDorFH6rq4wsIwiC0Hir+JfmnrkGhat8nVynVbxbaB0uv2eAkglXHRpriCruVd/toxVNSAntt05JQBSb2/brNg+4eUG1AHUhkXbcq76Fpg6t71Y0UN6Nn1fWcYUFZvbesWaYVLs99BLOOiTYEpHUvcXclAfLw//2xsx4FusXTtwbwGJPXPDftFNKHGip7ZrdcAGqXEna5FNpdvP1pwBvaXtbsKGpDUv9p3iZ6ovysQJXIhHXY7oRfZ1HU6f3f7eJEZ2NaiBiT157Y9bq1mv0hMC7FAowE0WplfXQuNy9nN+q7eojOwQnqzbbu4MTwurgxzd7mIH+zFLuOiU6FxXY86ePmTs8PYH2fNwAoZT+7nPLc36fl67fc0KOOizVEHuh62cmeeMFZoBlbIeLK6Z0tcHI97t9BsqQZlXE4LXkE1Hl2Pe5KHlazd11fSDKyY8WT1g3WOG3q84O5NmgygdTnuSdcD517YemzOGVgpxpNb8VUu8q+FMi62TgfO6Xrk5W1tE2flwCo1nlzPJhf3T1cY0Q5N6jOA1urISwlhPIzdKLM7W3qefDOwSownV49tT7hnvJdLky5lXCinlm7oeOz3H7YMnzUDq9Z4spLZ9N4y9/e/uF+PAbSWx37rsOUn33rpbQd6Ts3AvDKerL7T6pRVBf++rfH62LpTKSEWDxEKSfxGOq0HN4yKJWsPiX+07RA3hKOef/6VJb50dMu4tOCuASIMEo3NcdvSGcLgJWyjwdCzexJumqIQByY0GEBTeNHSnWtWi/N0WzOtSvcUeOkoZ21y4I297z3ULs63ggAJw0+xOxNL32tzxPuH02I4nhHx6ZO5r191aLB8g8IdVpAgjDehN5qRcL0P46usoLGgOXphvYYyWyPJ0DV/9eQlVhCxm+F6OfLHbsR6FaGQUnKAip/YlP8euyHrWE9ZgUeIeWY8xBG8D6ey7a1aQI6HCOX7NPhG1ov2yja3aomGFviqGVRzFZ7ncGOEX2bVIqGIc7lcRqnBN7RWdXx+JE6sWqaRwSJCYUqDxq4pEQagpL6PDthhZzGhEMNu9FoRkW0ZdhZb9YT0RDblI9iNH3QRykfrxvPMRsZrHc+gD4oIg/6aH/PMBQnHLlVdvLwWRCh01exsq7K8GW/G7pTAiPLVNfeep2qEmGdTeNLkzngxr5OyKSy1lohzsLtL88E19KJ/y3XMqtOAJ0ZVQVonLjb5M37aeBhfFYpEL8Lul8DRwOD2Ok9/HCGU34/dD4FmZo31UptCvI7CVZJQ/mpDk7gAu/1rhpktQ63Yneu/oEX7rTdBRr51tRlfo9tefLt6w9kYos4t2O1bN8xnU1fJ8628OkUaRdT9EqwJReA67PasW07WJ+LLCePH0A2ClSb3XmVhLl3q8xgsy1opznWz/Aze1jLTT91JwJpQmN+FXlbOUBxZtlbWPrYpvIGZrCXy2hTekPciyyKbfgvySkgGj8qStr695aaQkZ8tryGvJa+J/dwGn5AHq8m0QIg6D8pzQmfCXithvFOmDAjjYzaDydMGApPyZzO/k3/T6g7gKTwvj4mUM0Nlh7UZDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAZLBf8HFfrCkXXMbVUAAAAASUVORK5CYII="
              alt="telegram-app--v5"
            />
          </div>
          <h3 class="text-2xl font-semibold mt-4">
            Join Our Telegram Community!
          </h3>
          <p class="mt-2 text-white/90">
            Stay updated, ask questions, and connect with like-minded learners.
          </p>
          <a
            :href="telegramLink"
            target="_blank"
            class="mt-4 bg-white text-[#0088cc] px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition transform"
          >
            Join Now
          </a>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-2 gap-3">
        <div v-for="feature in features" :key="feature.title" class="bg-white">
          <img
            :src="feature.img"
            :alt="feature.title"
            class="object-cover rounded-2xl my-2 hover:scale-105 transition"
          />
          <h4 class="font-semibold mb-2 p-2 text-[#2E3E5C]">
            {{ feature.title }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { contactInfo, isLoading, error, fetchContactInfo } = useContact();
await fetchContactInfo();

const telegramLink = contactInfo.value?.socialLinks?.telegram || "#";

const features = [
  { title: "Customized Lesson Plans", img: "/customizedLessonplans.png" },
  { title: "Experienced Tutors", img: "/expiriencedtutors.png" },
  { title: "Flexible Scheduling Options", img: "/scheduleimg.png" },
  { title: "Affordable Pricing", img: "/affordable.png" },
];
</script>

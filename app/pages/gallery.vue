<script setup lang="ts">
function formatFilename(filename: string): string {
  const name = filename
    .replace("/images/projects/gallery/", "")
    .replace(/\.(jpeg|jpg|png)$/i, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return name;
}

const galleryImages = ref([
  { src: "/images/projects/gallery/200kVA_33_0.4kV_ss_at_Asad_Staff_Quarters_Amana_City_Kano.jpeg" },
  { src: "/images/projects/gallery/Solar_Street_Light_Installation_at_Asad_Lubricant_Kano.jpeg" },
  { src: "/images/projects/gallery/Technical Partners on CNG Skids Powering and .jpeg" },
  { src: "/images/projects/gallery/300kVA 33_0.4kV Tx supply to Abuja.jpeg" },
  { src: "/images/projects/gallery/Technical Partners on 3x375kVA CNG Maraban Jos.jpeg" },
  { src: "/images/projects/gallery/200kW_CNG_SID_Powering_in_Kano.jpeg" },
  { src: "/images/projects/gallery/200kVA Transformer Installation in Kano.jpeg" },
  { src: "/images/projects/gallery/200kW Solar_Power_Generation Plant.jpeg" },
  { src: "/images/projects/gallery/2000A_LV_Panel_Design_and_Installaion_Asad_Sacks_Factory_Kano.jpeg" },
  { src: "/images/projects/gallery/600kVA_UPS_installation_and_commissioning_in_kano.jpeg" },
  { src: "/images/projects/gallery/2000A LV Panel Design and Installation  Asad Sacks Factory Kano.jpeg" },
  { src: "/images/projects/gallery/33kV_Overhead_Line_Design_and_Construction_on_Kano_Hydro_Energy_Line.jpeg" },
].map(img => ({
  src: img.src,
  title: formatFilename(img.src),
})));

const currentIndex = ref(0);
const showLightbox = ref(false);

function openLightbox(index: number) {
  currentIndex.value = index;
  showLightbox.value = true;
}

function onHide() {
  showLightbox.value = false;
}

useSeoMeta({
  title: "Gallery - Musnaj Engineering",
  description: "View our project gallery showcasing our engineering work",
});
</script>

<template>
  <div class="min-h-screen py-20 px-4">
    <UContainer>
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">
          Project Gallery
        </h1>
        <p class="text-gray-400">
          Explore our completed projects
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="aspect-square cursor-pointer overflow-hidden rounded-lg"
          @click="openLightbox(index)"
        >
          <NuxtImg
            :src="image.src"
            :alt="image.title"
            class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <VueEasyLightbox
        :visible="showLightbox"
        :imgs="galleryImages"
        :index="currentIndex"
        @hide="onHide"
      />
    </UContainer>
  </div>
</template>

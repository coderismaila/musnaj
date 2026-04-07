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
  { src: "/images/projects/gallery/200kVA_33-0.4kV_Asad_staff_quarters_Amana_City_Kano.jpeg" },
  { src: "/images/projects/gallery/Solar_Street_Light_Installation_at_Asad_Lubricant_Kano.jpeg" },
  { src: "/images/projects/gallery/Technical_Partners_on_CNG_Skids_Powering.jpeg" },
  { src: "/images/projects/gallery/300kVA_33_0.4kV_Tx_supply_to_Abuja.jpeg" },
  { src: "/images/projects/gallery/Technical_Partners_on_3x375kVA_CNG_Maraban_Jos.jpeg" },
  { src: "/images/projects/gallery/200kW_CNG_SID_Powering_in_Kano.jpeg" },
  { src: "/images/projects/gallery/200kVA_Transformer_Installation_in_Kano.jpeg" },
  { src: "/images/projects/gallery/200kW_Solar_Power_Generation_Plant.jpeg" },
  { src: "/images/projects/gallery/2000A_LV_Panel_Design_and_Installation_Asad_Sacks_Factory_Kano_1.jpeg" },
  { src: "/images/projects/gallery/2000A_LV_Panel_Design_and_Installation_Asad_Sacks_Factory_Kano_2.jpeg" },
  { src: "/images/projects/gallery/600kVA_UPS_installation_and_commissioning_in_kano.jpeg" },
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

<script setup lang="ts">
const columns = [
  {
    label: "Services",
    children: [
      {
        label: "Power Distribution",
      },
      {
        label: "Electrical Installations",
      },
      {
        label: "Renewable Energy",
      },
      {
        label: "Public Lighting",
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        label: "Projects",
        to: "/project",
      },
      {
        label: "About Us",
        to: "/about",
      },
      {
        label: "Contact Us",
        to: "/contact",
      },
    ],
  },
  {
    label: "Contacts",
    children: [
      {
        label: "+234 803 499 1503",
      },
      {
        label: "mustapha.gago@musnajelectricals.com",
      },
      {
        label: "info@musnajelectricals.com",
      },
    ],
  },
];
</script>

<template>
  <USeparator class="h-px" :avatar="{ src: '/logo.png', size: '3xs' }" />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #left>
            <div>
              <div class="flex gap-4 items-center">
                <NuxtImg src="/musnaj2.png" width="80" />
                <div
                  class="text-2xl text-gray-800 dark:text-blue-500 font-extrabold"
                >
                  Musnaj <br><span class="text-lg dark:text-yellow-500">Electrical Concept Limited</span>
                </div>
              </div>
              <p class="text-muted mt-4">
                Leading engineering solutions provider specializing in power infrastructure.
              </p>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-muted">
        Built by Ismail for Musnaj Electrical Concept Ltd • ©
        {{ new Date().getFullYear() }}
      </p>
    </template>
  </UFooter>
</template>

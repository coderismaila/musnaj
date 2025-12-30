<script setup lang="ts">
const route = useRoute();

const items = computed(() => [
  {
    label: "Project",
    to: "/project",
    active: route.path.startsWith("/project"),
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contacts",
    to: "/contact",

  },
]);
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <div class="flex gap-2 items-center justify-center">
          <AppLogo />
          <div class=" hidden md:grid md:grid-cols-1">
            <div class="text-gray-600 dark:text-blue-500 text-xl font-bold">
              Musnaj
            </div>
            <div class="dark:text-yellow-500">
              Electrical Concept Limited
            </div>
          </div>
        </div>
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>

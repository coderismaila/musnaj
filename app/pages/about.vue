<script setup lang="ts">
const { data: about } = await useAsyncData("about", () =>
  queryCollection("about").first());
</script>

<template>
  <div v-if="about" class="min-h-screen">
    <UPageHero
      :title="about.title"
      :description="about.description"
      orientation="horizontal"
    >
      <div class="grid gap-4">
        <UPageCard
          title="Mission"
          :description="about.mission"
          icon="i-lucide-target"
          variant="outline"
        />
        <UPageCard
          title="Vision"
          :description="about.vision"
          icon="i-lucide-eye"
          variant="outline"
        />
      </div>
    </UPageHero>

    <UPageSection
      :ui="{ container: 'py-8 sm:py-16 lg:py-24' }"
      title="Who We Are"
      icon="i-lucide-user-check"
      :features="[
        {
          title: 'Established 2024',
          description: 'Indigenous Nigerian company providing innovative electrical solutions',
          icon: 'i-lucide-calendar',
        },
        {
          title: '19+ Years Experience',
          description: 'Deep expertise in Nigeria\'s power distribution sector',
          icon: 'i-lucide-briefcase',
        },
        {
          title: 'COREN Registered',
          description: 'Certified engineering firm meeting industry standards',
          icon: 'i-lucide-award',
        },
      ]"
    />

    <UPageSection
      title="Leadership"
      icon="i-lucide-users"
      description="Meet our experienced leadership team"
      headline="Management"
      :ui="{ container: 'py-8 sm:py-16 lg:py-24' }"
    >
      <div class="flex flex-col lg:flex-row gap-12 items-start">
        <div class="lg:w-1/3">
          <UCard variant="soft" class="h-full">
            <UUser
              name="Mustapha Gago"
              :description="about.leadership.members[0]!.role"
              :avatar="{
                src: about.leadership.members[0]!.image.src,
                alt: about.leadership.members[0]!.image.alt,
                size: 'xl',
              }"
              size="xl"
            />
            <div class="mt-6 space-y-4">
              <p class="text-muted-foreground text-sm leading-relaxed">
                {{ about.leadership.members[0]!.bio }}
              </p>
              <div>
                <p class="text-sm font-semibold mb-3">
                  Professional Qualifications
                </p>
                <div class="flex flex-wrap gap-2">
                  <UBadge
                    v-for="qualification in about.leadership.members[0]!.qualifications"
                    :key="qualification"
                    :label="qualification"
                    variant="subtle"
                  />
                </div>
              </div>
            </div>
          </UCard>
        </div>

        <div class="lg:w-2/3">
          <UCard class="h-full" variant="soft">
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                  <UIcon name="i-lucide-trending-up" class="text-primary" />
                  Career Journey
                </h3>
                <UTimeline
                  :items="about.leadership.members[0]!.careers"
                  color="primary"
                />
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UPageSection>

    <UPageSection
      :title="about.values.title"
      icon="i-lucide-heart"
      description="Core values that define our commitment to excellence"
      headline="Our Principles"
      :ui="{ container: 'py-8 sm:py-16 lg:py-24' }"
      :features="about.values.items.map(value => ({
        title: value.title,
        description: value.description,
        icon: value.icon,
      }))"
    />

    <UPageCTA
      v-bind="about.cta"
      variant="subtle"
      class="overflow-hidden @container"
    >
      <template #title>
        <MDC :value="about.cta.title" />
      </template>
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";

import * as z from "zod";

const loading = ref(false);

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormSchema = z.output<typeof contactFormSchema>;

const state = reactive<Partial<ContactFormSchema>>({
  name: undefined,
  email: undefined,
  phone: undefined,
  subject: undefined,
  message: undefined,
});

const toast = useToast();

// Form submission handler
async function onSubmit(event: FormSubmitEvent<ContactFormSchema>) {
  loading.value = true;

  try {
    toast.add({ title: "Success", description: "The form has been submitted.", color: "success" });
    console.warn(event.data);
  }
  catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false;
  }
}

// SEO meta
useSeoMeta({
  title: "Contact Us - MUSNAJ Electrical Concept Ltd",
  description: "Get in touch with MUSNAJ Electrical Concept Ltd for electrical engineering solutions, power distribution, and renewable energy projects in Nigeria.",
});
</script>

<template>
  <div class="min-h-screen">
    <!-- Contact Information Section -->
    <UPageHero
      title="Contact Us"
      description="Get in touch with MUSNAJ Electrical Concept Ltd for your electrical engineering and power distribution needs."
      :ui="{
        container: 'md:pt-18 lg:pt-20',
        title: 'max-w-3xl mx-auto',
      }"
    >
      <template #top>
        <HeroBackground />
      </template>
    </UPageHero>

    <UPageSection>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-2xl font-bold mb-6">
            Get In Touch
          </h2>
          <div class="space-y-6">
            <!-- Address -->
            <div class="flex items-start space-x-4">
              <UIcon name="i-lucide-map-pin" class="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 class="font-semibold mb-2">
                  Address
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  No. 15A, Ahmadu Bello Way,<br>
                  Kaduna, Nigeria
                </p>
              </div>
            </div>

            <!-- Phone Numbers -->
            <div class="flex items-start space-x-4">
              <UIcon name="i-lucide-phone" class="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 class="font-semibold mb-2">
                  Phone
                </h3>
                <div class="space-y-1">
                  <p class="text-gray-600 dark:text-gray-300">
                    <a href="tel:+2348031234567" class="hover:text-primary transition-colors">
                      +234 803 123 4567
                    </a>
                  </p>
                  <p class="text-gray-600 dark:text-gray-300">
                    <a href="tel:+2347012345678" class="hover:text-primary transition-colors">
                      +234 701 234 5678
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Email Addresses -->
            <div class="flex items-start space-x-4">
              <UIcon name="i-lucide-mail" class="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 class="font-semibold mb-2">
                  Email
                </h3>
                <div class="space-y-1">
                  <p class="text-gray-600 dark:text-gray-300">
                    <a href="mailto:info@musnaj.com" class="hover:text-primary transition-colors">
                      info@musnaj.com
                    </a>
                  </p>
                  <p class="text-gray-600 dark:text-gray-300">
                    <a href="mailto:projects@musnaj.com" class="hover:text-primary transition-colors">
                      projects@musnaj.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="flex items-start space-x-4">
              <UIcon name="i-lucide-clock" class="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 class="font-semibold mb-2">
                  Business Hours
                </h3>
                <div class="text-gray-600 dark:text-gray-300 space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h2 class="text-2xl font-bold mb-6">
            Send us a Message
          </h2>
          <UForm
            :schema="contactFormSchema"
            :state="state"
            class="gap-4 flex flex-col"
            @submit="onSubmit"
          >
            <UFormField
              label="Full Name"
              name="name"
              required
            >
              <UInput
                v-model="state.name"
                placeholder="Enter your full name"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UFormField
              label="Email Address"
              name="email"
              required
            >
              <UInput
                v-model="state.email"
                type="email"
                placeholder="Enter your email address"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Phone Number" name="phone">
              <UInput
                v-model="state.phone"
                type="tel"
                placeholder="Enter your phone number"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UFormField
              label="Subject"
              name="subject"
              required
            >
              <UInput
                v-model="state.subject"
                placeholder="What's this about?"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UFormField
              label="Message"
              name="message"
              required
            >
              <UTextarea
                v-model="state.message"
                placeholder="Tell us about your project or inquiry..."
                :rows="6"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UButton
              type="submit"
              block
              size="lg"
              :loading="loading"
            >
              Send Message
            </UButton>
          </UForm>
        </div>
      </div>
    </UPageSection>
  </div>
</template>

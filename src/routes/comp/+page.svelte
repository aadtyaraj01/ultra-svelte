<script lang="ts">
    import {Accordion, AccordionItem} from '$lib/components/Accordion';
    const faq = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our Solar System?",
    answer: "Jupiter"
  },
  {
    question: "Who wrote 'Hamlet'?",
    answer: "William Shakespeare"
  },
  {
    question: "What year did the Titanic sink?",
    answer: "1912"
  }
];

let colapse = true;
</script>

<h1 class="text-3xl mt-10">Component Labs 🧪</h1>

{#snippet title()}
 title snippet
{/snippet}

{#snippet content()}
 content snippet
{/snippet}


{#each faq as { question, answer }, i}
    <Accordion {content} />
{/each}

<div class="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
      <!-- Bookkeeping Plan -->
      <div class="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
        <div class="text-center">
          <h2 class="text-lg font-medium text-gray-900">
            Bookkeeping
            <span class="sr-only">Plan</span>
          </h2>
          <p class="mt-2 sm:mt-4">
            <strong class="text-3xl font-bold text-gray-900 sm:text-4xl">$30</strong>
            <span class="text-sm font-medium text-gray-700">/month</span>
          </p>
        </div>
        <ul class="mt-6 space-y-2">
          <li class="flex items-center gap-1">
            <span class="text-gray-700">Basic bookkeeping services</span>
          </li>
          <li class="flex items-center gap-1">
            <span class="text-gray-700">Monthly financial reports</span>
          </li>
          <li class="flex items-center gap-1">
            <span class="text-gray-700">Dedicated support</span>
          </li>
        </ul>
        <a href="#" class="mt-8 block rounded-full border border-gray-200 bg-white px-12 py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring active:text-gray-700"> Get Started </a>
      </div>
  
      <!-- Custom Integration Plan -->
      <div class="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:px-8 lg:p-12">
        <div class="text-center">
          <h2 class="text-lg font-medium text-gray-900">
            Custom Integration
            <span class="sr-only">Plan</span>
          </h2>
          <p class="mt-2 sm:mt-4">
            <strong class="text-3xl font-bold text-gray-900 sm:text-4xl">Custom Pricing</strong>
          </p>
        </div>
        <ul class="mt-6 space-y-2">
          <li class="flex items-center gap-1">
            <span class="text-gray-700">Integration between QuickBooks, PayPal, Xero, HubSpot</span>
          </li>
          <li class="flex items-center gap-1">
            <span class="text-gray-700">Custom workflow solutions</span>
          </li>
          <li class="flex items-center gap-1">
            <span class="text-gray-700">Priority support</span>
          </li>
        </ul>
        <a href="#" class="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring active:text-indigo-500"> Get Started </a>
      </div>
  
      <!-- Data Migration Plan -->
      <div class="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
        <div class="text-center">
          <h2 class="text-lg font-medium text-gray-900">
            Data Migration
            <span class="sr-only">Plan</span>
          </h2>
          <p class="mt-2 sm:mt-4">
            <strong class="text-3xl font-bold text-gray-900 sm:text-4xl">Custom Pricing</strong>
          </p>
        </div>
        <ul class="mt-6 space-y-2">
          <li class="flex items-center gap-1">
            <span class="text-gray-700">Migration from one accounting software to another</span>
          </li>
          <li class="flex items-center gap-1">
            <span class="text-gray-700">Secure data transfer</span>
          </li>
          <li class="flex items-center gap-1">
            <span class="text-gray-700">Post-migration support</span>
          </li>
        </ul>
        <a href="#" class="mt-8 block rounded-full border border-gray-200 bg-white px-12 py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring active:text-gray-700"> Get Started </a>
      </div>
    </div>
  </div>
  <div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
      <div class="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
        <div class="text-center">
          <h2 class="text-lg font-medium text-gray-900">
            Pro
            <span class="sr-only">Plan</span>
          </h2>
  
          <p class="mt-2 sm:mt-4">
            <strong class="text-3xl font-bold text-gray-900 sm:text-4xl"> 30$ </strong>
  
            <span class="text-sm font-medium text-gray-700">/month</span>
          </p>
        </div>
  
        <ul class="mt-6 space-y-2">
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
  
            <span class="text-gray-700"> 20 users included </span>
          </li>
  
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
  
            <span class="text-gray-700"> 5GB of storage </span>
          </li>
  
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
  
            <span class="text-gray-700"> Email support </span>
          </li>
  
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
  
            <span class="text-gray-700"> Help center access </span>
          </li>
  
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
  
            <span class="text-gray-700"> Phone support </span>
          </li>
  
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
  
            <span class="text-gray-700"> Community access </span>
          </li>
        </ul>
  
        <a href="#" class="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"> Get Started </a>
      </div>
  
      <div class="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
        <div class="text-center">
          <h2 class="text-lg font-medium text-gray-900">
            Starter
            <span class="sr-only">Plan</span>
          </h2>
  
          <p class="mt-2 sm:mt-4">
            <strong class="text-3xl font-bold text-gray-900 sm:text-4xl"> 20$ </strong>
  
            <span class="text-sm font-medium text-gray-700">/month</span>
          </p>
        </div>
  
        <ul class="mt-6 space-y-2">
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
  
            <span class="text-gray-700"> 10 users included </span>
          </li>
  
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
  
            <span class="text-gray-700"> 2GB of storage </span>
          </li>
  
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
  
            <span class="text-gray-700"> Email support </span>
          </li>
  
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
  
            <span class="text-gray-700"> Help center access </span>
          </li>
        </ul>
  
        <a href="#" class="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"> Get Started </a>
      </div>
    </div>
  </div>
  
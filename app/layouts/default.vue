<template>
    <ClientOnly>
      <Toaster />
    </ClientOnly>

    <Header />

    <main class="max-w-8xl mx-auto px-4-24-clamp prose">
        <slot />
    </main>

    <Footer />
</template>

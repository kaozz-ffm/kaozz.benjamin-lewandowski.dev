<script>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>
<template>
    <Intro
        title="Freie, nicht kommerzielle Musik aus Frankfurt am Main.<br class='hidden md:block'> Remixes, DJ Sets & live Performance."
        description="Eine Hommage an die pulsierende Energie der Nacht. Eine Reise durch hypnotische Melodien, treibende Basslines und rhythmische Grooves.<br class='hidden lg:block'> Eine unverkennbare Leidenschaft für Tech-House und Techno. Seit über 15 Jahren auf den Club- & Rave-Dancefloors."
    />

<h2>Audio</h2>

<UiTabs default-value="sets">
    <UiTabsList>
        <UiTabsTrigger value="sets"> Sets </UiTabsTrigger>
        <UiTabsTrigger value="mashups"> Mashups </UiTabsTrigger>
        <UiTabsTrigger value="bootlegs"> Bootlegs </UiTabsTrigger>
    </UiTabsList>
    
    <UiTabsContent value="sets" class="grid grid-rows-(--cover-grid-template-rows) grid-cols-(--cover-grid-template-columns) gap-4">
        <UiCard class="p-0" v-for="i in 8" :key="i">
            <UiCardContent class="p-0 aspect-square">
                <img class="object-cover" />
            </UiCardContent>
        </UiCard>
    </UiTabsContent>
    <UiTabsContent value="mashups">
        <UiCard>
            <UiCardContent>
                content mashups
            </UiCardContent>
        </UiCard>
    </UiTabsContent>
    <UiTabsContent value="bootlegs">
        <UiCard>
            <UiCardContent>
                content bootlegs
            </UiCardContent>
        </UiCard>
    </UiTabsContent>
</UiTabs>


<h2>Audio</h2>

<UiTabs default-value="sets" class="mb-12">
    <UiTabsList>
        <UiTabsTrigger value="sets"> Sets </UiTabsTrigger>
        <UiTabsTrigger value="mashups"> Mashups </UiTabsTrigger>
        <UiTabsTrigger value="bootlegs"> Bootlegs </UiTabsTrigger>
    </UiTabsList>
    
    <UiTabsContent value="sets" class="grid grid-rows-(--cover-grid-template-rows) grid-cols-(--cover-grid-template-columns) gap-4">
        <UiCard class="p-0" v-for="i in 8" :key="i">
            <UiCardContent class="p-0 aspect-square">
                <img class="object-cover"/>
            </UiCardContent>
        </UiCard>
    </UiTabsContent>
    <UiTabsContent value="mashups">
        <UiCard>
            <UiCardContent>
                content mashups
            </UiCardContent>
        </UiCard>
    </UiTabsContent>
    <UiTabsContent value="bootlegs">
        <UiCard>
            <UiCardContent>
                content bootlegs
            </UiCardContent>
        </UiCard>
    </UiTabsContent>
</UiTabs>
</template>

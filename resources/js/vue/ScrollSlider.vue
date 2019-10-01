<template>
    <div class="py-4 scroolsliderall">
        <div class="container pb-4">
            <h4 class="text-center mb-3">
                <strong class="fontYekan">
                    آژانس های ویژه
                </strong>
            </h4>
            <hooper :infiniteScroll="true" :itemsToShow="5" :centerMode="true" class="px-4">
                <slide class="text-center px-2 py-3">
                    <a>
                        <img src="/media/1.jpg" height="100%" class="scroolsliderimage">
                    </a>
                </slide>
                <slide class="text-center px-2 py-3">
                    <a>
                        <img src="/media/2.jpg" height="100%" class="scroolsliderimage">
                    </a>
                </slide>
                <slide class="text-center px-2 py-3">
                    <a>
                        <img src="/media/3.jpg" height="100%" class="scroolsliderimage">
                    </a>
                </slide>
                <slide class="text-center px-2 py-3">
                    <a>
                        <img src="/media/4.jpg" height="100%" class="scroolsliderimage">
                    </a>
                </slide>
                <slide class="text-center px-2 py-3">
                    <a>
                        <img src="/media/5.jpg" height="100%" class="scroolsliderimage">
                    </a>
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
        </div>
    </div>
</template>

<script>
    import {Hooper, Slide, Navigation as HooperNavigation} from 'hooper';

    export default {
        name: "ScrollSlider",
        components: {
            Hooper,
            Slide,
            HooperNavigation
        }
    }
</script>

<style scoped>


</style>

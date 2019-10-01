<template>
    <div class="position-absolute headermenu py-4 px-1 px-lg-5">
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
            <a href="#">درباره ما</a>
            <a href="#">سوالات متداول</a>
            <a href="#">مشاورین املاک</a>
            <a href="#">تماس با ما</a>
            <a href="#">بلاگ</a>
            <a href="#">ضوابط و قوانین</a>
            <a href="#">تبلیغات</a>
            <a href="#">تبدیل رهن و اجاره</a>
        </div>
        <div class="mx-1 mx-lg-5 row">



            <div class="col-8 col-md-5">
                <i class="fas fa-bars fa-lg pointer" @click="openNav"></i>
                <a>
                    <i class="fas fa-search fa-lg ml-3 pointer position-absolute"></i>
                </a>

            </div>
            <div class="col-4 col-md-2 position-relative">
                <img src="/media/logo.png" class="headerlogo">
            </div>
            <div class="col-5 d-none d-md-block text-right">
                <h6 class="m-0 mt-1">
                    <strong>
                        مشاورین املاک سامان یاب
                    </strong>
                </h6>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderMenu",
        data() {
            return {}
        },
        methods: {


            openNav() {
                document.getElementById("mySidenav").style.left = "0";
                document.getElementById("mySidenav").style.opacity = "0.95";
            },

            /* Set the width of the side navigation to 0 */
            closeNav() {
                document.getElementById("mySidenav").style.left = "-250px";
                document.getElementById("mySidenav").style.opacity = "0.7";
            },
        },
    }
</script>

<style scoped>


</style>

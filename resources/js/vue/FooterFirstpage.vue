<template>
    <div class="footerlink row m-0 py-4">
        <div class="container text-center">
            <img src="/media/logob.png" width="70px">
            <ul class="footerlinkul mt-3" dir="rtl">
                <li><a>
                    درباره ما
                </a></li>
                <li><a>
                    سوالات متداول
                </a></li>
                <li><a>
                    مشاورین املاک
                </a></li>
                <li><a>
                    تماس با ما
                </a></li>
                <li><a>
                    بلاگ
                </a></li>
                <li><a>
                     ضوابط و قوانین
                </a></li>
                <li><a>
                    تبلیغات
                </a></li>
                <li><a>
                    تبدیل رهن و اجاره
                </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterFirstpage"
    }
</script>

<style scoped>
    .footerlink{
        background-color: #EDEDED;
    }
    .footerlinkul li{
        list-style: none;
        display: inline-block;
        font-size: 12px;
        margin: 0 10px;
        color: #2B496F;
    }
    .footerlinkul li:hover{
        font-weight: bolder;
    }
</style>

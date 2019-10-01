<template>
    <div class="row mx-0 aboutsamanyab">
        <div class="col-12 col-lg-6 px-0">
            <img src="/media/qome.jpg" class="aboutusimg">
        </div>
        <div class="col-12 col-lg-6 p-md-5 p-3">
            <div class="py-3 px-1 px-md-5 text-right" dir="rtl">
                <h4 class="mb-4 abouttitle"><strong class="fontYekan">
                    درباره سامان یاب
                </strong></h4>
                <div class="abouttext">
                    <p class="text-justify font14">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است. چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                        و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
                        و
                        آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
                        رایانه
                        ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </p>
                    <p class="text-justify font14">
                        در این صورت می توان امید داشت که
                        تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                        حروفچینی
                        دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
                <div class="row mx-0 mt-5">
                    <div class="col-6 text-left">
                        <input type="button" class="btn aboutbtn" value="تماس با ما">
                    </div>
                    <div class="col-6 text-right">
                        <input type="button" class="btn aboutbtn" value="راهنمای استفاده">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutUs"
    }
</script>

<style scoped>
    .aboutusimg {
        width: 100%;
        height: 100%;
    }

    .aboutsamanyab {
        background-color: #EDEDED;
    }
    .abouttext p{
        color: #505050;
    }
    .aboutbtn{
        background-color: #375e8f;
        width: 150px;
        color: #e4a405;
        font-weight: bolder;
    }
    .aboutbtn:hover{
        background-color: #2B496F;
        color: #ffb705;
    }
</style>

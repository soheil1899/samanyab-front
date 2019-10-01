<template>
    <div>
        <div class="py-4 joinsection" dir="rtl">
            <div class="container text-center pb-5">
                <h4 class="mb-4 jointitle"><strong class="fontYekan">
                    به سامان یاب بپیوندیم
                </strong></h4>
                <button class="btn joinbtn1 mx-4 py-2 px-4 mb-2">
                    <i class="far fa-address-card fa-lg ml-2 mt-1"></i>
                    <strong>
                        فرم درخواست
                    </strong>
                </button>
                <button class="btn joinbtn1 mx-4 py-2 px-4 mb-2">
                    <i class="far fa-address-card fa-lg ml-2 mt-1"></i>
                    <strong>
                        سرویس ها
                    </strong>
                </button>
                <button class="btn joinbtn1 mx-4 py-2 px-4 mb-2">
                    <i class="far fa-address-card fa-lg ml-2 mt-1"></i>
                    <strong>
                        پکیج ها
                    </strong>
                </button>
            </div>
        </div>
        <div id="imagecounter" class="imagecounter px-lg-5 px-1 py-5">
            <div class="counter row m-0 justify-content-around">
                <div class="counterblock col-4 col-md-3 py-5 py-md-4 px-0 px-lg-5">
                    <div class="countercore text-center pt-3">
                        <i class="fas fa-home fa-3x fa-md-5x d-block"></i>
                        <strong>
                            <label class="d-block colorblue">املاک ثبت شده</label>

                            <label class="font55 animnum">{{counter[0]}}</label>
                        </strong>
                    </div>
                </div>
                <div class="counterblock col-4 col-md-3 py-5 py-md-4 px-0 px-lg-5">
                    <div class="countercore text-center pt-3">
                        <i class="fas fa-users fa-3x fa-md-5x d-block"></i>
                        <strong>
                            <label class="d-block colorblue">مشاوران فعال</label>
                            <label class="font55 animnum">{{counter[1]}}</label>
                        </strong>
                    </div>
                </div>
                <div class="counterblock col-4 col-md-3 py-5 py-md-4 px-0 px-lg-5">
                    <div class="countercore text-center pt-3">
                        <i class="fas fa-hotel fa-3x fa-md-5x d-block"></i>
                        <strong>
                            <label class="d-block colorblue">مشاور املاک</label>
                            <label class="font55 animnum">{{counter[2]}}</label>
                        </strong>
                    </div>
                </div>
            </div>

        </div>
        <div class="py-4 joinsearch" dir="rtl">
            <div class="container text-right pb-5 px-1">
                <div class="px-0 px-lg-5">
                    <div class="px-0 px-lg-5">
                        <div class="row m-0 px-0">
                            <div class="col-12 px-4 px-lg-3">
                                <h4 class="mb-4 jointitle"><strong class="fontYekan">
                                    جستجوی مشاور املاک
                                </strong></h4>
                            </div>
                        </div>

                        <div class="row m-0 px-0">
                            <div class="col-6">
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-6 row">
                                <div class="col-12 col-md-6 pr-0 pl-1">
                                    <button class="btn joinbtn px-lg-5 px-md-4">
                                        <i class="far fa-address-card fa-lg ml-2 mt-1"></i>
                                        <strong>
                                            جستجو
                                        </strong>
                                    </button>
                                </div>
                                <div class="col-12 col-md-6 pr-1 pl-0">
                                    <a class="font14 widthfit">
                                        <strong class="showallexpert">
                                            نمایش همه مشاورین املاک
                                        </strong>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>


    export default {
        name: "JoinSection",
        data() {
            return {
                counter: {
                    0: 0,
                    1: 0,
                    2: 0,
                },
                value: {
                    0: 30,
                    1: 289,
                    2: 62,
                },
                counterinterval: 100,
                counted: false,

            }
        },
        methods: {
            counting() {
                let that = this;
                setInterval(function () {
                    for (var i = 0; i < 3; i++) {
                        var endnum = that.value[i];
                        var q = Math.ceil(endnum / (endnum / 15));
                        var change = (endnum - that.counter[i]) / q;
                        change = change < 1 ? Math.ceil(change) : Math.floor(change);
                        that.counter[i] += change;
                    }
                }, this.counterinterval);
            }
        },
        mounted() {
            let that = this;
            window.addEventListener('scroll', function (e) {
                var scrollPos = window.scrollY;
                var width = window.outerWidth;
                var myper, myper2;
                if (width > 770) {
                    myper = 51;
                    myper2 = 61;
                } else if (width > 400 && width < 770) {
                    myper = 43;
                    myper2 = 52;
                } else if (width < 400) {
                    myper = 54;
                    myper2 = 60;
                }

                var docHeight = document.documentElement.scrollHeight;
                var perc = 100 * (scrollPos / docHeight);
                if (perc > myper && perc < myper2) {
                    if (!that.counted) {
                        that.counting();
                        that.counted = true;
                    }
                }
            });
        }
    }


</script>

<style scoped>

</style>

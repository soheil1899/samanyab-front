<template>
    <div class="headersearch position-absolute p-3">
        <div class="row mx-0 justify-content-end mb-2">
            <input class="btn headerbutton px-2 px-lg-5 py-2 mx-3" type="button" value="رهن و اجاره">
            <input class="btn headerbutton px-2 px-lg-5 py-2" type="button" value="خرید">
        </div>
        <div class="row mx-0 px-2 backopacity" dir="rtl">
            <div class="col-9 my-2 px-1">
                <input type="text" class="form-control form-control-sm headerinput">
            </div>
            <div class="col-3 my-2 px-1">
                <input type="button" class="btn btn-sm btn-search btn-block" value="جستجو">
            </div>
            <div class="col-6 col-lg-3 mb-2 px-1">
                <select name="" class="form-control form-control-sm headerinput">
                    <option value="مشاور املاک">مشاور املاک</option>
                </select>
            </div>
            <div class="col-6 col-lg-3 mb-2 px-1">
                <select name="" class="form-control form-control-sm headerinput">
                    <option value="نوع ملک">نوع ملک</option>
                </select>
            </div>
            <div class="col-6 col-lg-3 mb-2 px-1">
                <select name="" class="form-control form-control-sm headerinput">
                    <option value="قیمت">قیمت</option>
                </select>
            </div>
            <div class="col-6 col-lg-3 mb-2 px-1">
                <select name="" class="form-control form-control-sm headerinput">
                    <option value="متراژ">متراژ</option>
                </select>
            </div>
            <div class="col-12 pr-3 mb-2 px-1 text-right text-white font14">
                <a class="pointer">
                    <strong>
                        جستجوی پیشرفته
                    </strong>
                </a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "HeaderSearch"
    }
</script>

<style scoped>

</style>

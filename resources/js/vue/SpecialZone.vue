<template>
    <div class="py-5 zoneall">
        <div class="container">
            <div class="row px-4">
                <div class="col-6 text-left">
                    <input type="button" class="btn showallzonebtn btn-sm" value="نمایش همه محله ها">
                </div>
                <div class="col-6 text-right">
                    <h2>
                        <strong class="fontYekan font20">
                            محله های محبوب
                        </strong>
                    </h2>
                </div>

            </div>
            <div class="row justify-content-center mt-4 zoneallblock">
                <div class="col-12 col-md-4 row">
                    <div class="col-12 mb-3 px-2 position-relative">
                        <img src="/media/53.jpg" class="blockimg">
                        <div class="position-absolute imageblockname px-3 py-1">
                            <strong>
                                محله فقیرنشین
                            </strong>
                        </div>
                        <div class="position-absolute homeuserzone p-2">
                            <i class="fas fa-home"></i>
                            <label class="m-0">165</label>
                            <i class="fas fa-user-tie ml-2"></i>
                            <label class="m-0">8</label>
                        </div>
                    </div>
                    <div class="col-12 px-2 position-relative">
                        <img src="/media/54.jpg" class="blockimg">
                        <div class="position-absolute imageblockname px-3 py-1">
                            <strong>
                                محله سرمایه دار
                            </strong>
                        </div>
                        <div class="position-absolute homeuserzone p-2">
                            <i class="fas fa-home"></i>
                            <label class="m-0">165</label>
                            <i class="fas fa-user-tie ml-2"></i>
                            <label class="m-0">8</label>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-8 row">
                    <div class="col-12 col-md-6 mb-3 px-2 position-relative">
                        <img src="/media/51.jpg" class="blockimg">
                        <div class="position-absolute imageblockname px-3 py-1">
                            <strong>
                                پایین برره
                            </strong>
                        </div>
                        <div class="position-absolute homeuserzone p-2">
                            <i class="fas fa-home"></i>
                            <label class="m-0">165</label>
                            <i class="fas fa-user-tie ml-2"></i>
                            <label class="m-0">8</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-3 px-2 position-relative">
                        <img src="/media/52.jpg" class="blockimg">
                        <div class="position-absolute imageblockname px-3 py-1">
                            <strong>
                                بالا برره
                            </strong>
                        </div>
                        <div class="position-absolute homeuserzone p-2">
                            <i class="fas fa-home"></i>
                            <label class="m-0">165</label>
                            <i class="fas fa-user-tie ml-2"></i>
                            <label class="m-0">8</label>
                        </div>
                    </div>
                    <div class="col-12 px-2 position-relative">
                        <img src="/media/55.jpg" class="blockimg">
                        <div class="position-absolute imageblockname px-3 py-1">
                            <strong>
                                گلیرد
                            </strong>
                        </div>
                        <div class="position-absolute homeuserzone p-2">
                            <i class="fas fa-home"></i>
                            <label class="m-0">165</label>
                            <i class="fas fa-user-tie ml-2"></i>
                            <label class="m-0">8</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "SpecialZone"
    }
</script>

<style scoped>
    .blockimg:hover{
        -webkit-filter: none; /* Safari 6.0 - 9.0 */
        filter: none;
    }
.blockimg{
    -webkit-filter: grayscale(40%); /* Safari 6.0 - 9.0 */
    filter: grayscale(40%);
    transition: filter 0.7s ease;
}


</style>

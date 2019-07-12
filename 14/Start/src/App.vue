<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <!-- You can only animate one element with transition. You can have multiple lines inside the
                transition element but then the conditions of these elements have to alternate. -->
                <transition>
                    <div v-if="show" class="alert alert-info">This is some info.</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
            }
        }
    }
</script>

<style>

</style>
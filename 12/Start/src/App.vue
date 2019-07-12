<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <h2>Built-in Directives</h2>
                <!-- We have not written anything inside the p tag, but still it will display the text because
                we have used v-text -->
                <p v-text="'Some text'"></p>
                <!-- Similarly, in v-html, we can use the v-html to use the html code. -->
                <!-- When you use this directive, make sure to sanitize the output so that we don't get a victim of
                cross-site scripting attacks. And that, of course could be a malicious script tags. -->
                <p v-html="'<strong>Some strong text</strong>'"></p>
                <!-- Directives generally start with v- and the directive name.
                v- is not the part of the directive name. It just tells the VueJS that this is not a normal attribute
                in normal HTML that you should ignore, instead this is a directive VueJS has to handle.  -->
            </div>
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h2>Custom Directives</h2>
                <!-- Using global directive created at main.js -->
                <p v-highlight:background.delayed="'red'">Color this</p>
                <!-- Using local directive created in the vue function -->
                <p
                    v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}"
                >
                    Color this, too.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives:{
            // local directives
            'local-highlight': {
                bind(el, binding, vnode){
                    var delay =0;
                    if(binding.modifiers['delayed']){
                        delay = 3000;
                    }
                    if(binding.modifiers['blink']){
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if(binding.arg == 'background'){
                                el.style.backgroundColor = currentColor;
                                }
                                else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay)
                        }, delay)
                    }
                    else{
                        setTimeout(() => {
                            if(binding.arg == 'background'){
                                el.style.backgroundColor = binding.value;
                            }
                            else {
                                el.style.color = binding.value;
                            }
                        }, delay)
                    }
                }
            }
        }
    }
</script>

<style>

</style>

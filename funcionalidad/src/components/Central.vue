<template>
    <div class="mt-5">
        <b-container>
            <b-row>
                <b-col sm="6" class="mb-5">
                    <img class="w-100" src="https://sigma-studios.s3-us-west-2.amazonaws.com/test/sigma-image.png" alt="sigma-image">
                </b-col>
                <b-col sm="6" >
                    <Formulario />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Formulario from './Formulario'
    export default {
        components: { Formulario }
    }
</script>
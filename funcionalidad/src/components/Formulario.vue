<template>
    <div class="registro">
        <b-container class="registro_container">
            <b-form class="formulario" @submit.prevent="create">
                <div class="text-left">
                    <b-row>
                        <b-col>
                            <b-form-group label="Departamento*" label-for="txtDep">
                                <b-form-select id="txtDep" :options="Object.keys(departamentos)" v-model="form.state" require></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group label="Ciudad*" label-for="txtCiudad">
                                <b-form-select id="txtCiudad" :options="departamentos[form.state]" v-model="form.city" require></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group label="Nombre*" label-for="txtNombre">
                                <b-form-input id="txtNombre" placeholder="Name" type="text" v-model="form.name" require></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group label="Correo*" label-for="txtEmail">
                                <b-form-input id="txtEmail" placeholder="Email" type="email" v-model="form.email" require></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </div>
                <b-row>
                    <b-col>
                        <b-button class="button" type="submit" pill>Enviar</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-container>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    import store from '../store'
    import ContactService from '../server/services/contact'
    import { validationHandler } from '../server/utils/middleware/validationHandler'
    import { createContactSchema } from '../server/utils/schemas/contact'
    const contactService = new ContactService()
    export default {
        data() {
            return {
                form: {
                    state: '',
                    city: '',
                    name: '',
                    email: ''
                }
            }
        },
        methods: {
            ...Vuex.mapActions(['getDepartamentos']),
            async create(){
                try {
                    const evaluation = validationHandler(this.form, createContactSchema)
                    if(evaluation === true){
                        await contactService.createContact(this.form)
                        this.showToast('Se ha ingresado el contacto correctamente', 'Tarea finalizada', 'success')
                        this.clear()
                    } else{
                        this.showToast(evaluation.message, 'Tarea abortada', 'warning')
                    }
                    
                } catch (error) {
                    this.showToast(error.message, 'Error', 'danger')
                }
                
            },
            showToast(msg, title, variant, autoDelay = 5000){
                this.$bvToast.toast(msg, { title, variant, autoDelay })
            },
            clear(){
                this.form.state = ''
                this.form.city = ''
                this.form.name = ''
                this.form.email = ''
            }
        },
        computed: { ...Vuex.mapState(['departamentos']) },
        created() {
            this.getDepartamentos();
        },
    }
</script>

<style lang="scss" scoped>
    .registro_container{
        font-weight: bold;
        border: 2px solid white;
        border-radius: 40px;
        padding: 30px;
        -webkit-box-shadow: 10px 7px 24px 5px rgba(0,0,0,0.22);
        -moz-box-shadow: 10px 7px 24px 5px rgba(0,0,0,0.22);
        box-shadow: 10px 7px 24px 5px rgba(0,0,0,0.22);
    }
    .button{
        background-color: #E03B65;
        border-radius: 30px;
        border: none;
        height: 50px;
        width: 150px;
        color: white;
        :hover(){
            background-color: #b93153;
        }
    }
</style>
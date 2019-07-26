import {mapGetters} from "vuex"
import Item from "models/core/Item"
import gql from "graphql-tag";
import store from "store"
import Vue from "vue"
import Component from 'vue-class-component'


@Component({
    name: 'play',
    template: require('templates/Class.pug'),  // a way to separate template
})
export default class Signup extends Vue {
    public email: string = ''
    public password: string = ''
    public name: string = ''
    public username: string = ''

    public signup(): void {
        this.$apollo
            .mutate({
                mutation: Mutation.createUser(),
                variables: {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    username: this.username,
                },
            })
            .then(async (response: any) => {
                console.log(response)
                alert(`${this.name} was registered successfully`)
                await this.signin()
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    public signin() {
        this.$apollo
            .mutate({
                mutation: Mutation.authenticate(),
                variables: {
                    email: this.email,
                    password: this.password,
                },
            })
            .then((response: any) => {
                localStorage.setItem('token', response.data.authenticate)
                this.$router.replace('/')
            })
            .catch((error: any) => {
                console.log(error)
            })
    }
}


<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 mt-4">
                <form @submit.prevent="validateBeforeSubmit" class="form-horizontal">

                    <div class="alert alert-danger" v-show="errors.any()">

                        <div v-for="err in errors.all()">
                           <li> {{ err }} </li>
                        </div>

                    </div>

                <div class="row">

                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="username">User name:</label>
                            <div class="col-sm-8">
                                <input type="text" name="username" v-validate="'required|checkuser'" id="username" v-model="username" class="form-control">
                                <span v-show="errors.has('username')" class="help text-danger">{{ errors.first('username') }}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-4" for="name">Name:</label>
                            <div class="col-sm-8">
                                <input type="text" name="name" data-vv-delay="1000" v-validate="'required|alpha'" id="name" v-model="name" data-vv-as="kalim" placeholder="Enter name" class="form-control">
                                <span v-show="errors.has('name')" class="help text-danger">{{ errors.first('name') }}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-4" for="email">Email:</label>
                            <div class="col-sm-8">
                                <input type="email" name="email" v-validate.disable="'required|email'" class="form-control" id="email" v-model="email" placeholder="Enter email">
                                <span v-show="errors.has('email')" class="help text-danger">{{ errors.first('email') }}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-4" for="alpha_num">alpha_num :</label>
                            <div class="col-sm-8">
                                <input type="text" name="alpha_num" v-validate="'required|alpha_num'" class="form-control" id="alpha_num" v-model="alpha_num">
                                <span v-show="errors.has('alpha_num')" class="help text-danger">{{ errors.first('alpha_num') }}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-4" data-vv-delay="500" for="mobile">Mobile:</label>
                            <div class="col-sm-8">
                                <input type="text" name="mobile" v-validate="'required|numeric|min:5|max:10'" class="form-control" id="mobile" v-model="mobile" placeholder="Enter mobile">
                                <span v-show="errors.has('mobile')" class="help text-danger">{{ errors.first('mobile') }}</span>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="url">Website:</label>
                            <div class="col-sm-8">
                                <input type="text" name="url" v-validate="'required|url'" class="form-control" id="url" v-model="url" placeholder="Enter Website">
                                <span v-show="errors.has('url')" class="help text-danger">{{ errors.first('url') }}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-4" for="loan_amount">Loan Amount:</label>
                            <div class="col-sm-8">
                                <input type="text" name="loan_amount" v-validate="'required|min_value:10000|max_value:99000000'" class="form-control" id="loan_amount" v-model="loan_amount" placeholder="Enter Loan amount">
                                <span v-show="errors.has('loan_amount')" class="help text-danger">{{ errors.first('loan_amount') }}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-4" for="country">Country:</label>
                            <div class="col-sm-8">
                                <select name="country" v-validate="'required'" class="form-control" id="country" v-model="country">
                                    <option v-for="country in countryList" v-bind:value="country.key">{{country.name}}</option>
                                </select>
                                <span v-show="errors.has('country')" class="help text-danger">{{ errors.first('country') }}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-4" for="password">Password:</label>
                            <div class="col-sm-8">
                                <input type="password" name="password" v-validate="'required|min:6|max:15'" class="form-control" ref="password" id="password" placeholder="Enter password">
                                <span v-show="errors.has('password')" class="help text-danger">{{ errors.first('password') }}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-4" for="confirm_password">Confirm Password:</label>
                            <div class="col-sm-8">
                                <input type="password" name="confirm_password" v-model="confirm_password" v-validate="'required|confirmed:password'" class="form-control" id="confirm_password" placeholder="Enter confirm Password">
                                <span v-show="errors.has('confirm_password')" class="help text-danger">{{ errors.first('confirm_password') }}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-4" for="confirm_password">Gender</label>
                            <div class="col-sm-8">
                                <div>
                                    <label class="radio-inline"><input type="radio" v-validate="'required|included:M,F'" value="M" name="gender"> Male</label>
                                    <label class="radio-inline"><input type="radio" name="gender" value="F"> Female</label>
                                </div>
                                <span v-show="errors.has('gender')" class="help text-danger">{{ errors.first('gender') }}</span>
                            </div>
                        </div>


                    </div>

                </div>





                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-8">
                            <div class="checkbox">
                                <label><input name="terms" id="terms" v-model="terms" v-validate="'required'" type="checkbox"> Accept Terms & conditions.</label>
                            </div>
                            <span v-show="errors.has('terms')" class="help text-danger">{{ errors.first('terms') }}</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-8">
                            <div class="checkbox">
                                <label><input type="checkbox"> Remember me</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-8">
                            <button class="btn btn-primary" :disabled="errors.any()" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    </div>
</template>

<script>

    import VeeValidate from 'vee-validate';
    /*  check if user name already taken  */

    //declare an array of some usernames user must not input
    var username = [
        'admin',
        'password',
        'administartor'
    ];

    //create new rule
    const newrule = {

        // will be added to default English messages.
        getMessage(field, params, data) {
            return (data && data.message) || 'Something went wrong';
        },

        // Returns a Boolean or a Promise.
        validate(value) {
            return new Promise(resolve => {
                resolve({
                    valid: username.includes(value.toLowerCase()) ? false : !! value,
                    data: { message: `${value} has already been taken` }
                });
            });
        }
    };

    VeeValidate.Validator.extend('checkuser',newrule);



    /* this is for custom msg */
    const dict = {
        custom: {
            email: {
                required: 'Your email is empty'
            },
            /*name: {
                required: () => 'Your name is empty'
            },*/
            gender: {
                required: () => 'Select your Gender.'
            }
        }
    };

    export default {
        data: function () {
            return {
                name: '',
                email: '',
                mobile: '',
                url: '',
                password : '',
                confirm_password : '',
                terms : '',
                country : '',
                alpha_num : '',
                username : '',
                loan_amount : '',
                countryList : [
                                {key:'', name:'Select Country'},
                                {key:'IN', name:'India'},
                                {key:'Nepal', name:'Nepal'},
                                {key:'USA', name:'USA'},
                                {key:'UAE', name:'UAE'},
                                {key:'China', name:'China'},
                                {key:'Bhutan', name:'Bhutan'},
                              ],
            }
        },
        mounted() {
            this.$validator.localize('en', dict); // this is for custom msg
        },
        methods: {
            validateBeforeSubmit() {


               /* this.$validator
                    .validateAll()
                    .then(function(response) {
                        // Validation success if response === true
                    })
                    .catch(function(e) {
                        // Catch errors
                    });*/



                this.$validator
                    .validateAll()
                    .then((result) => {

                        console.log(result);

                        if (result) {
                            alert('Form Submitted!');
                            return;
                        }

                        if (!this.errors.any()) {
                            console.log('Correct these errors!');
                            // call form submission logic
                        }

                    console.log('Correct these errors!');
                    //alert('Correct them errors!');
                });


            }
        }
    }
</script>
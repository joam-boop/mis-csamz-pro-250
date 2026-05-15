<template>
    <div class="container-fluid page-bg py-5">

        <!-- HEADER -->
        <div class="text-center text-white mb-4">
            <h2 class="joam">Student Registration Form</h2>
            <p>MIS-COLLEGIO SANTO ANTONIO MARIA ZACCARIA</p>
        </div>

        <!-- FORM CARD -->
        <div class="form-card
        ">

            <form @submit.prevent="submitForm">

                <h4 class="section-title">Personal Information</h4>

                <div class="row">

                    <div class="col-md-4 mb-3">
                        <label class="form-label"><b>First Name</b></label>
                        <input v-model="form.firstName" class="form-control" placeholder="enter First name" required>
                    </div>

                    <div class="col-md-4 mb-3">
                        <label class="form-label"><b>Middle Name</b></label>
                        <input v-model="form.middleName" class="form-control" placeholder="enter Middle name">
                    </div>

                    <div class="col-md-4 mb-3">
                        <label class="form-label"><b>Last Name</b></label>
                        <input v-model="form.lastName" class="form-control" placeholder="enter Last name" required>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label class="form-label"><b>Father's Name</b></label>
                        <input v-model="form.fatherName" class="form-control" placeholder="enter Father's name" required>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label class="form-label"><b>Mother's Name</b></label>
                        <input v-model="form.motherName" class="form-control" placeholder="enter Mother's name" required>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label class="form-label"><b>Parent Phone number</b></label>
                        <input v-model="form.ParentPhonenumber" class="form-control" placeholder="+250 7xx xxx xxx" required>
                    </div>
                    

                    <div class="col-md-4 mb-3">
                        <label class="form-label"><b>Gender</b></label>
                        <select v-model="form.gender" class="form-select">

                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div class="col-md-4 mb-3">
                        <label class="form-label"><b>Email</b></label>
                        <input v-model="form.email" class="form-control" placeholder="Example@school.com" required>
                    </div>

                    <div class="col-md-6 mb-3">
                        <label class="form-label"><b>Password</b></label>
                        <input type="password" v-model="form.password" class="form-control" placeholder="enter Password" required>
                    </div>

                    <div class="col-md-6 mb-3">
                        <label class="form-label"><b>Confirm Password</b></label>
                        <input type="password" v-model="form.confirmPassword" class="form-control" placeholder="confirm Password" required>
                    </div>

                </div>

                <hr>

                <!-- JOB -->
                <h4 class="section-title">Select Trade</h4>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label"><b>Trade</b></label>
                        <select v-model="form.trade" class="form-select">
                            <option value="">Select</option>
                            <option v-for="trade in trades" :key="trade">
                                {{ trade }}
                            </option>
                        </select>
                    </div>

                </div>

                <hr>

                <!-- EMPLOYMENT -->
                <h4 class="section-title">Birth Information</h4>

                <div class="row">

                    <!-- ONE LABEL -->
      <div class="mb-3">
        <label class="form-label"><b>Date of Birth</b></label>

        <div class="row">

          <!-- DAY -->
          <div class="col-md-4">
            <select v-model="form.day" class="form-control" required>
              <option value="">Day</option>
              <option v-for="d in 31" :key="d" :value="d">
                {{ d }}
              </option>
            </select>
          </div>

          <!-- MONTH -->
          <div class="col-md-4">
            <select v-model="form.month" class="form-control" required>
              <option value="">Month</option>
              <option v-for="(m, i) in months" :key="i" :value="m">
                {{ m }}
              </option>
            </select>
          </div>

          <!-- YEAR -->
          <div class="col-md-4">
            <select v-model="form.year" class="form-control" required>
              <option value="">Year</option>
              <option v-for="y in years" :key="y" :value="y">
                {{ y }}
              </option>
            </select>
          </div>

        </div>
      </div>

      <!-- SHOW RESULT -->
      <p>
        DOB: <b>{{ form.day }} / {{ form.month }} / {{ form.year }}</b>
      </p>
<hr>

               <div class="col-md-4 mb-3">
  <label class="form-label">
    <b>Phone Number</b>
  </label>

  <input
    v-model="form.phone"
    class="form-control"
    placeholder="+2507..."
    required
  >
</div>    

                    <h4 class="section-title">Location</h4>

                    <div class="col-md-6 mb-3">
                        <label class="form-label"><b>District</b></label>
                        <select v-model="form.district" class="form-select" required>
    <option disabled value="">Select District</option>

    <!-- Kigali City -->
    <option>Nyarugenge</option>
    <option>Gasabo</option>
    <option>Kicukiro</option>

    <!-- Northern Province -->
    <option>Musanze</option>
    <option>Burera</option>
    <option>Gakenke</option>
    <option>Gicumbi</option>
    <option>Rulindo</option>

    <!-- Southern Province -->
    <option>Huye</option>
    <option>Gisagara</option>
    <option>Nyanza</option>
    <option>Ruhango</option>
    <option>Nyaruguru</option>
    <option>Nyamagabe</option>
    <option>Muhanga</option>
    <option>Kamonyi</option>

    <!-- Eastern Province -->
    <option>Rwamagana</option>
    <option>Nyagatare</option>
    <option>Gatsibo</option>
    <option>Kayonza</option>
    <option>Kirehe</option>
    <option>Ngoma</option>
    <option>Bugesera</option>

    <!-- Western Province -->
    <option>Rubavu</option>
    <option>Karongi</option>
    <option>Rutsiro</option>
    <option>Nyabihu</option>
    <option>Ngororero</option>
    <option>Rusizi</option>
    <option>Nyamasheke</option>
</select>
                    </div>

                </div>

                <!-- SUBMIT -->
                <div class="text-center mt-3">
                    <button class="btn btn-primary px-4">
                        Register Student
                    </button>
                </div>

            </form>

        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import { routeLocationKey } from 'vue-router'

// SINGLE FORM ONLY
const form = reactive({
    firstName: '',
    middleName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
    trade: '',
    district: '',

    // BIRTH DATE
    day: '',
    month: '',
    year: '',
    phone: '',
    ParentPhonenumber: '',
})

// TRADES
const trades = [
    "Software development(SWD)",
    "Computer system and architecture(CSA)",
    "Plumbing technology(PLT)",
    "Wood technology(WOT)",
    "Building construction(BDC)"
]

// MONTHS
const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
]

// YEARS
const currentYear = new Date().getFullYear()
const years = []

for (let y = currentYear; y >= 1950; y--) {
  years.push(y)
}

// SUBMIT
function submitForm(){

  // PASSWORD CHECK
  if(form.password !== form.confirmPassword){
    console.log("Passwords do not match")
    return
  }

  // CREATE STUDENT REQUEST
  const newStudent = {

    id: Date.now(),

    firstName: form.firstName,
    middleName: form.middleName,
    lastName: form.lastName,

    fatherName: form.fatherName,
    motherName: form.motherName,

    email: form.email,
    gender: form.gender,

    password: form.password,

    trade: form.trade,
    district: form.district,

    day: form.day,
    month: form.month,
    year: form.year,

    role: "student",

    type: "student",

    status: "pending",
    phone: form.phone,
    ParentPhonenumber: form.ParentPhonenumber,
  }

  // GET OLD STUDENT REQUESTS
  const oldRequests =
    JSON.parse(
      localStorage.getItem("users")
    ) || []

  // ADD NEW STUDENT
  oldRequests.push(newStudent)

  // SAVE REQUESTS
  localStorage.setItem(
    "users",
    JSON.stringify(oldRequests)
  )

  console.log(
    "Student Request Submitted Successfully"
  )

  // RESET FORM
  form.firstName = ''
  form.middleName = ''
  form.lastName = ''
  form.fatherName = ''
  form.motherName = ''
  form.email = ''
  form.gender = ''
  form.password = ''
  form.confirmPassword = ''
  form.trade = ''
  form.district = ''
  form.day = ''
  form.month = ''
  form.year = ''
}
</script>
<style scoped>

.page-bg {
  background: url('../src/assets/images/students.jpg') center/cover no-repeat;
}
.container{
    position: relative;
    z-index: 2;
}
.joam {
    color:purple;
}

.form-card{
    background: url('../src/assets/images/1.jpg') center/cover no-repeat;
    max-width: 1000px;
    margin: auto;
    padding: 35px;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.025);
}

.section-title {
   color: purple;
   font-weight: 700;
   border-left: 5px solid palegreen;
   padding-left: 10px;
   margin-bottom: 20px;
}
.form-label{
    font-size: 18px;
    font-weight: 600px;

}
.form-control, .form-select{
    font-size: 16px;
    padding: 10px;
    border-radius: 12px;
    border: none;
    background: rgba(255, 255, 255, 0.85);
}
.btn-primary{
    background-color: #0b2c4d;
    border: none;
    font-weight: 600px;
    border-radius: 20px;
    padding: 8px 5px 8px ;
}
</style>


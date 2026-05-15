<script setup>
import { ref } from "vue"

const firstName = ref("")
const lastName = ref("")
const trade = ref("")
const email = ref("")

function submitForm(){

  const newStaff = {
    id: Date.now(),
    firstName:firstName.value,
    lastName:lastName.value,
    trade:trade.value,
    email:email.value,
    type:"staff",
    status:"pending"
  }

  const oldData = JSON.parse(
    localStorage.getItem("staffRequests")
  ) || []

  oldData.push(newStaff)

  localStorage.setItem(
    "staffRequests",
    JSON.stringify(oldData)
  )

  alert("Request submitted")
}
</script>
<script setup>
import { ref } from "vue"

const firstName = ref("")
const lastName = ref("")
const level = ref("")
const trade = ref("")

function submitForm(){

  const newStudent = {
    id: Date.now(),
    firstName:firstName.value,
    lastName:lastName.value,
    level:level.value,
    trade:trade.value,
    type:"student",
    status:"pending"
  }

  const oldData = JSON.parse(
    localStorage.getItem("studentRequests")
  ) || []

  oldData.push(newStudent)

  localStorage.setItem(
    "studentRequests",
    JSON.stringify(oldData)
  )

  alert("Student request submitted")
}
</script>
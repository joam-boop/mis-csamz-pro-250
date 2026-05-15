<script setup>
import { ref, onMounted } from 'vue'

const students = ref([])

const headers = [
  { title: 'First Name', key:'firstName' },
  { title: 'Last Name', key:'lastName' },
  { title: 'Level', key:'level' },
  { title: 'Trade', key:'trade' },
  { title: 'Status', key:'status' },
  { title: 'Actions', key:'actions' }
]

onMounted(()=>{
  students.value = JSON.parse(
    localStorage.getItem("studentRequests")
  ) || []
})

function approve(item){
  item.status = "valid"

  localStorage.setItem(
    "studentRequests",
    JSON.stringify(students.value)
  )
}

function reject(item){
  item.status = "invalid"

  localStorage.setItem(
    "studentRequests",
    JSON.stringify(students.value)
  )
}
</script>
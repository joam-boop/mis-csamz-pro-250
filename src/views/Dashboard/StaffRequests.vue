<script setup>
import { ref, onMounted } from 'vue'

const staff = ref([])

const headers = [
  { title: 'First Name', key:'firstName' },
  { title: 'Last Name', key:'lastName' },
  { title: 'Trade', key:'trade' },
  { title: 'Email', key:'email' },
  { title: 'Status', key:'status' },
  { title: 'Actions', key:'actions' }
]

onMounted(()=>{

  staff.value = JSON.parse(
    localStorage.getItem("staffRequests")
  ) || []

})

function approve(item){

  item.status = "valid"

  localStorage.setItem(
    "staffRequests",
    JSON.stringify(staff.value)
  )
}

function reject(item){

  item.status = "invalid"

  localStorage.setItem(
    "staffRequests",
    JSON.stringify(staff.value)
  )
}
</script>
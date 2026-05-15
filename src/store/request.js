export function getStudentRequests(){
  return JSON.parse(
    localStorage.getItem("studentRequests")
  ) || []
}

export function getStaffRequests(){
  return JSON.parse(
    localStorage.getItem("staffRequests")
  ) || []
}

export function getAllRequests(){
  return [
    ...getStudentRequests(),
    ...getStaffRequests()
  ]
}
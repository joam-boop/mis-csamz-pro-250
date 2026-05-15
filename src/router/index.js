import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login/LoginView.vue'

import StudentView from '../views/student/StudentView.vue'
import StaffView from '../views/staff/StaffView.vue'

import StudentDashboard from '../views/Dashboard/StudentDashboard.vue'
import TeacherDashboard from '../views/Dashboard/TeacherDashboard.vue'
import HTDashboard from '../views/Dashboard/HTDashboard.vue'
import DOSDashboard from '../views/Dashboard/DOSDashboard.vue'
import DODDashboard from '../views/Dashboard/DODDashboard.vue'
import ITDashboard from '../views/Dashboard/ITDashboard.vue'
import LogisticDashboard from '../views/Dashboard/LogisticDashboard.vue'

import AboutView from '../views/About/AboutView.vue'

import StudentRequests from '../views/Dashboard/StudentRequests.vue'
import StaffRequests from '../views/Dashboard/StaffRequests.vue'
import AllRequestsDashboard from '../views/Dashboard/AllRequestsDashboard.vue'

import StudentForm from '../views/Dashboard/StudentForm.vue'
import StaffForm from '../views/Dashboard/StaffForm.vue'
import AttendanceManagement from '../views/Dashboard/AttendanceManagement.vue'
import ClassManagement from '../views/Dashboard/ClassManagement.vue'
import CourseManagement from '../views/Dashboard/CourseManagement.vue'
import CourseAssignment from '../views/Dashboard/CourseAssignment.vue'
import AttendanceTable from '../components/tables/AttendanceTable.vue'
import CourseTable from '../components/tables/CourseTable.vue'
import TimeTable from '../views/Dashboard/TimeTable.vue'
import AddMarks from '../views/Dashboard/AddMarks.vue'
import Reports from '../views/Dashboard/Reports.vue'
import Messages from '../views/Dashboard/Messages.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,

    children: [

      {
        path:'',
        component: HomeView
      },

      {
        path:'/login',
        component: LoginView
      },

      {
        path:'/students',
        component: StudentView
      },

      {
        path:'/staff',
        component: StaffView
      },

      {
        path:'/student-dashboard',
        component: StudentDashboard
      },

      {
        path:'/teacher-dashboard',
        component: TeacherDashboard
      },

      {
        path:'/ht-dashboard',
        component: HTDashboard
      },

      {
        path:'/dos-dashboard',
        component: DOSDashboard
      },

      {
        path:'/dod-dashboard',
        component: DODDashboard
      },

      {
        path:'/it-dashboard',
        component: ITDashboard
      },

      {
        path:'/logistic-dashboard',
        component: LogisticDashboard
      },

      {
        path:'/about',
        component: AboutView
      },

      {
        path:'/student-requests',
        component: StudentRequests
      },

      {
        path:'/staff-request',
        component: StaffRequests
      },

      {
        path:'/dashboard/all',
        component: AllRequestsDashboard
      },

      {
        path:'/student-form',
        component: StudentForm
      },

      {
        path:'/staff-form',
        component: StaffForm
      },{
  path: '/course-management',
  component: CourseManagement
},
{
  path: '/class-management',
  component: ClassManagement
},
{
  path: '/attendance-management',
  component: AttendanceManagement
},{
  path: '/course-assignment',
  component: CourseAssignment
},{
  path: '/attendance-table',
  component: AttendanceTable
},{
  path: '/course-table',
  component: CourseTable
},{
  path:'/time-table',
  component: TimeTable
},{
  path:'/add-marks',
  component: AddMarks
},{
  path:'/reports',
  component: Reports
},{
  path:'/messages',
  component: Messages
}

      

    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/* ROUTE GUARD */
router.beforeEach((to, from, next) => {

  const admin = JSON.parse(
    localStorage.getItem("loggedInUser")
  )

  const protectedRoutes = [
    "/dos-dashboard",
    "/ht-dashboard",
    "/dashboard/all"
  ]

  if(
    protectedRoutes.includes(to.path)
    && !admin
  ){
    return next("/login")
  }

  next()
})

export default router
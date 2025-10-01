import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  BanknoteIcon,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Clock,
  FileText,
  PiggyBank,
  Users
} from 'lucide-react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as React from "react";

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOrganizationOpen, setIsOrganizationOpen] = useState(true)


  const Dashboard = () => (
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2.5 5.43945C2.5 4.77641 2.76339 4.14053 3.23223 3.67169C3.70107 3.20285 4.33696 2.93945 5 2.93945H6.875C7.53804 2.93945 8.17393 3.20285 8.64277 3.67169C9.11161 4.14053 9.375 4.77641 9.375 5.43945V7.31445C9.375 7.97749 9.11161 8.61338 8.64277 9.08222C8.17393 9.55106 7.53804 9.81445 6.875 9.81445H5C4.33696 9.81445 3.70107 9.55106 3.23223 9.08222C2.76339 8.61338 2.5 7.97749 2.5 7.31445V5.43945ZM10.625 5.43945C10.625 4.77641 10.8884 4.14053 11.3572 3.67169C11.8261 3.20285 12.462 2.93945 13.125 2.93945H15C15.663 2.93945 16.2989 3.20285 16.7678 3.67169C17.2366 4.14053 17.5 4.77641 17.5 5.43945V7.31445C17.5 7.97749 17.2366 8.61338 16.7678 9.08222C16.2989 9.55106 15.663 9.81445 15 9.81445H13.125C12.462 9.81445 11.8261 9.55106 11.3572 9.08222C10.8884 8.61338 10.625 7.97749 10.625 7.31445V5.43945ZM2.5 13.5645C2.5 12.9014 2.76339 12.2655 3.23223 11.7967C3.70107 11.3278 4.33696 11.0645 5 11.0645H6.875C7.53804 11.0645 8.17393 11.3278 8.64277 11.7967C9.11161 12.2655 9.375 12.9014 9.375 13.5645V15.4395C9.375 16.1025 9.11161 16.7384 8.64277 17.2072C8.17393 17.6761 7.53804 17.9395 6.875 17.9395H5C4.33696 17.9395 3.70107 17.6761 3.23223 17.2072C2.76339 16.7384 2.5 16.1025 2.5 15.4395V13.5645ZM10.625 13.5645C10.625 12.9014 10.8884 12.2655 11.3572 11.7967C11.8261 11.3278 12.462 11.0645 13.125 11.0645H15C15.663 11.0645 16.2989 11.3278 16.7678 11.7967C17.2366 12.2655 17.5 12.9014 17.5 13.5645V15.4395C17.5 16.1025 17.2366 16.7384 16.7678 17.2072C16.2989 17.6761 15.663 17.9395 15 17.9395H13.125C12.462 17.9395 11.8261 17.6761 11.3572 17.2072C10.8884 16.7384 10.625 16.1025 10.625 15.4395V13.5645Z"
              fill="black" fill-opacity="0.4"/>
      </svg>


  );

  const MySkillsIcon = () => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_7660_4501)">
          <path d="M10.3086 7.40039H14.6836" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path d="M5.31641 7.40039L5.94141 8.02539L7.81641 6.15039" stroke="#7C7C7C" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.3086 13.2339H14.6836" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path d="M5.31641 13.2339L5.94141 13.8589L7.81641 11.9839" stroke="#7C7C7C" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
          <path
              d="M7.49935 18.3332H12.4993C16.666 18.3332 18.3327 16.6665 18.3327 12.4998V7.49984C18.3327 3.33317 16.666 1.6665 12.4993 1.6665H7.49935C3.33268 1.6665 1.66602 3.33317 1.66602 7.49984V12.4998C1.66602 16.6665 3.33268 18.3332 7.49935 18.3332Z"
              stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_7660_4501">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>

  );
  const MyProject = () => (
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.25 4.51758C6.25 3.85454 6.51339 3.21865 6.98223 2.74981C7.45107 2.28097 8.08696 2.01758 8.75 2.01758H11.25C11.913 2.01758 12.5489 2.28097 13.0178 2.74981C13.4866 3.21865 13.75 3.85454 13.75 4.51758V4.68841C14.5275 4.75925 15.2975 4.85258 16.0617 4.96675C17.2733 5.14841 18.125 6.20258 18.125 7.39758V9.92508C18.125 10.9342 17.5133 11.8851 16.5117 12.2184C14.4115 12.9155 12.2128 13.2698 10 13.2676C7.725 13.2676 5.53583 12.8992 3.48833 12.2184C2.48667 11.8851 1.875 10.9342 1.875 9.92508V7.39758C1.875 6.20258 2.72667 5.14758 3.93833 4.96675C4.70608 4.85193 5.47695 4.75911 6.25 4.68841V4.51758ZM12.5 4.51758V4.59258C10.8349 4.49145 9.16513 4.49145 7.5 4.59258V4.51758C7.5 4.18606 7.6317 3.86812 7.86612 3.63369C8.10054 3.39927 8.41848 3.26758 8.75 3.26758H11.25C11.5815 3.26758 11.8995 3.39927 12.1339 3.63369C12.3683 3.86812 12.5 4.18606 12.5 4.51758ZM10 11.3926C10.1658 11.3926 10.3247 11.3267 10.4419 11.2095C10.5592 11.0923 10.625 10.9333 10.625 10.7676C10.625 10.6018 10.5592 10.4428 10.4419 10.3256C10.3247 10.2084 10.1658 10.1426 10 10.1426C9.83424 10.1426 9.67527 10.2084 9.55806 10.3256C9.44085 10.4428 9.375 10.6018 9.375 10.7676C9.375 10.9333 9.44085 11.0923 9.55806 11.2095C9.67527 11.3267 9.83424 11.3926 10 11.3926Z"
              fill="#999999"/>
        <path
            d="M2.5 15.4755V13.1455C2.68985 13.2494 2.88872 13.3358 3.09417 13.4038C5.32141 14.1433 7.65321 14.5192 10 14.5172C12.41 14.5172 14.7333 14.1272 16.9058 13.4047C17.1158 13.3347 17.3142 13.2472 17.5 13.1455V15.4755C17.5 16.6855 16.6275 17.7488 15.3975 17.9113C13.6308 18.1463 11.8292 18.2672 10 18.2672C8.19496 18.2675 6.39187 18.1487 4.6025 17.9113C3.3725 17.7488 2.5 16.6855 2.5 15.4755Z"
            fill="#999999"/>
      </svg>


  );
  const ChangePassword = () => (
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.0675 2.375C9.30338 2.375 8.65172 2.9275 8.52588 3.68083L8.37755 4.57417C8.36088 4.67417 8.28172 4.79083 8.13005 4.86417C7.84451 5.00143 7.56983 5.16022 7.30838 5.33917C7.17005 5.435 7.03005 5.44417 6.93338 5.40833L6.08588 5.09C5.73942 4.9602 5.35813 4.95755 5.0099 5.08253C4.66166 5.20751 4.36907 5.45201 4.18422 5.7725L3.41588 7.10333C3.23096 7.42363 3.16565 7.79915 3.23156 8.16307C3.29748 8.527 3.49036 8.85575 3.77588 9.09083L4.47588 9.6675C4.55505 9.7325 4.61755 9.85833 4.60422 10.0258C4.58047 10.3418 4.58047 10.6591 4.60422 10.975C4.61672 11.1417 4.55505 11.2683 4.47672 11.3333L3.77588 11.91C3.49036 12.1451 3.29748 12.4738 3.23156 12.8378C3.16565 13.2017 3.23096 13.5772 3.41588 13.8975L4.18422 15.2283C4.3692 15.5487 4.66185 15.793 5.01007 15.9178C5.3583 16.0426 5.73951 16.0399 6.08588 15.91L6.93505 15.5917C7.03088 15.5558 7.17088 15.5658 7.31005 15.66C7.57005 15.8383 7.84422 15.9975 8.13088 16.135C8.28255 16.2083 8.36172 16.325 8.37838 16.4267L8.52672 17.3192C8.65255 18.0725 9.30422 18.625 10.0684 18.625H11.605C12.3684 18.625 13.0209 18.0725 13.1467 17.3192L13.295 16.4258C13.3117 16.3258 13.39 16.2092 13.5425 16.135C13.8292 15.9975 14.1034 15.8383 14.3634 15.66C14.5025 15.565 14.6425 15.5558 14.7384 15.5917L15.5884 15.91C15.9346 16.0394 16.3155 16.0418 16.6634 15.9168C17.0113 15.7919 17.3036 15.5476 17.4884 15.2275L18.2576 13.8967C18.4425 13.5764 18.5078 13.2009 18.4419 12.8369C18.3759 12.473 18.1831 12.1443 17.8976 11.9092L17.1976 11.3325C17.1184 11.2675 17.0559 11.1417 17.0692 10.9742C17.0929 10.6582 17.0929 10.3409 17.0692 10.025C17.0559 9.85833 17.1184 9.73167 17.1967 9.66667L17.8967 9.09C18.4867 8.605 18.6392 7.765 18.2576 7.1025L17.4892 5.77167C17.3042 5.45132 17.0116 5.207 16.6634 5.08218C16.3151 4.95735 15.9339 4.96013 15.5875 5.09L14.7375 5.40833C14.6425 5.44417 14.5025 5.43417 14.3634 5.33917C14.1022 5.16025 13.8278 5.00145 13.5425 4.86417C13.39 4.79167 13.3117 4.675 13.295 4.57417L13.1459 3.68083C13.0851 3.31589 12.8968 2.98435 12.6145 2.74522C12.3322 2.5061 11.9742 2.37491 11.6042 2.375H10.0684H10.0675ZM10.8359 13.625C11.6647 13.625 12.4595 13.2958 13.0456 12.7097C13.6316 12.1237 13.9609 11.3288 13.9609 10.5C13.9609 9.6712 13.6316 8.87634 13.0456 8.29029C12.4595 7.70424 11.6647 7.375 10.8359 7.375C10.0071 7.375 9.21223 7.70424 8.62617 8.29029C8.04012 8.87634 7.71088 9.6712 7.71088 10.5C7.71088 11.3288 8.04012 12.1237 8.62617 12.7097C9.21223 13.2958 10.0071 13.625 10.8359 13.625Z"
                fill="black" fill-opacity="0.4"/>
      </svg>
  );

    const MyExpenses = () => (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 6.50977C9.50272 6.50977 9.02581 6.70731 8.67417 7.05894C8.32254 7.41057 8.125 7.88748 8.125 8.38477C8.125 8.88205 8.32254 9.35896 8.67417 9.71059C9.02581 10.0622 9.50272 10.2598 10 10.2598C10.4973 10.2598 10.9742 10.0622 11.3258 9.71059C11.6775 9.35896 11.875 8.88205 11.875 8.38477C11.875 7.88748 11.6775 7.41057 11.3258 7.05894C10.9742 6.70731 10.4973 6.50977 10 6.50977Z"
                fill="#999999"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.25 4.32227C1.25 3.45893 1.95 2.75977 2.8125 2.75977H17.1875C18.05 2.75977 18.75 3.45977 18.75 4.32227V12.4473C18.75 13.3106 18.05 14.0098 17.1875 14.0098H2.8125C2.60731 14.0098 2.40413 13.9694 2.21456 13.8908C2.02499 13.8123 1.85274 13.6972 1.70765 13.5521C1.56255 13.407 1.44746 13.2348 1.36894 13.0452C1.29042 12.8556 1.25 12.6525 1.25 12.4473V4.32227ZM6.875 8.38477C6.875 7.55596 7.20424 6.76111 7.79029 6.17506C8.37634 5.58901 9.1712 5.25977 10 5.25977C10.8288 5.25977 11.6237 5.58901 12.2097 6.17506C12.7958 6.76111 13.125 7.55596 13.125 8.38477C13.125 9.21357 12.7958 10.0084 12.2097 10.5945C11.6237 11.1805 10.8288 11.5098 10 11.5098C9.1712 11.5098 8.37634 11.1805 7.79029 10.5945C7.20424 10.0084 6.875 9.21357 6.875 8.38477ZM15.625 7.75977C15.4592 7.75977 15.3003 7.82561 15.1831 7.94282C15.0658 8.06003 15 8.21901 15 8.38477V8.39143C15 8.73643 15.28 9.01643 15.625 9.01643H15.6317C15.7974 9.01643 15.9564 8.95058 16.0736 8.83337C16.1908 8.71616 16.2567 8.55719 16.2567 8.39143V8.38477C16.2567 8.21901 16.1908 8.06003 16.0736 7.94282C15.9564 7.82561 15.7974 7.75977 15.6317 7.75977H15.625ZM3.75 8.38477C3.75 8.21901 3.81585 8.06003 3.93306 7.94282C4.05027 7.82561 4.20924 7.75977 4.375 7.75977H4.38167C4.54743 7.75977 4.7064 7.82561 4.82361 7.94282C4.94082 8.06003 5.00667 8.21901 5.00667 8.38477V8.39143C5.00667 8.55719 4.94082 8.71616 4.82361 8.83337C4.7064 8.95058 4.54743 9.01643 4.38167 9.01643H4.375C4.20924 9.01643 4.05027 8.95058 3.93306 8.83337C3.81585 8.71616 3.75 8.55719 3.75 8.39143V8.38477Z"
                  fill="#999999"/>
            <path
                d="M1.875 15.2598C1.70924 15.2598 1.55027 15.3256 1.43306 15.4428C1.31585 15.56 1.25 15.719 1.25 15.8848C1.25 16.0505 1.31585 16.2095 1.43306 16.3267C1.55027 16.4439 1.70924 16.5098 1.875 16.5098C6.375 16.5098 10.7333 17.1114 14.875 18.2389C15.8667 18.5089 16.875 17.7739 16.875 16.7223V15.8848C16.875 15.719 16.8092 15.56 16.6919 15.4428C16.5747 15.3256 16.4158 15.2598 16.25 15.2598H1.875Z"
                fill="black" fill-opacity="0.4"/>
      </svg>


  );
  const MyInvoice = () => (
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M9.55583 7.68121C9.745 7.53121 9.97 7.42204 10.2108 7.35287V9.68204C9.97311 9.61695 9.75054 9.50566 9.55583 9.35454C9.2275 9.09371 9.10083 8.78704 9.10083 8.51787C9.10083 8.24871 9.2275 7.94204 9.55583 7.68121ZM11.4608 13.4445V11.0912C11.75 11.162 12.0142 11.2812 12.2283 11.442C12.5842 11.7087 12.7108 12.0137 12.7108 12.2679C12.7108 12.522 12.5842 12.827 12.2283 13.0937C11.9986 13.2608 11.7376 13.3807 11.4608 13.4445Z"
              fill="black" fill-opacity="0.4"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.836 1.36768C5.85131 1.36768 1.81079 5.40819 1.81079 10.3929C1.81079 15.3776 5.85131 19.4181 10.836 19.4181C15.8207 19.4181 19.8612 15.3776 19.8612 10.3929C19.8612 5.40819 15.8207 1.36768 10.836 1.36768ZM11.5303 4.83891C11.5303 4.65479 11.4571 4.4782 11.3269 4.348C11.1967 4.21781 11.0201 4.14466 10.836 4.14466C10.6519 4.14466 10.4753 4.21781 10.3451 4.348C10.2149 4.4782 10.1418 4.65479 10.1418 4.83891V5.59425C9.56124 5.69194 9.01412 5.93242 8.54962 6.29405C7.89054 6.81798 7.52028 7.5437 7.52028 8.31015C7.52028 9.07752 7.89054 9.80232 8.55054 10.3262C9.01523 10.6965 9.57062 10.9251 10.1418 11.026V13.7827C9.83427 13.7114 9.54431 13.5789 9.28922 13.393L8.47556 12.782C8.40263 12.7273 8.31963 12.6875 8.23131 12.6649C8.143 12.6423 8.05109 12.6373 7.96083 12.6502C7.77856 12.6762 7.61409 12.7736 7.50362 12.9209C7.39314 13.0682 7.34571 13.2533 7.37175 13.4356C7.39779 13.6179 7.49517 13.7823 7.64247 13.8928L8.45612 14.5038C8.9495 14.874 9.53822 15.1008 10.1418 15.198V15.9469C10.1418 16.131 10.2149 16.3076 10.3451 16.4378C10.4753 16.568 10.6519 16.6411 10.836 16.6411C11.0201 16.6411 11.1967 16.568 11.3269 16.4378C11.4571 16.3076 11.5303 16.131 11.5303 15.9469V15.1971C12.1399 15.1055 12.7182 14.8676 13.2159 14.5038C13.9055 13.9863 14.3072 13.2597 14.3072 12.4756C14.3072 11.6916 13.9055 10.9649 13.2159 10.4475C12.7184 10.0833 12.14 9.84507 11.5303 9.75326V7.01792C11.7987 7.09383 12.0477 7.21509 12.2578 7.38171L12.642 7.68718C12.7862 7.8017 12.97 7.85424 13.153 7.83324C13.336 7.81223 13.5031 7.7194 13.6176 7.57517C13.7321 7.43094 13.7847 7.24712 13.7637 7.06415C13.7427 6.88118 13.6498 6.71405 13.5056 6.59952L13.1215 6.29405C12.6571 5.93289 12.1104 5.69274 11.5303 5.59518V4.83891Z"
                fill="black" fill-opacity="0.4"/>
      </svg>
  );
    const Endorsement = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15 9.16785C16.1625 9.00451 17.0575 8.00785 17.06 6.80035C17.06 5.61035 16.1925 4.62368 15.055 4.43701"
                stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M16.5352 11.9626C17.661 12.131 18.4468 12.5251 18.4468 13.3376C18.4468 13.8968 18.0768 14.2601 17.4785 14.4885"
                stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M10.001 12.3071C7.32266 12.3071 5.03516 12.713 5.03516 14.3338C5.03516 15.9538 7.30849 16.3713 10.001 16.3713C12.6793 16.3713 14.966 15.9696 14.966 14.348C14.966 12.7263 12.6935 12.3071 10.001 12.3071Z"
                  stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M10.0009 9.99391C11.7584 9.99391 13.1834 8.56974 13.1834 6.81141C13.1834 5.05391 11.7584 3.62891 10.0009 3.62891C8.24338 3.62891 6.81838 5.05391 6.81838 6.81141C6.81172 8.56307 8.22588 9.98807 9.97755 9.99391H10.0009Z"
                  stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M4.99945 9.16784C3.83612 9.00451 2.94195 8.00784 2.93945 6.80034C2.93945 5.61034 3.80695 4.62368 4.94445 4.43701"
                stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M3.4644 11.9626C2.33857 12.131 1.55273 12.5251 1.55273 13.3376C1.55273 13.8968 1.92273 14.2601 2.52107 14.4885"
                stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>


    );
    const MyProfile = () => (
        <div className={'w-[16px] h-[16px] overflow-hidden rounded-full'}>
            <img src={"assets/img/profile-img.png"}
                 alt="img" className={'w-15'}/>
        </div>


    );

    const dashboardItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: Dashboard,
            path: '/',
            isActive: location.pathname === '/'
        }
    ]
    const navigationItems = [
        {
            id: 'profile',
            label: 'My Skills',
            icon: MySkillsIcon,
            path: '/profile',
            isActive: location.pathname === '/profile'
        }
    ]

    const organizationItems = [
        {
            id: 'summary',
            label: 'Summary',
            path: '/summary',
            isActive: location.pathname === '/summary'
    },
    {
      id: 'my-timesheets',
      label: 'My Timesheets',
      path: '/my-timesheets',
      isActive: location.pathname === '/my-timesheets'
    },
    {
      id: 'pending-approval',
      label: 'Pending Approval',
      path: '/pending-approval',
      isActive: location.pathname === '/pending-approval'
    },
    {
      id: 'approved-timesheets',
      label: 'Approved',
      path: '/approved-timesheets',
      isActive: location.pathname === '/approved-timesheets'
    },


  ]

  const projectItems = [
    {
      id: 'my-projects',
      label: 'My Projects',
      //icon: Users,
      icon: MyProject,
      path: '/my-projects',
      isActive: location.pathname === '/my-projects'
    },
  ]
    const myprofileItems = [
        {
            id: 'my-profile',
            label: 'My Profile',
            //icon: Users,
            icon: MyProfile,
            path: '/my-profile',
            isActive: location.pathname === '/my-profile'
        },
    ]
  const expensesItems = [
    {
      id: 'my-expenses',
      label: 'My Expenses',
      //icon: Users,
      icon: MyExpenses,
      path: '/my-expenses',
      isActive: location.pathname === '/my-expenses'
    },
  ]
  const invoiceItems = [
    {
      id: 'my-invoice',
      label: 'My Invoice',
      //icon: Users,
      icon: MyInvoice,
      path: '/my-invoice',
      isActive: location.pathname === '/my-invoice'
    },
  ]
const changepasswordItems = [
    {
      id: 'change-password',
      label: 'Change Password',
      //icon: Users,
      icon: ChangePassword,
      path: '/change-password',
      isActive: location.pathname === '/change-password'
    },
  ]
  const handleNavigation = (path) => {
    navigate(path)
  }

  const NavItem = ({ item, className = "" }) => (
    <Button
      variant="ghost"
      className={cn(
        "cursor-pointer w-full justify-start px-3 py-2 h-auto font-normal transition-all duration-200 rounded-lg",
        item.isActive
          ? "menu-active primary font-semibold shadow-sm after:bg-[var(--primary2)]"
          : "text-gray-600 hover:bg-gradient-to-b hover:text-[var(--primary2)] hover:shadow-sm hover:font-semibold",
        className
      )}
      onClick={() => handleNavigation(item.path)}
    >
      {item.icon && <item.icon className="mr-3 h-4 w-4" />}
      {item.label}
    </Button>
  )

  return (
      <div className="w-64 h-full rounded-none flex flex-col bg-white border-r-1 border-light">

        <div className={'border-b-1 border-light'}>
          <img className='cursor-pointer' onClick={() => navigate('/profile')} src="assets/img/logo-2.png"
               alt="scyne logo" width={300} height={300}/>
        </div>
        <CardContent className="flex-1 p-4 space-y-2">

          {/* Dashboard Section */}
          <div className="space-y-1">
            {dashboardItems.map((item) => (
                <NavItem className={'flex gap-2'} key={item.id} item={item}/>
            ))}
          </div>


          {/* Organization Section */}
          <div className="space-y-1">
            <Button
                variant="ghost"
                className="cursor-pointer w-full justify-between px-3 py-2 h-auto font-normal text-gray-600 hover:bg-gradient-to-b hover:from-[#464E7E]/10 hover:to-[#7388BE]/10 hover:text-gray-900 transition-all duration-200 rounded-lg"
                onClick={() => setIsOrganizationOpen(!isOrganizationOpen)}
            >
              <div className="flex gap-2 items-center">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.75 2.89288C8.41855 2.8931 8.10073 3.02487 7.86636 3.25924C7.63199 3.49362 7.50022 3.81143 7.5 4.14288H12.5C12.5 3.81136 12.3683 3.49342 12.1339 3.259C11.8995 3.02458 11.5815 2.89288 11.25 2.89288H8.75ZM6.50583 3.04122C6.71179 2.62166 7.03124 2.26824 7.42792 2.02107C7.8246 1.77391 8.28262 1.64289 8.75 1.64288H11.25C11.7175 1.64273 12.1757 1.77368 12.5726 2.02085C12.9694 2.26803 13.289 2.62153 13.495 3.04122C13.9092 3.07622 14.3217 3.11788 14.7333 3.16622C15.9808 3.31038 16.875 4.38288 16.875 5.60705V16.6429C16.875 17.3059 16.6116 17.9418 16.1428 18.4107C15.6739 18.8795 15.038 19.1429 14.375 19.1429H5.625C4.96196 19.1429 4.32607 18.8795 3.85723 18.4107C3.38839 17.9418 3.125 17.3059 3.125 16.6429V5.60705C3.125 4.38205 4.01917 3.31038 5.26667 3.16538C5.6775 3.11788 6.09083 3.07705 6.50583 3.04122Z"
                        fill="#999999"/>
                </svg>


                Timesheets
              </div>
              {isOrganizationOpen ? (
                  <ChevronDown className="h-4 w-4 "/>
              ) : (
                  <ChevronRight className="h-4 w-4 "/>
              )}
            </Button>

            {isOrganizationOpen && (
                <div className="space-y-1">
                  {organizationItems.map((item) => (
                      <NavItem className={'ps-10 hover:shadow-none mb-0 hover:text-[var(--primary2)] relative after:w-[2px] after:h-full after:bg-[#EAEAEA] after:absolute after:left-5 hover:after:w-[3px] hover:after:bg-[var(--primary2)]'} key={item.id} item={item}/>
                  ))}
                </div>
            )}
          </div>



          {/* Projects */}
          <div className="space-y-1">
            {projectItems.map((item) => (
                <NavItem className={'flex gap-2'} key={item.id} item={item}/>
            ))}
          </div>

          {/* Expenses */}
          <div className="space-y-1">
            {expensesItems.map((item) => (
                <NavItem className={'flex gap-2'} key={item.id} item={item}/>
            ))}
          </div>

            {/* Expenses */}
          <div className="space-y-1">
            {invoiceItems.map((item) => (
                <NavItem className={'flex gap-2'} key={item.id} item={item}/>
            ))}
          </div>

        </CardContent>

        {/* Footer */}
          <div className="p-4 border-t border-light">
              <div className="space-y-1">
                  {changepasswordItems.map((item) => (
                      <NavItem className={'flex gap-2'} key={item.id} item={item}/>
                  ))}
              </div>
              <div className={'space-y-1'}>
                  {myprofileItems.map((item) => (
                      <NavItem className={'flex gap-2'} key={item.id} item={item}/>
                  ))}
              </div>
              <div className={'space-y-1'}>
                  <button data-slot="button"
                          className="items-center whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 has-[&gt;svg]:px-3 cursor-pointer w-full justify-start px-3 py-2 h-auto font-normal transition-all duration-200 rounded-lg text-gray-600 hover:bg-gradient-to-b hover:from-[#464E7E]/10 hover:to-[#7388BE]/10 hover:text-gray-900 flex gap-2">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M12.7109 8V4.875C12.7109 4.37772 12.5134 3.90081 12.1618 3.54917C11.8101 3.19754 11.3332 3 10.8359 3H5.83594C5.33866 3 4.86174 3.19754 4.51011 3.54917C4.15848 3.90081 3.96094 4.37772 3.96094 4.875V16.125C3.96094 16.6223 4.15848 17.0992 4.51011 17.4508C4.86174 17.8025 5.33866 18 5.83594 18H10.8359C11.3332 18 11.8101 17.8025 12.1618 17.4508C12.5134 17.0992 12.7109 16.6223 12.7109 16.125V13M15.2109 13L17.7109 10.5M17.7109 10.5L15.2109 8M17.7109 10.5H7.08594"
                              stroke="black" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                      Log Out
                  </button>
              </div>

          </div>
      </div>
  )
}

export default Sidebar

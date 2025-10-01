
import { useState } from 'react'
import { ReactHierarchyChart } from '../components/hierarchy'
import { Button } from '@/components/ui/button'

export default function HierarchyChart() {

  // Sample hierarchy data - updated to match the design from the image
  const hierarchyData = [
    {
      key: "ceo",
      cssClass: "ceo-node",
      childs: [
        { key: "design", cssClass: "department-node" },
        { key: "development", cssClass: "department-node" },
        { key: "sales", cssClass: "department-node" },
        { key: "marketing", cssClass: "department-node" },
        { key: "events", cssClass: "department-node" },
        { key: "advertising", cssClass: "department-node" }
      ]
    }
  ]

  // Function to render node content
  const renderNode = (node) => {
    const nodeLabels = {
      ceo: "CEO",
      cto: "CTO",
      cfo: "CFO",
      coo: "COO",
      frontend: "Frontend Lead",
      backend: "Backend Lead",
      devops: "DevOps Engineer",
      accountant: "Accountant",
      analyst: "Financial Analyst",
      operations: "Operations Manager",
      hr: "HR Manager",
      marketing: "Marketing Manager"
    }

    if (node.key === "ceo") {
      return (
        <div
          className={'timeline-card border-1 border-[var(--primary-border)] min-w-[270px] mx-auto bg-[var(--light-300)] rounded-[16px]'}>
          <div className={'border-b-1 border-[var(--primary-border)] text-center p-4'}>
            <img src="assets/img/logo.png"
              alt="profile-img" className={'w-[75px] block mx-auto'} />
          </div>
          <div className={'p-4 flex justify-between gap-1'}>
            <div>
              <p className={'mb-1 text-[var(--light)] text-[12px] sm:text-[12px] md:text-[16px]'}>Avg. Skills Set</p>
              <h3 className={'font-semibold text-[var(--primary)] text-[16px] sm:text-[16px] md:text-[24px]'}>79.97%</h3>
            </div>
            <div>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M28 56C12.536 56 1.91483e-06 43.464 2.59078e-06 28C3.26673e-06 12.536 12.536 -1.89987e-06 28 -1.22392e-06C43.464 -5.47967e-07 56 12.536 56 28C56 43.464 43.464 56 28 56ZM28 11.2C18.7216 11.2 11.2 18.7216 11.2 28C11.2 37.2784 18.7216 44.8 28 44.8C37.2784 44.8 44.8 37.2784 44.8 28C44.8 18.7216 37.2784 11.2 28 11.2Z"
                  fill="#B9C5DE" />
                <path
                  d="M28 -1.22392e-06C33.9002 -4.50195e-07 39.6497 1.86387 44.4277 5.32557C49.2058 8.78727 52.7681 13.6699 54.6064 19.2764C56.4446 24.883 56.4648 30.927 54.664 36.5457C52.8632 42.1645 49.3335 47.0707 44.5787 50.5643C39.8239 54.0578 34.087 55.96 28.1869 55.9994C22.2868 56.0388 16.525 54.2133 11.724 50.7836C6.92299 47.3539 3.32809 42.4952 1.45245 36.901C-0.423192 31.3068 -0.483716 25.2631 1.27952 19.6325L11.9677 22.9795C10.9098 26.3578 10.9461 29.9841 12.0715 33.3406C13.1969 36.6971 15.3538 39.6123 18.2344 41.6702C21.115 43.728 24.5721 44.8233 28.1122 44.7996C31.6522 44.776 35.0944 43.6347 37.9472 41.5386C40.8001 39.4424 42.9179 36.4987 43.9984 33.1274C45.0789 29.7562 45.0668 26.1298 43.9638 22.7659C42.8609 19.4019 40.7235 16.4724 37.8566 14.3953C34.9898 12.3183 31.5401 11.2 28 11.2L28 -1.22392e-06Z"
                  fill="#464E7E" />
              </svg>

            </div>
          </div>
        </div>
      )
    }

    // For department nodes, render the department card
    if (node.key === "design" || node.key === "development" || node.key === "sales" ||
      node.key === "marketing" || node.key === "events" || node.key === "advertising") {

      const departmentData = {
        design: {
          name: "Design & Arts Department",
          skills: "78.00%",
          employees: [
            { name: "Allison Bator", department: "Design & Arts Department" },
          ]
        },
        development: {
          name: "Development Department",
          skills: "72.00%",
          employees: [
            { name: "Craig Ekstrom Bothman", department: "Development Department" },
          ]
        },
        sales: {
          name: "Sales Department",
          skills: "89.84%",
          employees: [
            { name: "Allison Gouse", department: "Sales Department" },
          ]
        },
        marketing: {
          name: "Marketing Department",
          skills: "80.00%",
          employees: [
            { name: "Maria Herwitz", department: "Marketing Department" },
          ]
        },
        events: {
          name: "Event Management",
          skills: "75.00%",
          employees: [
            { name: "Talan Gouse", department: "Event Management" },
          ]
        },
        advertising: {
          name: "Advertising Department",
          skills: "85.00%",
          employees: [
            { name: "Ahmad Westervelt", department: "Advertising Department" },
          ]
        }
      }

      const dept = departmentData[node.key]


      return (
        <div>
          <div className={'timeline-card border-1 border-[var(--border-light)] max-w-[270px] mx-auto rounded-[16px] bg-white shadow-sm'}>
            <div className={'border-b-1 border-[var(--border-light)] p-4'}>
              <h6 className={'text-[14px] sm:text-[14px] md:text-[16px] font-semibold text-center'}>{dept.name}</h6>
            </div>
            <div className={'p-4 flex justify-between gap-1'}>
              <div>
                <p className={'mb-1 text-[var(--light)] text-[12px] sm:text-[12px] md:text-[16px]'}>Avg. Skills Set</p>
                <h3 className={'font-semibold text-[var(--primary)] text-[16px] sm:text-[16px] md:text-[24px]'}>{dept.skills}</h3>
              </div>
              <div>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M28 56C12.536 56 1.91483e-06 43.464 2.59078e-06 28C3.26673e-06 12.536 12.536 -1.89987e-06 28 -1.22392e-06C43.464 -5.47967e-07 56 12.536 56 28C56 43.464 43.464 56 28 56ZM28 11.2C18.7216 11.2 11.2 18.7216 11.2 28C11.2 37.2784 18.7216 44.8 28 44.8C37.2784 44.8 44.8 37.2784 44.8 28C44.8 18.7216 37.2784 11.2 28 11.2Z"
                    fill="#B9C5DE" />
                  <path
                    d="M28 -1.22392e-06C33.9002 -4.50195e-07 39.6497 1.86387 44.4277 5.32557C49.2058 8.78727 52.7681 13.6699 54.6064 19.2764C56.4446 24.883 56.4648 30.927 54.664 36.5457C52.8632 42.1645 49.3335 47.0707 44.5787 50.5643C39.8239 54.0578 34.087 55.96 28.1869 55.9994C22.2868 56.0388 16.525 54.2133 11.724 50.7836C6.92299 47.3539 3.32809 42.4952 1.45245 36.901C-0.423192 31.3068 -0.483716 25.2631 1.27952 19.6325L11.9677 22.9795C10.9098 26.3578 10.9461 29.9841 12.0715 33.3406C13.1969 36.6971 15.3538 39.6123 18.2344 41.6702C21.115 43.728 24.5721 44.8233 28.1122 44.7996C31.6522 44.776 35.0944 43.6347 37.9472 41.5386C40.8001 39.4424 42.9179 36.4987 43.9984 33.1274C45.0789 29.7562 45.0668 26.1298 43.9638 22.7659C42.8609 19.4019 40.7235 16.4724 37.8566 14.3953C34.9898 12.3183 31.5401 11.2 28 11.2L28 -1.22392e-06Z"
                    fill="#464E7E" />
                </svg>
              </div>
            </div>
          </div>
          <div className={'px-0 pt-2'}>
            {dept.employees.map((employee, index) => (
              <div key={index}>
                <div
                  className={'timeline-card border-1 border-[var(--border-light)] max-w-[270px] mx-auto rounded-[16px] bg-[var(--bg-light)]'}>
                  <div className={'px-2 pt-3'}>
                    <div className={'flex gap-3 items-center mb-3 flex-col sm:flex-col md:flex-row justify-center text-center md:justify-start md:text-start'}>
                      <div className={'flex-[0_0_40px] w-[40px] h-[40px] overflow-hidden rounded-3xl'}>
                        <img src="assets/img/profile-img.png" alt="profile-img"
                          className={'w-full h-full object-cover'} />
                      </div>
                      <div>
                        <h6 className={'text-[14px] font-medium'}>
                          Allison Bator
                        </h6>
                        <p className={'text-[var(--light)] text-[12px]'}>Design & Arts Department</p>
                      </div>
                      
                    </div>
                    <div
                        className={'flex gap-3 items-center mb-3 flex-col sm:flex-col md:flex-row justify-center text-center md:justify-start md:text-start'}>
                      <div className={'flex-[0_0_40px] w-[40px] h-[40px] overflow-hidden rounded-3xl'}>
                        <img src="assets/img/profile-img.png" alt="profile-img"
                             className={'w-full h-full object-cover'}/>
                      </div>
                      <div>
                        <h6 className={'text-[14px] font-medium'}>
                          Allison Bator
                        </h6>
                        <p className={'text-[var(--light)] text-[12px]'}>Design & Arts Department</p>
                      </div>

                    </div>

                  </div>
                  <hr className={'border-[var(--border-light)] mt-3'}/>
                  <Button variant="outline"
                    className="btn flex gap-1 text-[var(--light)] justify-center border-0 w-full py-0 sm:text-[12px] md:text-[16px]">
                    View All
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.166 7.81755L3.16602 7.81755" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path d="M9.13281 3.80083L13.1661 7.81683L9.13281 11.8335" stroke="#7C7C7C" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  </Button>
                </div>

              </div>
            ))}

          </div>
        </div>
      )
    }
    // <hr className={'border-[var(--border-light)] mt-3'} />
    //       <button className="flex gap-1 justify-center border-0 w-full py-3 text-[var(--light)] hover:text-[var(--primary)] transition-colors">
    //         View All
    //         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M13.166 7.81755L3.16602 7.81755" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    //             strokeLinejoin="round" />
    //           <path d="M9.13281 3.80083L13.1661 7.81683L9.13281 11.8335" stroke="currentColor" strokeWidth="1.5"
    //             strokeLinecap="round" strokeLinejoin="round" />
    //         </svg>
    //       </button>
    // <div key={index} className={'flex gap-2 items-center mb-3'}>
    //             <div className={'flex-[0_0_40px] w-[40px] h-[40px] overflow-hidden rounded-3xl'}>
    //               <img src="assets/img/profile-img.png" alt="profile-img"
    //                 className={'w-full h-full object-cover'} />
    //             </div>
    //             <div>
    //               <h6 className={'text-[14px] font-medium'}>
    //                 {employee.name}
    //               </h6>
    //               <p className={'text-[var(--light)] text-[12px]'}>{employee.department}</p>
    //             </div>
    //           </div>
    // For all other nodes, render the simple label
    return (
      <div className="text-center">
        <div className="font-semibold text-sm">
          {nodeLabels[node.key] || node.key}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div
        className="bg-muted/20 min-h-[600px] overflow-auto"
      >
        <ReactHierarchyChart
          nodes={hierarchyData}
          direction="vertical"
          renderNode={renderNode}
        />
      </div>
    </div>
  )
}
